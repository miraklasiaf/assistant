import React from 'react';
import NextLink from 'next/link';
import { Button, Flex } from '@chakra-ui/core';
import ThemeToggle from '../theme-toggle';
import MobileNav from './mobile-nav';

export default function Header() {
  return (
    <Flex as="header" align="center" h={16} px={[4, 6, 8]}>
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
            <ThemeToggle />
            <MobileNav />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
