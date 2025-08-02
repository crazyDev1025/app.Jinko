import React, { useState, useRef, useEffect, useContext } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navbar, useTheme, Image, Button } from "@nextui-org/react";
import { Burger, Drawer, Flex } from "@mantine/core";
import { useMediaQuery } from "react-responsive";
import { FormattedMessage, useIntl } from "react-intl";
import { useNotifications } from "reapop";
import Countdown from "react-countdown";

// import Footer from 'components/Footer'
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useTokenAuth } from "hooks/useTokenAuth";
import useMiddlewareTranslation from "hooks/useMiddlewareTranslation";
import PageLoaderStudio from "components/Loader/PageLoaderStudio";
import { ComponentsContext } from "contexts/ComponentsContext";
import { GeneralText } from "components/GlobalStyle";
import { ConnectWallet } from "components/ConnectWallet";
import LangSelector from "components/LangSelector";

const growAndFade = keyframes`
  0% {
    opacity: 0.50;
    transform: scale(0);
  }
  100% {
    opacity: 0;
    transform: scale(1);
  }
`;

const CirclesContainer = styled.div`
  height: 3rem;
  position: relative;
  width: 3rem;
  position: absolute;
  top: -1.2rem;
  right: -1.6rem;
`;

const Circle = styled.div`
  animation: ${growAndFade} 3s infinite ease-out;
  background-color: #e5ff00;
  border-radius: 50%;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

const CircleNoAnim = styled.div`
  background-color: #e5ff00;
  border-radius: 50%;
  height: 15%;
  position: absolute;
  width: 15%;
  top: 50%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */

  transform: translate(-50%, -50%);
`;

const Circle1 = styled(Circle)`
  animation-delay: 1s;
`;

const Circle2 = styled(Circle)`
  animation-delay: 2s;
`;

const Circle3 = styled(Circle)`
  animation-delay: 3s;
`;

const ButtonHome = styled(Button)<{
  height: string;
  width: string;
  bg: string;
}>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  padding: 0px;
  min-width: ${({ width }) => width};
  border-radius: 20px;
  background-color: ${({ bg }) => bg}!important;
  :hover {
    cursor: pointer;
  }
`;
const NavbarBrand = styled(Navbar.Brand)`
  @media only screen and (min-width: 0px) and (max-width: 339px) {
    display: none;
  }
`;
type NavDrawerProps = {
  menuItems?: { name: string; link: string }[];
};

const RippleEffect = () => {
  return (
    <CirclesContainer>
      <CircleNoAnim />
      <Circle1 />
      <Circle2 />
      <Circle3 />
    </CirclesContainer>
  );
};

const NavDrawer: React.FC<NavDrawerProps> = ({ menuItems }) => {
  const intl = useIntl();
  const { tokenValidity, content } = useTokenAuth();
  const { notify } = useNotifications();
  const { onGetTranslation } = useMiddlewareTranslation();
  const { chainId, account } = useActiveWeb3React();
  const {
    navOpened,
    navOpen,
    navClose,
    credit,
    creditsPackages,
    jinkoBalance,
  } = useContext(ComponentsContext);
  const [isOverlapLoading, setIsOverlapLoading] = useState<{
    isLoading: boolean;
    title: { id: string; defaultMessage: string };
  }>({ isLoading: false, title: { id: "", defaultMessage: "" } });

  return (
    <>
      <Drawer
        opened={navOpened}
        onClose={navClose}
        withCloseButton={false}
        position="left"
        overlayProps={{ opacity: 0.5, blur: 4 }}
        transitionProps={{ duration: 400, timingFunction: "" }}
        styles={() => ({
          inner: {
            top: "76px",
            width: "228px",
          },
          content: {
            backgroundColor: "var(--blackColor)",
            backgroundImage:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%)",
          },
        })}
      >
        {menuItems.map((item) => {
          if(item.name === "Staking Pool") {
            return <Countdown
              date={new Date(parseInt(process.env.REACT_APP_STAKING_START_DATE))}
              renderer={({ completed }) => {
                if (completed) {
                  return <Link
                    to={item.link}
                    onClick={() => navClose()}
                    className="nav-link"
                    key={item.name}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <GeneralText
                      size="clamp(1.3rem,2vw,1.8rem)"
                      color="#FFFFFF"
                      weight="bold"
                      css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }}
                    >
                      {item.name}
                    </GeneralText>
                  </Link>;
                }
                return <></>;
              }
          }/>}
          return <Link
            to={item.link}
            onClick={() => navClose()}
            className="nav-link"
            key={item.name}
            style={{ whiteSpace: "nowrap" }}
          >
            <GeneralText
              size="clamp(1.3rem,2vw,1.8rem)"
              color="#FFFFFF"
              weight="bold"
              css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }}
            >
              {item.name}
            </GeneralText>
          </Link>;
})}
      </Drawer>
      {isOverlapLoading.isLoading && (
        <PageLoaderStudio>
          <GeneralText
            size="clamp(1.3rem,2vw,1.8rem)"
            color="#FFFFFF"
            weight="bold"
            css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }}
          >
            {isOverlapLoading.title.id && (
              <FormattedMessage
                {...isOverlapLoading.title}
                values={{
                  br: <br />,
                }}
              />
            )}
          </GeneralText>
        </PageLoaderStudio>
      )}
    </>
  );
};

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const intl = useIntl();
  const { isDark } = useTheme();
  const isMobile = useMediaQuery({ query: `(max-width: 960px)` });

  const location = useLocation();
  const { pathname } = location;

  const navbarToggleRef = useRef(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(
    window.location.href.split(`${window.location.origin}`)[1]
  );
  const { navOpened, navOpen, navClose } = useContext(ComponentsContext);

  const handleSideMenu = (link) => {
    setActiveMenu(link);
    if (navOpened) navClose();
    else navOpen();
    // return isSideMenuOpen && navbarToggleRef?.current?.click()
  };

  const menuItems = [
    {
      name: intl.formatMessage({
        id: "claim-rewards",
        defaultMessage: "Claim Rewards",
      }),
      link: "/claim-rewards",
    },
    {
      name: intl.formatMessage({
        id: "staking-pool",
        defaultMessage: "Staking Pool",
      }),
      link: "/staking-pool",
    },
    // {
    //   name: intl.formatMessage({ id: "referral", defaultMessage: "Referral" }),
    //   link: '#!'
    // },
    // {
    //   name: intl.formatMessage({ id: "home", defaultMessage: "Home" }),
    //   link: '/home'
    // },
  ];

  return (
    <>
      <Navbar
        isBordered={false}
        disableShadow
        disableBlur
        maxWidth="fluid"
        css={{ zIndex: "9999" }}
        className="cs-navbar"
        id="cs-navbar"
      >
        <NavbarBrand style={{ marginRight: "20px", gap: "15px" }}>
          {/* <Navbar.Toggle showIn="sm" aria-label="toggle navigation" autoFocus ref={navbarToggleRef}
            onChange={(isSelected) => setIsSideMenuOpen(isSelected)} /> */}
          {isMobile ? (
            <>
              <Burger
                size="sm"
                color="#ffffff"
                opened={navOpened}
                onClick={handleSideMenu}
                aria-label="navigation"
              />
              <ButtonHome
                width="40px"
                height="40px"
                bg="var(--yellowColor)"
                onClick={() => {
                  window.location.href = `${process.env.REACT_APP_LANDING_LINK}`;
                }}
              >
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.64347 18.7992V12.795H13.4468V18.7992C13.4468 19.4596 13.9872 20 14.6477 20H18.2502C18.9107 20 19.451 19.4596 19.451 18.7992V10.3933H21.4925C22.0449 10.3933 22.309 9.7088 21.8887 9.34854L11.8497 0.306214C11.3934 -0.102071 10.6969 -0.102071 10.2406 0.306214L0.201563 9.34854C-0.206722 9.7088 0.0454541 10.3933 0.597841 10.3933H2.63927V18.7992C2.63927 19.4596 3.17965 20 3.84011 20H7.44263C8.10309 20 8.64347 19.4596 8.64347 18.7992Z"
                    fill="black"
                  />
                </svg>
              </ButtonHome>
            </>
          ) : (
            <Image
              src="/images/jinko-logo.png"
              alt="Whitelabel Image"
              width="150px"
              onClick={() => {
                window.location.href = `${process.env.REACT_APP_LANDING_LINK}`;
              }}
              style={{ cursor: "pointer" }}
            />
          )}
        </NavbarBrand>
        <Navbar.Content
          hideIn="sm"
          className="upper-item-navbar"
          style={{
            justifyContent: "flex-end",
            width: "100%",
            gap: "20px",
            paddingRight: "20px",
          }}
        >
          {menuItems.map((mItem) => {
            if (mItem.name === "Claim Rewards") {
              return (
                <Navbar.Link
                  key={mItem.name}
                  href={mItem.link}
                  className={pathname.includes(mItem.link) ? "active" : ""}
                  style={{ whiteSpace: "nowrap" }}
                >
                  <Flex
                    style={{
                      position: "relative",
                      height: "100%",
                      alignItems: "center",
                    }}
                  >
                    <GeneralText
                      size="1rem"
                      color="white"
                      weight="bold"
                      style={{ fontFamily: "var(--fontFamily1)", zIndex: "1" }}
                    >
                      {mItem.name}
                    </GeneralText>
                    <RippleEffect />
                  </Flex>
                </Navbar.Link>
              );
            }
            if (mItem.name === "Staking Pool") {
              return (
                <Countdown
                  date={
                    new Date(parseInt(process.env.REACT_APP_STAKING_START_DATE))
                  }
                  renderer={({ completed }) => {
                    if (completed) {
                      return (
                        <Navbar.Link
                          key={mItem.name}
                          href={mItem.link}
                          className={
                            pathname.includes(mItem.link) ? "active" : ""
                          }
                          style={{ whiteSpace: "nowrap" }}
                        >
                          <GeneralText
                            size="1rem"
                            color="white"
                            weight="bold"
                            style={{ fontFamily: "var(--fontFamily1)" }}
                          >
                            {mItem.name}
                          </GeneralText>
                        </Navbar.Link>
                      );
                    }
                    return <></>;
                  }}
                />
              );
            }
            return (
              <Navbar.Link
                key={mItem.name}
                href={mItem.link}
                className={pathname.includes(mItem.link) ? "active" : ""}
                style={{ whiteSpace: "nowrap" }}
              >
                <GeneralText
                  size="1rem"
                  color="white"
                  weight="bold"
                  style={{ fontFamily: "var(--fontFamily1)" }}
                >
                  {mItem.name}
                </GeneralText>
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
        <Navbar.Content gap="5px" style={{ justifyContent: "flex-end" }}>
          <LangSelector />
          <ConnectWallet />
        </Navbar.Content>
        {/* <Navbar.Collapse>
          {menuItems.map((item) => (
            <Navbar.CollapseItem key={item.name} isActive={item.link === activeMenu} css={{
              color: 'var(--whiteColor)',
              justifyContent: 'center',
            }}>
              <Link to={item.link} onClick={() => handleSideMenu(item.link)} className={pathname.includes(item.link) ? "active" : ""}>
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse> */}
      </Navbar>
      {/* {isMobile ? null :
        <Navbar isBordered disableShadow disableBlur variant="static" className="cs-navbar2">
          <Navbar.Content hideIn="sm">
            {menuItems.map((mItem) => (
              <Navbar.Link key={mItem.name} href={mItem.link} className={pathname.includes(mItem.link) ? "active" : ""}>
                {mItem.name}
              </Navbar.Link>
            ))}
          </Navbar.Content>
        </Navbar>
      } */}
      <NavDrawer menuItems={menuItems} />
    </>
  );
};

export default Menu;
