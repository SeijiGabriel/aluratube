import React from "react";
import { ThemeProvider } from "styled-components";
import { CSSReset } from "../components/CSSReset";
import ColorModeProvider, { ColorModeContext } from "../components/Menu/componentes/ColorMode";


const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222",
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF",
    }
};

// ThemeProvider --> prover o tema para a app toda
// ColorModeProvider --> Prover o state de ligth ou dark mode para todos

function ProviderWrapper(props) {
    return (
        <ColorModeProvider initialMode={"dark"}>
            {props.children}
        </ColorModeProvider>
    )
}
// Todas as páginas passarão por essa função
function MyApp({ Component, pageProps }) {
    const contexto = React.useContext(ColorModeContext);
    // console.log(contexto.mode);

    return (
            <ThemeProvider theme={theme[contexto.mode]}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
    )
  }

  export default function _App(props) {
    return (
        <ProviderWrapper>
            <MyApp {...props} />
        </ProviderWrapper>
    )
  }


  