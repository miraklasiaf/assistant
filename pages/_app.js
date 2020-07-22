import React from 'react';
import { DefaultSeo } from 'next-seo';
import { Global, css } from '@emotion/core';

import { ChakraProvider, CSSReset, useColorModeValue } from '@chakra-ui/core';

import Nprogress from '@components/nprogress';
import SEO from '../next-seo.config';
import theme from '@components/design-system';

import { AuthProvider } from '@lib/auth';

const GlobalStyle = ({ children }) => {
  const bg = useColorModeValue('gray.50', '#171923');

  return (
    <>
      <Global
        styles={css`
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            position: relative;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 1408px;
            max-width: 1408px;
            min-height: 100vh;
            background: ${bg};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <GlobalStyle>
          <CSSReset />
          <Nprogress />
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
