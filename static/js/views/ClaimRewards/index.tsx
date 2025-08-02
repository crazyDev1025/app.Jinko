import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import { Container, Flex } from "@mantine/core";
import { Button, Grid, Card } from "@nextui-org/react";
import { useNotifications } from "reapop";
import { useSignMessage } from "wagmi";
import { useRequest } from "ahooks";

import PageLoader from "components/Loader/PageLoaderStudio";
import { ComponentsContext } from "contexts/ComponentsContext";
import { useTranslation } from "contexts/I18nContext";
import { GeneralText } from "components/GlobalStyle";
import { useTokenAuth } from "hooks/useTokenAuth";
import useMiddlewareTranslation from "../../hooks/useMiddlewareTranslation";
import { useClaimNft, useGetListOfNfts } from "./hooks/useClaimRewards";

const ContainerWrapper = styled.div`
  background-image: url(/images/background-ellipse.png);
  background-position-x: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
  display: flex;
  height: 100%;
  overflow-y: auto;
`;

const ButtonText = styled(Button)<{ bg?: string; borderradius?: string }>`
  border-radius: ${({ borderradius }) => borderradius};
  background-image: ${({ bg }) => bg}!important;
  // padding:3px 8px!important;
  margin: 0px 0px 10px 0px !important;
  min-width: 110px;
  color: black;
  box-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.5);
  :hover {
    cursor: pointer;
  }
  :disabled {
    background-image: linear-gradient(
      180deg,
      #9596b2 0%,
      #bcc6ce 54.69%,
      #cbdbdd 100%
    ) !important;
    color: grey;
    box-shadow: none;
  }
`;

const TitleWrapper = styled(Flex)`
  width: 100%;
  gap: 20px;
  align-items: start;
  @media only screen and (min-width: 0px) and (max-width: 991px) {
    place-content: start;
    text-align: left;
  }
  @media only screen and (min-width: 992px) {
    place-content: space-between;
    text-align: center;
  }
`;

const ButtonIcon = styled(Button)<{
  minwidth?: string;
  minHeight?: string;
  padding?: string;
}>`
  min-width: ${({ minwidth }) => minwidth};
  min-height: ${({ minHeight }) => minHeight};
  max-width: ${({ minwidth }) => minwidth};
  // min-width:fit-content;
  padding: ${({ padding }) => padding || ""};
  background: transparent;
  // border: none;
  margin: 0px;
  align-items: center;
  height: auto;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: var(--nextui-space-5);
  position: relative;
  :hover {
    cursor: pointer;
  }
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0px;
    pointer-events: none;
    opacity: ${({ disabled }) => (disabled ? "1" : "0")};
    z-index: 201;
  }
`;
const NftsListWrapper = styled(Flex)`
  display: grid;
  grid-gap: 10px;
  grid-auto-rows: 300px;
  padding: 5px 10px;
  // grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  overflow-y: scroll;
  // padding:10px 10px 0px 0px;
  justify-items: center;
  align-items: center;
  width: 100%;
  // height:100%;
`;

const NftWrapper = styled(Flex)`
  border-radius: 8px;
  border: 2px solid #777e90;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(54, 56, 41, 0.5) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;
type loadingType = {
  isLoading: boolean;
  title: {
    id: string;
    defaultMessage: string;
  };
};
type nftType = {
  nft_id: string;
  nft_contract: string;
  is_claimed: boolean;
  nft_data?: {
    token_address?: string;
    token_id?: string;
    owner_of?: string;
    block_number?: string;
    block_number_minted?: string;
    token_hash?: string;
    amount?: string;
    possible_spam?: boolean;
    contract_type?: string;
    name?: string;
    symbol?: string;
    token_uri?: string;
    metadata?: string;
    last_token_uri_sync?: string;
    last_metadata_sync?: string;
    minter_address?: string;
    verified_collection?: boolean;
  };
};

const ClaimRewards: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const { content } = useTokenAuth();
  const { notify } = useNotifications();
  const {
    currentLanguage: { locale: currLang },
  } = useTranslation();
  const { onGetTranslation } = useMiddlewareTranslation();
  const {
    signMessageAsync,
    data,
    error: signError,
    isLoading: isSignLoading,
  } = useSignMessage();
  const { onGetListOfNfts: handleGetListOfNfts } = useGetListOfNfts();

  const [isOverlapLoading, setIsOverlapLoading] = useState<loadingType>({
    isLoading: false,
    title: { id: "", defaultMessage: "" },
  });
  const [nftsList, setNftsList] = useState<nftType[]>([]);
  const { onClaimNft: handleClaimNft } = useClaimNft();
  const { getCredit } = useContext(ComponentsContext);

  const getListOfNfts = useRequest(
    () => handleGetListOfNfts(content.token, content.walletAddress),
    {
      onBefore: () => {
        setIsOverlapLoading({
          isLoading: true,
          title: { id: "loading", defaultMessage: "Loading..." },
        });
      },
      onFinally: () => {
        setIsOverlapLoading({
          isLoading: false,
          title: { id: "", defaultMessage: "" },
        });
      },
      onSuccess: (result) => {
        try {
          if (result.error || result.data.error)
            throw new Error(result.message);
          setNftsList(result.data.data.nfts);
        } catch (e) {
          console.error(e);
        }
      },
      onError: (error) => {
        setNftsList([]);
      },
    }
  );

  const submitClaimRequest = useRequest(
    async (_nftId, _nftContract, _userUuid) => {
      const message = {
        nft_id: _nftId,
        _nft_contract: _nftContract,
        uuid: _userUuid,
      };
      let signature = "";
      await signMessageAsync({ message: JSON.stringify(message) })
        .then((result) => {
          signature = result;
        })
        .catch((e) => {
          throw new Error(e);
        });
      const response = await handleClaimNft(
        content.token,
        _nftId,
        _nftContract,
        content.walletAddress,
        signature
      );
      if (response.error || response.data.error)
        throw new Error(response.message);
    },
    {
      manual: true,
      onBefore: () => {
        setIsOverlapLoading({
          isLoading: true,
          title: { id: "processing", defaultMessage: "Processing..." },
        });
      },
      onFinally: () => {
        setIsOverlapLoading({
          isLoading: false,
          title: { id: "", defaultMessage: "" },
        });
      },
      onSuccess: (result) => {
        getListOfNfts.run();
        getCredit.run();
        notify(
          `${intl.formatMessage({
            id: "claim-nft-successfully",
            defaultMessage: "Claimed NFT successfully",
          })}`,
          "success"
        );
      },
      onError: (error) => {
        notify(`${onGetTranslation(error.message)}`, "error");
      },
    }
  );

  const handleClaimNftButtonOnClick = async (_nftId, _nftContract) => {
    submitClaimRequest.run(_nftId, _nftContract.toLowerCase(), content.uuid);
  };

  const handleBackToDashboardOnClick = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <ContainerWrapper>
        <Container h="100%" px="lg" style={{ overflowY: "auto" }}>
          <Flex
            direction="column"
            gap="35px"
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              overflow: "auto",
            }}
          >
            <Flex justify="space-between" style={{ width: "100%" }}>
              <TitleWrapper>
                <ButtonIcon
                  onClick={handleBackToDashboardOnClick}
                  minHeight="fit-content"
                  minwidth="fit-content"
                  padding="0px"
                  style={{ order: 1 }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z"
                      fill="url(#paint0_linear_4322_13710)"
                    />
                    <path
                      d="M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <path
                      d="M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4322_13710"
                        x1="17"
                        y1="0"
                        x2="17"
                        y2="34"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E5FF00" />
                        <stop offset="0.546875" stopColor="#E5FF00" />
                        <stop offset="1" stopColor="#E5FF00" />
                        <stop offset="1" stopColor="#E5FF00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </ButtonIcon>
                <Flex direction="column" gap="10px" style={{ order: 2 }}>
                  <GeneralText
                    size="clamp(1.7rem,2vw,1.8rem)"
                    color="#E5FF00"
                    weight="extrabold"
                    css={{
                      fontFamily: "var(--fontFamily1)",
                      textTransform: "uppercase",
                      lineHeight: "1",
                    }}
                  >
                    <FormattedMessage
                      id="claim-rewards"
                      defaultMessage="Claim Rewards"
                      values={{ br: <br /> }}
                    />
                  </GeneralText>
                  <GeneralText
                    size="clamp(0.8rem,2vw,1rem)"
                    color="#FFFFFF"
                    weight="normal"
                    css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1" }}
                  >
                    {`${intl.formatMessage({
                      id: "claim-and-enjoy-free-credits",
                      defaultMessage:
                        "Claim and enjoy 5000 free credits with your INFT Mint Pass holdings.",
                    })}`}
                  </GeneralText>
                </Flex>
                <div style={{ order: 3 }} />
              </TitleWrapper>
            </Flex>
            {nftsList.length <= 0 ? (
              <>
                <Flex
                  direction="column"
                  gap="10px"
                  style={{
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/images/magic-avatar/empty-art-gallery.png"
                    alt="empty-nft"
                    style={{
                      width: "100%",
                      height: "100%",
                      maxHeight: "400px",
                      maxWidth: "400px",
                    }}
                  />
                </Flex>
              </>
            ) : (
              <NftsListWrapper>
                {nftsList.map((item, index) => {
                  return (
                    <>
                      {item.nft_data?.metadata &&
                        JSON.parse(item.nft_data.metadata).name && (
                          <Grid
                            key={`${item.nft_contract} - ${item.nft_id}`}
                            className="wrapper-card"
                          >
                            <Card
                              variant="flat"
                              css={{ w: "100%", h: "100%" }}
                              className="cs-card"
                              style={{
                                minHeight: "60px",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "10px",
                              }}
                            >
                              <img
                                src={`/images/nfts/${item.nft_contract}.png`}
                                alt="nft"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  maxHeight: "150px",
                                  maxWidth: "150px",
                                }}
                              />
                              <GeneralText
                                size="clamp(0.985rem,2vw,1rem)"
                                color=""
                                weight="extrabold"
                                css={{
                                  fontFamily: "var(--fontFamily3)",
                                  textTransform: "capitalize",
                                  lineHeight: "1",
                                  textAlignLast: "center",
                                  textAlign: "center",
                                }}
                              >
                                {`${
                                  item.nft_data?.metadata &&
                                  JSON.parse(item.nft_data.metadata).name
                                }`}
                              </GeneralText>

                              {item.is_claimed ? (
                                <ButtonText
                                  disabled
                                  bg="#E5FF00"
                                  borderradius="8px"
                                  style={{ width: "fit-content" }}
                                >
                                  <GeneralText
                                    size="clamp(0.985rem,2vw,1rem)"
                                    color=""
                                    weight="extrabold"
                                    css={{
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "capitalize",
                                      lineHeight: "1",
                                    }}
                                  >
                                    {`${intl.formatMessage({
                                      id: "claimed",
                                      defaultMessage: "Claimed",
                                    })}`}
                                  </GeneralText>
                                </ButtonText>
                              ) : (
                                <ButtonText
                                  onPress={() =>
                                    handleClaimNftButtonOnClick(
                                      item.nft_id,
                                      item.nft_contract
                                    )
                                  }
                                  bg="#E5FF00"
                                  borderradius="8px"
                                  style={{ width: "fit-content" }}
                                >
                                  <GeneralText
                                    size="clamp(0.985rem,2vw,1rem)"
                                    color=""
                                    weight="extrabold"
                                    css={{
                                      fontFamily: "var(--fontFamily1)",
                                      textTransform: "capitalize",
                                      lineHeight: "1",
                                    }}
                                  >
                                    {`${intl.formatMessage({
                                      id: "claim",
                                      defaultMessage: "Claim",
                                    })}`}
                                  </GeneralText>
                                </ButtonText>
                              )}
                            </Card>
                          </Grid>
                        )}
                    </>
                  );
                })}
              </NftsListWrapper>
            )}
          </Flex>
        </Container>
      </ContainerWrapper>
      {isOverlapLoading.isLoading && (
        <PageLoader>
          <GeneralText
            size="clamp(1.3rem,2vw,1.8rem)"
            color="#FFFFFF"
            weight="bold"
            css={{ fontFamily: "var(--fontFamily1)", textTransform: "" }}
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
        </PageLoader>
      )}
    </>
  );
};

export default ClaimRewards;
