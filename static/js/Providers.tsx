import React, { Component } from "react";
import { createTheme, Input, NextUIProvider } from "@nextui-org/react";
import {
  Accordion,
  ButtonStylesParams,
  keyframes,
  MantineProvider,
  MantineProviderProps,
  MantineTheme,
} from "@mantine/core";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  imTokenWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { NotificationsProvider } from "reapop";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { sepolia } from "@wagmi/core/chains";
import { publicProvider } from "wagmi/providers/public";
import { RefreshContextProvider } from "contexts/RefreshContext";
import { LanguageProvider } from "contexts/I18nContext";
import store from "state";
import { ComponentsContextProvider } from "contexts/ComponentsContext";

const { chains, provider } = configureChains(
  // [mainnet, bsc, goerli],
  [mainnet],
  // [sepolia],
  [publicProvider({ stallTimeout: 3000 })],
  {
    pollingInterval: 6000,
    stallTimeout: 5000,
  }
);

const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      imTokenWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const darkTheme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$yellow200",
      primaryLightHover: "$yellow300",
      primaryLightActive: "$yellow400",
      primaryLightContrast: "$yellow600",
      primary: "#E5FF00",
      primaryBorder: "$yellow500",
      primaryBorderHover: "$yellow600",
      primarySolidHover: "$yellow700",
      primarySolidContrast: "$white",
      primaryShadow: "$yellow500",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",
      // dropdown: '#1E1E1E',
      // you can also create your own color
      myColor: "#ff4ecd",
      background: "var(--whiteColor)",
      height: "100%",
      // ...  more colors
    },
    space: {},
    fonts: {},
  },
});
const GlowingAnimation = keyframes`
0% {
  background-color: #E5FF00;
  box-shadow: 0 0 5px #E5FF00;
}
50% {
  background-color: #E5FF00;
  box-shadow: 0 0 20px #E5FF00;
}
100% {
  background-color: #E5FF00;
  box-shadow: 0 0 5px #E5FF00;
}
`;

const ScrollingTextAnimation = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
`;
const mantineTheme = {
  fontFamily: "var(--fontFamily1)",
  colors: {
    yellow: [
      "#FFFAEB",
      "#FFFCB7",
      "#FFFA70",
      "#FFFA00",
      "#FFFA00",
      "#FFFA00",
      "#FFFA00",
      "#FFFA00",
      "#E5FF00",
      "#E5FF00",
    ],
  },
  defaultRadius: 8,
  fontSizes: {},
  primaryColor: "yellow",
  components: {
    Container: {
      defaultProps: {
        sizes: {
          xs: "100%",
          sm: 650,
          md: 960,
          lg: 1280,
          xl: 1400,
        },
        size: "xl",
        w: "100%",
      },
    },
    Button: {
      defaultProps: {
        fontSize: 16,
      },
      variants: {
        text: (theme) => ({
          root: {
            fontSize: 16,
            backgroundColor: theme.colors.yellow[8],
            color: theme.colors.dark[9],
            borderRadius: theme.defaultRadius,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            boxShadow: "0px 2px 6px 0px #E5FF00",
            ...theme.fn.hover({
              backgroundColor: theme.colors.yellow[8],
            }),
            ":active": {
              boxShadow: "none",
            },
            ":disabled": {
              backgroundColor: theme.colors.yellow[0],
              color: theme.colors.gray[6],
              cursor: "not-allowed",
              pointerEvents: "visible",
              boxShadow: "none",
            },
          },
        }),
        "text-with-glow-anim": (theme) => ({
          root: {
            minHeight: 36,
            fontSize: 16,
            backgroundColor: theme.colors.yellow[8],
            color: theme.colors.dark[9],
            borderRadius: theme.defaultRadius,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            boxShadow: "0px 2px 8px 0px #E5FF00",
            ...theme.fn.hover({
              backgroundColor: theme.colors.yellow[8],
            }),
            animationName: GlowingAnimation,
            animationDuration: "1300ms",
            animationIterationCount: "infinite",
            ":active": {
              boxShadow: "none",
            },
            ":disabled": {
              backgroundColor: theme.colors.yellow[0],
              color: theme.colors.gray[6],
              cursor: "not-allowed",
              pointerEvents: "visible",
              boxShadow: "none",
              animationName: "none",
              ">div>span>svg": {
                fill: theme.colors.gray[6],
              },
            },
          },
          rightIcon: {
            ">svg": {
              color: theme.colors.dark[9],
              fill: theme.colors.dark[9],
            },
          },
        }),
        "text-with-color-border": (theme) => ({
          root: {
            fontSize: 16,
            backgroundColor: "transparent",
            color: theme.colors.yellow[8],
            borderRadius: theme.defaultRadius,
            border: `2px solid ${theme.colors.yellow[8]}`,
            // ...theme.fn.hover({
            //   backgroundColor: theme.colors.yellow[8],
            //   color: theme.colors.dark[9],
            // }),
            ":active": {
              boxShadow: "none",
            },
            ":disabled": {
              backgroundColor: "transparent",
              color: theme.colors.gray[6],
              cursor: "not-allowed",
              pointerEvents: "visible",
              boxShadow: "none",
            },
          },
        }),
        "text-with-color-bg": (theme) => ({
          root: {
            minHeight: 56,
            minWidth: 256,
            maxWidth: 256,
            fontSize: 14,
            fontWeight: "normal",
            background: "linear-gradient(180deg, #01010100 0%, #fff50066 100%)",
            color: theme.colors.yellow[0],
            borderRadius: theme.defaultRadius,
            border: `2px solid ${theme.colors.yellow[8]}`,
            ...theme.fn.hover({
              background:
                "linear-gradient(180deg, #01010100 0%, #fff50066 100%)",
              color: theme.colors.yellow[8],
            }),
            "@media only screen and (min-width: 0px) and (max-width: 991px)": {
              minWidth: "100%",
              maxWidth: "100%",
            },
            ":active": {
              boxShadow: "none",
            },
            ":disabled": {
              // backgroundColor: "transparent",
              color: theme.colors.gray[6],
              cursor: "not-allowed",
              pointerEvents: "visible",
              boxShadow: "none",
            },
          },
          inner: {
            justifyContent: "space-between",
          },
          // label:{
          //   animationName: ScrollingTextAnimation,
          //   animationDuration: "5000ms",
          //   animationIterationCount: "infinite",
          // }
        }),
        iconWithTransparentBg: (theme) => ({
          root: {
            backgroundColor: "transparent",
            color: theme.colors.yellow[0],
            // border: `2px solid transparent`,
            // ...theme.fn.hover({
            //   border: `2px solid ${theme.colors.yellow[8]}`,
            //   borderRadius: 10,
            // }),
            minWidth: "30px",
            width: "fit-content",
            minHeight: "30px",
            margin: 5,
            padding: 0,
            ":disabled": {
              cursor: "not-allowed",
              pointerEvents: "visible",
            },
          },
          inner: {
            position: "relative",
            zIndex: 200,
            ":after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: "0px",
              pointerEvents: "none",
              opacity: 0,
              zIndex: 201,
            },
          },
        }),
        iconWithColorBg: (theme) => ({
          root: {
            backgroundColor: theme.colors.yellow[8],
            color: theme.colors.yellow[0],
            ...theme.fn.hover({ backgroundColor: theme.colors.yellow[8] }),
          },
        }),
        studioPopUp: (theme) => ({
          root: {
            backgroundColor: "transparent",
            color: theme.colors.yellow[0],
            border: `2px solid transparent`,
            ...theme.fn.hover({
              // borderTop: `2px solid ${theme.colors.yellow[8]}`,
              // borderBottom: `2px solid ${theme.colors.yellow[8]}`,
              borderRadius: 0,
            }),
            minWidth: "30px",
            width: "100%",
            minHeight: "30px",
            height: "100%",
            padding: 20,
          },
          inner: {
            justifyContent: "flex-start",
          },
        }),
        studioVideoList: (theme) => ({
          root: {
            ...theme.fn.hover({
              filter: `drop-shadow(${theme.colors.yellow[8]} 0 0 3px)`,
            }),
            display: "flex",
            minHeight: 94,
            minWidth: "100%",
            padding: "12px!important",
            backgroundColor: "rgb(22,24,26)!important",
            backgroundImage:
              "linear-gradient(180deg, #01010100 0%, #fff50066 100%)",
            border: "1.5px solid #E5FF00",
            borderRadius: 10,
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            alignSelf: "flex-end",
            gap: 25,
            width: "100%",
            ":disabled": {
              background: "rgb(22, 24, 26) !important",
              border: "1.5px solid #E5FF00",
              cursor: "not-allowed",
              pointerEvents: "visible",
            },
          },
          inner: {
            width: "100%",
          },
          label: {
            width: "100%",
            gap: 10,
          },
        }),
        "wallet-drawer-credit": (theme) => ({
          root: {
            height: "100%",
            width: "100%",
            minWidth: "100%",
            padding: "12px",
            alignItems: "center",
            border: "1px solid #E6E8EC",
            borderRadius: "5px",
            // backgroundColor: "transparent",
            background: "transparent",
            ":hover": {
              cursor: "pointer",
            },

            "&[data-active]": {
              border: "1px solid #E5FF00",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%)",
            },
          },
          inner: {
            width: "100%",
          },
          label: {
            width: "100%",
          },
        }),
        "nav-bar-wallet": (theme) => ({
          root: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 10,
            border: `2px solid ${theme.colors.yellow[8]}`,
            background: theme.colors.yellow[8],
            height: 60,
            maxWidth: 138,
            minWidth: 125,
            width: "100%",
            padding: 0,
          },
          inner: {
            width: "100%",
          },
          label: {
            width: "100%",
            justifyContent: "center",
          },
        }),
      },
    },
    Accordion: {
      variants: {
        separated: (theme) => ({
          root: {
            backgroundColor: "transparent",
            textAlign: "center",
          },
          item: {
            border: "1px solid #777E90!important",
            "&[data-active]": {
              backgroundColor: "transparent",
            },
            borderColor: "#777E90",
            borderRadius: 8,
            background:
              "linear-gradient(rgba(54, 56, 41, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)",
          },
          label: {
            color: theme.colors.yellow[0],
          },
          chevron: {
            color: theme.colors.yellow[8],
          },
          content: {
            justifyContent: "center",
            display: "flex",
          },
        }),
      },
    },
    Tabs: {
      variants: {
        pills: (theme) => ({
          root: {
            backgroundColor: "transparent",
            // width: "fit-content",
            // maxWidth:"625px",
            width: "100%",
          },
          tab: {
            // width:'100%',
            minWidth: "174px",
            textTransform: "uppercase",
            borderWidth: 2,
            borderStyle: "solid",
            borderColor: theme.colors.yellow[8],
            borderRadius: 8,
            background: "transparent",
            color: theme.colors.yellow[8],
            fontSize: 16,
            "&[data-active]": {
              backgroundColor: theme.colors.yellow[8],
              color: theme.colors.dark[9],
              boxShadow: "0px 2px 8px 0px #E5FF00",
              "&:hover": {
                backgroundColor: theme.colors.yellow[8],
                color: theme.colors.dark[9],
                // boxShadow: "0px 2px 10px 0px #E5FF00",
              },
            },
            "&:hover": {
              backgroundColor: theme.colors.yellow[8],
              color: theme.colors.dark[9],
              // boxShadow: "0px 2px 10px 0px #E5FF00",
            },
          },
          tabsList: {
            justifyContent: "center",
            gap: 15,
          },
          panel:{
            width: "100%",
          }
        }),
      },
    },
    Input: {
      variants: {
        studio: (theme) => ({
          root: {
            width: "100%",
          },
          input: {
            background: "transparent",
            border: "none",
            color: theme.colors.yellow[0],
            borderBottom: `2px solid ${theme.colors.yellow[0]}`,
            "::placeholder": {
              textTransform: "uppercase",
              fontSize: 16,
            },
            ":active": {
              borderBottom: `2px solid ${theme.colors.yellow[8]}`,
            },
            ":focus": {
              borderBottom: `2px solid ${theme.colors.yellow[8]}`,
            },
            ":disabled": {
              backgroundColor: theme.colors.yellow[0],
              color: theme.colors.gray[6],
              cursor: "not-allowed",
              pointerEvents: "visible",
              boxShadow: "none",
            },
          },
          wrapper: {
            width: "100%",
            background: "transparent",
            color: theme.colors.yellow[0],
            ...theme.fn.hover({
              // border: `2px solid ${theme.colors.yellow[8]}`,
            }),
          },
          rightSection: {
            width: "fit-content",
          },
        }),
      },
    },
    InputWrapper: {
      variants: {
        studio: (theme) => ({
          root: {
            width: "100%",
          },
        }),
      },
    },
    Select: {
      defaultProps: {
        variant: "wallet-drawer",
      },
      variants: {
        "wallet-drawer": (theme) => ({
          root: {
            width: "200px",
            fontSize: "1rem",
          },
          item: {
            fontFamily: "var(--fontFamily1)",
            fontSize: "1rem",
            padding: "0.5rem",
            backgroundColor: "#16181A",
            color: "white",
            border: "none",
            borderRadius: 8,
            // applies styles to selected item
            "&[data-selected]": {
              "&": {
                background: "none",
              },
              "&:hover": {
                // background: "#787f85",
                background: "#2b2f31",
              },
            },
            // applies styles to hovered item (with mouse or keyboard)
            "&[data-hovered]": {
              background: "#2b2f31",
            },
          },
          input: {
            padding: "5px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#16181A",
            color: "white",
            // border: "1px solid #777E90",
            borderRadius: "9px",
            border: "none",
            // borderStyle: "solid",
            // borderColor: theme.colors.yellow[0],
            // borderWidth: 1,
            height: "100%",
            "::placeholder": {
              textAlign: "start",
            },
            ":focus": {
              outline: "solid",
              outlineWidth: 1,
              outlineColor: theme.colors.yellow[8],
              // borderStyle: "solid",
              // borderColor: theme.colors.yellow[8],
              // borderWidth: 1,
            },
          },
          dropdown: {
            backgroundColor: "#16181A",
            border: "1px solid transparent!important",
            borderRadius: theme.defaultRadius,
          },
          itemsWrapper: {
            gap: "2px",
          },
        }),
      },
    },
    Checkbox: {
      variants: {
        "wallet-drawer": (theme) => ({
          root: {},
          input: {
            borderRadius: 6,
          },
          icon: {
            color: "black !important",
          },
          label: {
            color: theme.colors.yellow[8],
            fontWeight: "lighter",
            cursor: "pointer",
          },
        }),
      },
    },
    Radio: {
      variants: {
        "wallet-drawer": (theme) => ({
          root: {
            // display: "flex",
            // flexDirection: "row",
            // alignItems: "center",
            // justifyContent: "space-between",
            // borderRadius: 10,
            // border: `2px solid ${theme.colors.yellow[8]}`,
            // background: theme.colors.yellow[8],
            // height: 60,
            // maxWidth: 138,
            // minWidth: 125,
            // width: "100%",
            // padding: 0,
          },
          inner: {
            display: "none",
          },
          label: {
            width: "100%",
            justifyContent: "center",
            padding: 0,
          },
          labelWrapper: {
            width: "100%",
            padding: 0,
          },
        }),
      },
    },
    Table: {
      variants: {
        'unstake': (theme) => ({
          root: {
            wordBreak:"normal",
            
            fontFamily: "var(--fontFamily3)",
            color: theme.colors.yellow[0],
            '>thead>tr>th': {
              color: theme.colors.yellow[9],
            },
          },
     
        }),
      },
    },
  },
} as MantineProviderProps["theme"];

const Providers: React.FC<any> = ({ children }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <Provider store={store}>
        <NotificationsProvider>
          <HelmetProvider>
            <LanguageProvider>
              <NextUIProvider theme={darkTheme}>
                <MantineProvider theme={mantineTheme}>
                  <RainbowKitProvider
                    modalSize="compact"
                    chains={chains}
                    appInfo={{
                      learnMoreUrl: "https://ethereum.org/en/web3/",
                    }}
                  >
                    <RefreshContextProvider>
                      <ComponentsContextProvider>
                        {children}
                      </ComponentsContextProvider>
                    </RefreshContextProvider>
                  </RainbowKitProvider>
                </MantineProvider>
              </NextUIProvider>
            </LanguageProvider>
          </HelmetProvider>
        </NotificationsProvider>
      </Provider>
    </WagmiConfig>
  );
};

export default Providers;
