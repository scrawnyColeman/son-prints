import { ChakraProvider } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Global
        styles={css`
          body {
            background-color: var(--chakra-colors-whiteAlpha-600) !important;
            padding: 1rem;
          }
        `}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
