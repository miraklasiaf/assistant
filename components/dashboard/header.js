import React from 'react';
import NextLink from 'next/link';
import { useColorModeValue, Button, Flex, IconButton } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import useColorMode from '@utils/color-mode';

export default () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'rgba(23, 25, 35, 0.8)');
  const Icon = useColorModeValue(
    <MoonIcon size="32px" />,
    <SunIcon size="32px" />
  );

  return (
    <Flex
      as="header"
      align="center"
      h={16}
      px={[4, 6, 8]}
      borderBottomWidth="1px"
      boxShadow="sm"
    >
      <Flex w="full" align="center" justify="center">
        <Flex w="full" align="center" justify="space-between">
          <Flex align="center">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" px={0} fontWeight="bold">
                Dumbbell
              </Button>
            </NextLink>
          </Flex>
          <Flex>
            <IconButton
              variant="ghost"
              aria-label="Toggle dark mode"
              icon={Icon}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
