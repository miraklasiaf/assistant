import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import Nprogress from '@components/nprogress';
import SEO from '../next-seo.config';
import theme from '@components/design-system';

import { AuthProvider } from '@context/auth';

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Nprogress />
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
