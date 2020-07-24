import React from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  useColorModeValue
} from '@chakra-ui/core';
import { NavLink } from './nav-link';
import {
  Home,
  UserGroup,
  Folder,
  Calendar,
  Inbox,
  ChartSquareBar,
  LogoMark,
  LogoOnDark
} from '../icons';

const SidebarLink = ({ href, children, icon }) => (
  <NavLink href={href}>
    <Flex align="center">
      <Box as={icon} mr={3} w={6} />
      <Text fontSize="sm" fontWeight="medium">
        {children}
      </Text>
    </Flex>
  </NavLink>
);

function PageLinks() {
  return (
    <VStack w="full" spacing={1}>
      <SidebarLink href="/dashboard" icon={Home}>
        Dashboard
      </SidebarLink>
      <SidebarLink href="/dashboard/team" icon={UserGroup}>
        Team
      </SidebarLink>
      <SidebarLink href="/dashboard/projects" icon={Folder}>
        Projects
      </SidebarLink>
      <SidebarLink href="/dashboard/calendar" icon={Calendar}>
        Calendar
      </SidebarLink>
      <SidebarLink href="/dashboard/documents" icon={Inbox}>
        Documents
      </SidebarLink>
      <SidebarLink href="/dashboard/reports" icon={ChartSquareBar}>
        Reports
      </SidebarLink>
    </VStack>
  );
}

export default function Sidebar(props) {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Flex
      pos="absolute"
      as="aside"
      align="center"
      justify="center"
      top={0}
      left={0}
      h="screen"
      bg={bgColor}
      {...props}
    >
      <Flex direction="column" boxSize="full" align="center">
        <Flex w="full" align="center" h={16} p={3}>
          <Flex boxSize="full" align="center" px={3}>
            <Flex boxSize="full" align="center">
              <Box
                as={LogoMark}
                h={8}
                w="auto"
                display={{ base: 'block', lg: 'none' }}
              />

              <Box
                as={LogoOnDark}
                h={8}
                w="auto"
                display={{ base: 'none', lg: 'block' }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w="full"
          h="calc(100vh - 4rem)"
          align="center"
          justify="center"
          p={3}
        >
          <Flex boxSize="full" direction="column" align="center">
            <PageLinks />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
