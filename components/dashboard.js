import React from 'react';
import NextLink from 'next/link';
import { Box, Button, Flex, Link, Avatar, Icon } from '@chakra-ui/core';

import { useAuth } from '@lib/auth';
import Logo from '@components/icons/logo';

const Dashboard = ({ children }) => {
  const { user } = useAuth();

  return (
    <Box bg="gray.100" h="screen">
      <Flex bg="white" mb={16} w="full">
        <Flex
          align="center"
          justify="space-between"
          w="full"
          h={16}
          p={4}
          maxW="7xl"
          mt={0}
          mr="auto"
          px={8}
        >
          <Flex align="center">
            <NextLink href="/" passHref>
              <Link>
                <Box as={Logo} />
              </Link>
            </NextLink>
            <NextLink href="/dashboard" passHref>
              <Link mr={4}>Sites</Link>
            </NextLink>
            <NextLink href="/feedback" passHref>
              <Link>Feedback</Link>
            </NextLink>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user && (
              <NextLink href="/account" passHref>
                <Button as="a" variant="ghost" mr={2}>
                  Account
                </Button>
              </NextLink>
            )}
            <Avatar size="sm" src={user?.photoUrl} />
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
        {children}
      </Flex>
    </Box>
  );
};

export default Dashboard;
