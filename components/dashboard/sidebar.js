import React from 'react';
import NextLink from 'next/link';
import { Stack, Flex, Image, Link as A } from '@chakra-ui/core';

function LogoSection() {
  return (
    <Flex boxSize="full" align="center">
      <Image
        src="static/logos/workflow-mark-on-dark.svg"
        alt="Logo mark"
        h={8}
        w="auto"
        display={{ base: 'block', lg: 'none' }}
      />
      <Image
        src="static/logos/workflow-logo-on-dark.svg"
        alt="Logo dark"
        h={8}
        w="auto"
        display={{ base: 'none', lg: 'block' }}
      />
    </Flex>
  );
}

export default function Sidebar() {
  return (
    <Flex
      pos="absolute"
      as="aside"
      d="column"
      align="center"
      justify="center"
      top={0}
      left={0}
      w={64}
      h="screen"
    >
      <Flex direction="column" boxSize="full" align="center" bg="gray.900">
        <Flex w="full" align="center" h={16} p={4}>
          <LogoSection />
        </Flex>
        <Flex
          w="full"
          h={['full', 'calc(100vh - 4rem)']}
          align="center"
          justify="center"
          p={4}
        >
          <Flex boxSize="full" d="column" align="center" px={3}>
            <Stack direction="column" spacing={0}>
              <NextLink href="/" passHref>
                <A
                  p={1}
                  color="gray.300"
                  fontSize="sm"
                  fontWeight="medium"
                  borderRadius="md"
                >
                  <Flex>Home</Flex>
                </A>
              </NextLink>
              <NextLink href="/" passHref>
                <A
                  p={1}
                  color="gray.300"
                  fontSize="sm"
                  fontWeight="medium"
                  borderRadius="md"
                >
                  <Flex>Dumbbell</Flex>
                </A>
              </NextLink>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
