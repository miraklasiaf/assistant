import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/core';
import { useAuth } from '@lib/auth';

import Header from './header';
import Sidebar from './sidebar';

export default function Dashboard({ children }) {
  const { user } = useAuth();
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <>
      <Sidebar display={['none', null, 'flex']} w={64} />

      <Flex
        as="main"
        pos="absolute"
        align="center"
        top={0}
        left={[0, 0, 64]}
        right={0}
        bg={bgColor}
      >
        <Flex direction="column" w="full">
          <Header />
          <Flex as="section" px={[4, 6, 8]} py={4} h="calc(100vh - 4rem)">
            <Flex
              w="full"
              borderWidth="4px"
              borderStyle="dashed"
              borderRadius="lg"
            >
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
