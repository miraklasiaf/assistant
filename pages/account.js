import { useState } from 'react';
import { Box, Button } from '@chakra-ui/core';

import { useAuth } from '@lib/auth';

import Dashboard from '@components/dashboard';

const Account = () => {
  const { user, signout } = useAuth();

  return (
    <Dashboard>
      <Box>
        <Button
          bg="gray.900"
          color="white"
          fontWeight="medium"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          Upgrade to Starter
        </Button>
        <Button
          bg="gray.900"
          color="white"
          fontWeight="medium"
          ml={4}
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Billing Portal
        </Button>
        <Button ml={4} onClick={() => signout()}>
          Log Out
        </Button>
      </Box>
    </Dashboard>
  );
};

export default Account;
