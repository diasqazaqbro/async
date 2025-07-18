import type { AppProps } from "next/app";
import "@app/styles/fonts.css";
import { ThemeProvider } from "styled-components";
import { theme } from "@app/styles/themes";
import { GlobalStyle } from "@app/styles/global";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme.default}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);

