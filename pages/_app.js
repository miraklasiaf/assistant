import React from 'react';
import { DefaultSeo } from 'next-seo';
import theme from '@components/design-system';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import Nprogress from '@components/nprogress';
import DefaultLayout from '@components/layout/default';
import SEO from '../next-seo.config';

import { AuthProvider } from '@context/auth';

const App = ({ Component, pageProps }) => {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout children={page} />);

  return (
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Nprogress />
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </AuthProvider>
  );
};

export default App;
