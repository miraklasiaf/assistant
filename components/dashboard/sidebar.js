import React from 'react';
import NextLink from 'next/link';
import { useColorModeValue, Button, Flex, IconButton } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

import useColorMode from '@utils/color-mode';

export default function Sidebar() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'rgba(23, 25, 35, 0.8)');
  const Icon = useColorModeValue(
    <MoonIcon size="32px" />,
    <SunIcon size="32px" />
  );

  return (
    <Flex
      pos="absolute"
      as="header"
      direction="column"
      align="center"
      justify="center"
      top={0}
      left={0}
      w={64}
      h="screen"
      borderRightWidth="1px"
      zIndex="docked"
    >
      <Flex d="column" boxSize="full" align="center">
        <Flex w="full" align="center" h={16} p={4}>
          <Flex boxSize="full" align="center">
            Logo
          </Flex>
        </Flex>
        <Flex
          w="full"
          bg="gray.400"
          h="xl"
          align="center"
          justify="center"
          p={4}
        >
          <Flex
            boxSize="full"
            d="column"
            align="center"
            justify="space-between"
          >
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" px={0} fontWeight="bold">
                Dumbbell
              </Button>
            </NextLink>

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
    </Flex>
  );
}
