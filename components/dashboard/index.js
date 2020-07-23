import React from 'react';
import { Flex } from '@chakra-ui/core';
import { useAuth } from '@lib/auth';

import Header from './header';
import Sidebar from './sidebar';

export default function Dashboard({ children }) {
  const { user } = useAuth();

  return (
    <>
      <Sidebar display={['none', null, 'flex']} w={64} />

      <Flex
        as="main"
        pos="absolute"
        as="main"
        align="center"
        justify="center"
        top={0}
        left={[0, 64]}
        right={0}
      >
        <Flex d="column" boxSize="full" align="center">
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
