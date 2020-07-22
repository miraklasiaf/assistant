import React from 'react';
import { useColorModeValue, Flex } from '@chakra-ui/core';

import Header from './header';
import Footer from './footer';

const Container = ({ children }) => {
  const bgColor = useColorModeValue('white', 'rgba(23, 25, 35, 0.8)');
  const primarytextColor = useColorModeValue('black', 'white');

  return (
    <>
      <Header />

      <Flex
        as="main"
        w="full"
        justify="center"
        align="center"
        direction="column"
        bg={bgColor}
        color={primarytextColor}
        px={[4, 6, null, 8]}
        mt={16}
      >
        <Flex w="full" align="center" justify="center" pt={[8, 10, null, 12]}>
          <Flex
            w="full"
            d="column"
            maxW="5xl"
            align="center"
            justify="flex-start"
          >
            {children}
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Container;
