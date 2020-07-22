import React from 'react';
import { Flex } from '@chakra-ui/core';
import { useAuth } from '@lib/auth';

import Header from './header';
import Sidebar from './sidebar';

export default function Dashboard({ children }) {
  const { user } = useAuth();

  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}
