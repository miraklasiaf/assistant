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

export default function Sidebar(props) {
  return (
    <Flex
      pos="absolute"
      as="aside"
      align="center"
      justify="center"
      top={0}
      left={0}
      h="screen"
      bg="gray.900"
      {...props}
    >
      <Flex direction="column" boxSize="full" align="center">
        <Flex w="full" align="center" h={16} p={4}>
          <LogoSection />
        </Flex>
        <Flex
          w="full"
          h="calc(100vh - 4rem)"
          align="center"
          justify="center"
          p={4}
        >
          <Flex boxSize="full" direction="column" align="center" pr={3} py={3}>
            <Stack direction="column" w="full" spacing={0}>
              <NextLink href="/dashboard" passHref>
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
