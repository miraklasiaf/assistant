import React from 'react';
import NextLink from 'next/link';
import { Button, Flex, useColorModeValue } from '@chakra-ui/core';
import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';

export default function Header() {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      left={[0, 0, 64]}
      right={0}
      align="center"
      h={16}
      px={[4, 6, 8]}
      bg={bgColor}
      zIndex="docked"
      borderBottomWidth="1px"
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" align="center" justify="space-between">
          <Flex align="center">
            <NextLink href="/dashboard" passHref>
              <Button as="a" variant="ghost" px={0} fontWeight="bold">
                Dumbbell
              </Button>
            </NextLink>
          </Flex>
          <Flex>
            <ThemeToggle mr={`-${3}`} />
            <MobileNav />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
