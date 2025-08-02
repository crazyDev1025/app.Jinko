import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { Container, Flex } from "@mantine/core";
import { Popover } from "@nextui-org/react";
import { useNotifications } from "reapop";
import { useMediaQuery } from "react-responsive";

import { useTranslation } from "contexts/I18nContext";
import { GeneralText, ButtonIcon } from "components/GlobalStyle";
import { useTokenAuth } from "hooks/useTokenAuth";
import useMiddlewareTranslation from "../../hooks/useMiddlewareTranslation";
import { ChangeEmailModal } from "./components/CustomModals";

const BentoGridSelector = styled(Flex)<{
  isactivated?: string;
  bgdesktopimage?: string;
  bgmobileimage?: string;
}>`
  height: 100%;
  width: 100%;
  border: ${({ isactivated }) =>
    isactivated === "true" ? "3px solid #E5FF00" : "3px solid #E5FF00"};
  position: relative;
  border-radius: 10px;
  // min-height: 130px;
  // min-width: 70px;
  // max-height: 143px;
  // max-width: 86px;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // padding:2px;
  cursor: pointer;
  position: relative;
  @media only screen and (min-width: 0px) and (max-width: 991px) {
    background-image: ${({ bgmobileimage }) => bgmobileimage || ""};
  }
  @media only screen and (min-width: 992px) {
    background-image: ${({ bgdesktopimage }) => bgdesktopimage || ""};
  }

  ${({ isactivated }) =>
    isactivated === "false" &&
    `
&:after {
  content: '';
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius:10px;
  background: rgba(0,0,0,0.5);
  cursor:not-allowed;
  z-index: 2;
}
`}
`;

const BentoGridContainer = styled(Flex)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-auto-flow: dense;
  @media only screen and (min-width: 0px) and (max-width: 991px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(17, 1fr);
    & :nth-of-type(1) {
      grid-column: 1/7;
      grid-row: 1/4;
    }
    & :nth-of-type(2) {
      grid-column: 1/4;
      grid-row: 4/8;
    }
    & :nth-of-type(3) {
      grid-column: 4/7;
      grid-row: 4/8;
    }
    & :nth-of-type(4) {
      grid-column: 1/7;
      grid-row: 8/11;
    }
    & :nth-of-type(5) {
      grid-column: 1/4;
      grid-row: 11/15;
    }
    & :nth-of-type(6) {
      grid-column: 4/7;
      grid-row: 11/15;
    }

    & :nth-of-type(7) {
      grid-column: 1/7;
      grid-row: 15/18;
    }
  }

  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(18, 1fr);
    grid-template-rows: repeat(6, 1fr);

    & :nth-of-type(1) {
      grid-column: 1/10;
      grid-row: 1/3;
    }
    & :nth-of-type(2) {
      grid-column: 10/19;
      grid-row: 1/3;
    }
    & :nth-of-type(3) {
      grid-column: 1/7;
      grid-row: 3/7;
    }
    & :nth-of-type(4) {
      grid-column: 7/19;
      grid-row: 3/5;
    }
    & :nth-of-type(5) {
      grid-column: 7/11;
      grid-row: 5/7;
    }
    & :nth-of-type(6) {
      grid-column: 11/15;
      grid-row: 5/7;
    }

    & :nth-of-type(7) {
      grid-column: 15/19;
      grid-row: 5/7;
    }
  }
`;

const BentoGridSelectorVideoBg = styled.video`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  object-position: right;
`;

const ContainerWrapper = styled.div`
  background-image: url(/images/background-ellipse.png);
  background-position-x: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;
  height: 100%;
  paddingbottom: 14px;
  overflow: hidden;
`;

const Dashboard: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { tokenValidity, content } = useTokenAuth();
  const { notify } = useNotifications();
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
  const {
    currentLanguage: { locale: currLang },
  } = useTranslation();
  const { onGetTranslation } = useMiddlewareTranslation();

  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
  const handlePopover = () => setIsOpenPopover(!isOpenPopover);
  const [isChangeEmailModalVisible, setIsChangeEmailModallVisible] =
    useState<boolean>(false);

  const handleGridSelectorButtonOnClick = (page: string) => {
    navigate(`/${page}`);
  };

  const handleChangeEmailModalOnClick = () => {
    setIsOpenPopover(false);
    setIsChangeEmailModallVisible(true);
  };

  const handleChangeEmailModalOnConfirm = () => {
    setIsChangeEmailModallVisible(false);
  };

  const handleChangeEmailModalOnClose = () => {
    setIsChangeEmailModallVisible(false);
  };

  return (
    <>
      <ChangeEmailModal
        show={isChangeEmailModalVisible}
        onClose={() => handleChangeEmailModalOnClose()}
        onConfirm={() => handleChangeEmailModalOnConfirm()}
      />
      <ContainerWrapper>
        <Container
          style={{ paddingBottom: "14px", overflow: "hidden", height: "100%" }}
        >
          <Flex direction="column" style={{ height: "100%", width: "100%" }}>
            <Flex
              direction="row"
              justify="space-between"
              align="center"
              style={{ height: "10%", width: "100%" }}
            >
              <GeneralText
                size="clamp(1.3rem,2vw,1.8rem)"
                color="#E5FF00"
                weight="bold"
                css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }}
              >
                <FormattedMessage
                  id="home"
                  defaultMessage="Home"
                  values={{ br: <br /> }}
                />
              </GeneralText>
              <Popover
                placement="bottom-right"
                isOpen={isOpenPopover}
                onOpenChange={handlePopover}
              >
                <Popover.Trigger>
                  <svg
                    style={{ alignSelf: "center", cursor: "pointer" }}
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5307 9.99493C16.4105 9.85808 16.3442 9.68216 16.3442 9.5C16.3442 9.31784 16.4105 9.14192 16.5307 9.00507L17.4906 7.92521C17.5964 7.80723 17.6621 7.65878 17.6782 7.50115C17.6944 7.34353 17.6602 7.18483 17.5806 7.04783L16.0808 4.45319C16.002 4.31635 15.882 4.20788 15.7379 4.14324C15.5938 4.07861 15.433 4.06111 15.2784 4.09324L13.8686 4.3782C13.6892 4.41526 13.5025 4.38539 13.3436 4.29421C13.1847 4.20303 13.0647 4.05685 13.0062 3.88326L12.5488 2.51095C12.4985 2.362 12.4026 2.23264 12.2748 2.14113C12.147 2.04963 11.9936 2.00061 11.8364 2.00102H8.83679C8.67327 1.99248 8.51144 2.03771 8.37603 2.12979C8.24062 2.22187 8.13907 2.35574 8.0869 2.51095L7.66695 3.88326C7.60846 4.05685 7.48846 4.20303 7.32958 4.29421C7.17071 4.38539 6.98396 4.41526 6.80457 4.3782L5.35727 4.09324C5.2107 4.07252 5.06128 4.09565 4.92784 4.15971C4.79439 4.22376 4.68289 4.32588 4.60737 4.45319L3.10757 7.04783C3.02595 7.1833 2.98926 7.34111 3.00272 7.49869C3.01619 7.65627 3.07914 7.80556 3.18256 7.92521L4.13493 9.00507C4.25516 9.14192 4.32146 9.31784 4.32146 9.5C4.32146 9.68216 4.25516 9.85808 4.13493 9.99493L3.18256 11.0748C3.07914 11.1944 3.01619 11.3437 3.00272 11.5013C2.98926 11.6589 3.02595 11.8167 3.10757 11.9522L4.60737 14.5468C4.68618 14.6837 4.80618 14.7921 4.95026 14.8568C5.09434 14.9214 5.25515 14.9389 5.40976 14.9068L6.81957 14.6218C6.99896 14.5847 7.18571 14.6146 7.34458 14.7058C7.50345 14.797 7.62346 14.9431 7.68195 15.1167L8.13939 16.489C8.19157 16.6443 8.29311 16.7781 8.42852 16.8702C8.56393 16.9623 8.72576 17.0075 8.88929 16.999H11.8889C12.0461 16.9994 12.1995 16.9504 12.3273 16.8589C12.4551 16.7674 12.551 16.638 12.6013 16.489L13.0587 15.1167C13.1172 14.9431 13.2372 14.797 13.3961 14.7058C13.555 14.6146 13.7417 14.5847 13.9211 14.6218L15.3309 14.9068C15.4855 14.9389 15.6463 14.9214 15.7904 14.8568C15.9345 14.7921 16.0545 14.6837 16.1333 14.5468L17.6331 11.9522C17.7127 11.8152 17.7469 11.6565 17.7307 11.4988C17.7146 11.3412 17.6489 11.1928 17.5431 11.0748L16.5307 9.99493ZM15.4134 10.9998L16.0133 11.6747L15.0534 13.3395L14.1686 13.1595C13.6285 13.0491 13.0666 13.1408 12.5897 13.4173C12.1128 13.6938 11.754 14.1357 11.5814 14.6593L11.2965 15.4992H9.37672L9.10676 14.6443C8.93417 14.1208 8.57537 13.6788 8.09845 13.4023C7.62153 13.1258 7.0597 13.0341 6.51961 13.1445L5.63473 13.3245L4.65986 11.6672L5.25978 10.9923C5.6287 10.5798 5.83265 10.0459 5.83265 9.4925C5.83265 8.93913 5.6287 8.40517 5.25978 7.9927L4.65986 7.3178L5.61973 5.66802L6.50461 5.848C7.0447 5.9584 7.60653 5.86665 8.08345 5.59018C8.56037 5.31371 8.91917 4.87175 9.09176 4.3482L9.37672 3.50082H11.2965L11.5814 4.3557C11.754 4.87925 12.1128 5.32121 12.5897 5.59768C13.0666 5.87415 13.6285 5.9659 14.1686 5.8555L15.0534 5.67552L16.0133 7.34029L15.4134 8.0152C15.0486 8.42672 14.8472 8.95759 14.8472 9.5075C14.8472 10.0574 15.0486 10.5883 15.4134 10.9998ZM10.3366 6.50041C9.74333 6.50041 9.16339 6.67633 8.67011 7.00593C8.17683 7.33553 7.79236 7.804 7.56533 8.35211C7.3383 8.90021 7.27889 9.50333 7.39463 10.0852C7.51037 10.6671 7.79606 11.2015 8.21556 11.621C8.63506 12.0405 9.16953 12.3262 9.7514 12.442C10.3333 12.5577 10.9364 12.4983 11.4845 12.2713C12.0326 12.0442 12.5011 11.6598 12.8307 11.1665C13.1603 10.6732 13.3362 10.0933 13.3362 9.5C13.3362 8.70446 13.0202 7.9415 12.4576 7.37897C11.8951 6.81644 11.1321 6.50041 10.3366 6.50041ZM10.3366 10.9998C10.04 10.9998 9.74999 10.9118 9.50335 10.747C9.25671 10.5822 9.06448 10.348 8.95096 10.0739C8.83744 9.79989 8.80774 9.49834 8.86561 9.2074C8.92348 8.91647 9.06632 8.64923 9.27607 8.43948C9.48582 8.22973 9.75306 8.08689 10.044 8.02902C10.3349 7.97115 10.6365 8.00085 10.9105 8.11437C11.1846 8.22788 11.4188 8.42012 11.5836 8.66676C11.7484 8.9134 11.8364 9.20337 11.8364 9.5C11.8364 9.89777 11.6784 10.2792 11.3971 10.5605C11.1158 10.8418 10.7344 10.9998 10.3366 10.9998Z"
                      fill="#E5FF00"
                    />
                  </svg>
                </Popover.Trigger>
                <Popover.Content
                  css={{ boxShadow: "0px 4px 15px 0px #E5FF00" }}
                >
                  <Flex
                    direction="column"
                    gap="10px"
                    style={{
                      padding: "10px 20px",
                      boxShadow: "0px 4px 15px 0px #E5FF00",
                    }}
                  >
                    <ButtonIcon
                      minwidth="150px"
                      minheight="fit-content"
                      onClick={handleChangeEmailModalOnClick}
                    >
                      <GeneralText
                        size="clamp(1rem,2vw,1.125rem)"
                        color="#FFFFFF"
                        weight="bold"
                        css={{
                          fontFamily: "var(--fontFamily3)",
                          textTransform: "capitalize",
                        }}
                      >
                        {`${intl.formatMessage({
                          id: "edit-email",
                          defaultMessage: "Edit Email",
                        })}`}
                      </GeneralText>
                    </ButtonIcon>
                  </Flex>
                </Popover.Content>
              </Popover>
            </Flex>
            <BentoGridContainer>
              <BentoGridSelector
                role="button"
                onClick={() => {
                  handleGridSelectorButtonOnClick("magic-avatar");
                }}
                isactivated="true"
                bgdesktopimage="url(/images/dashboard/magic-avatar.png)"
                bgmobileimage="url(/images/dashboard/magic-avatar-mobile.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="magic-avatar"
                      defaultMessage="Magic Avatar"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="your-journey-to-ai-avatars-begins-here"
                      defaultMessage="Your Journey to AI Avatars Begins Here"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
              <BentoGridSelector
                isactivated="false"
                role="button"
                onClick={() => {
                  // handleGridSelectorButtonOnClick("studio");
                }}
                bgdesktopimage="url(/images/dashboard/instant-photo.png)"
                bgmobileimage="url(/images/dashboard/instant-photo-mobile.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="instant-photo"
                      defaultMessage="Instant Photo"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="coming-soon"
                      defaultMessage="Coming soon"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
              <BentoGridSelector
                onClick={() => {
                  handleGridSelectorButtonOnClick("studio");
                }}
                isactivated="true"
                role="button"
                bgdesktopimage="transparent"
                bgmobileimage="transparent"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <BentoGridSelectorVideoBg autoPlay loop muted playsInline>
                  <source
                    src="/images/dashboard/creative-ai-studio-mobile.mp4"
                    type="video/mp4"
                  />
                </BentoGridSelectorVideoBg>
                <Flex
                  direction="column"
                  gap="2px"
                  w={isMobile ? "100%" : "60%"}
                  style={{ zIndex: 1 }}
                >
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="creative-ai-studio"
                      defaultMessage="Creative AI Studio"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="transforming-images-into-capativating-reel-videos"
                      defaultMessage="Transforming Images into Captivating Short Reel Videos"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
                {/* <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="creative-ai-studio"
                      defaultMessage="Creative AI Studio"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="transforming-images-into-short-reel-videos"
                      defaultMessage="Transforming Images into Short Reel Videos"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex> */}
              </BentoGridSelector>
              <BentoGridSelector
                isactivated="false"
                role="button"
                bgdesktopimage="url(/images/dashboard/ai-chat-1.png)"
                bgmobileimage="url(/images/dashboard/ai-chat-mobile-1.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="ai-chat"
                      defaultMessage="AI Chat"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="coming-soon"
                      defaultMessage="Coming soon"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
              <BentoGridSelector
                isactivated="false"
                role="button"
                bgdesktopimage="url(/images/dashboard/train-ur-ai.png)"
                bgmobileimage="url(/images/dashboard/train-ur-ai-mobile.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="train-your-ai"
                      defaultMessage="Train Your AI"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      // id="train-your-ai-to-excel-beyond-limits"
                      // defaultMessage="Train Your AI to Excel Beyond Limits and Earn $JINKO"
                      id="coming-soon"
                      defaultMessage="Coming soon"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
              <BentoGridSelector
                isactivated="false"
                role="button"
                onClick={() => {
                  // handleGridSelectorButtonOnClick("chat")
                }}
                bgdesktopimage="url(/images/dashboard/3d.png)"
                bgmobileimage="url(/images/dashboard/3d.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="3d"
                      defaultMessage="3D"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      // id="bring-your-digital-self-to-live-3d"
                      // defaultMessage="Bring Your Digital Self to Live 3D"
                      id="coming-soon"
                      defaultMessage="Coming soon"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
              <BentoGridSelector
                isactivated="false"
                role="button"
                bgdesktopimage="url(/images/dashboard/marketplace.png)"
                bgmobileimage="url(/images/dashboard/marketplace-mobile.png)"
                align="center"
                style={{ placeContent: "flex-start", padding: "0px 30px" }}
              >
                <Flex direction="column" gap="2px">
                  <GeneralText
                    size="clamp(1.0rem,2vw,2.375rem)"
                    color="white"
                    weight="bold"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1.1rem,2vw,2.375rem)",
                    }}
                  >
                    <FormattedMessage
                      id="marketplace"
                      defaultMessage="Marketplace"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(1rem,2vw,1.125rem)"
                    color="white"
                    weight="normal"
                    css={{
                      fontFamily: "var(--fontFamily3)",
                      textTransform: "",
                      lineHeight: "clamp(1rem,2vw,1.125rem)",
                    }}
                  >
                    <FormattedMessage
                      id="coming-soon"
                      defaultMessage="Coming soon"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                </Flex>
              </BentoGridSelector>
            </BentoGridContainer>
          </Flex>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default Dashboard;
