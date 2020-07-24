import { Sun, Moon } from './icons';
import useColorMode from '@utils/color-mode';
import { Box, Flex, useColorModeValue } from '@chakra-ui/core';

export default function ColorSwitcher() {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.200', 'indigo.600');
  const Icon = useColorModeValue(
    <Sun h={3} color="gray.400" />,
    <Moon h={3} color="gray.400" />
  );

  return (
    <Box
      as="span"
      onClick={toggleColorMode}
      bg={bgColor}
      pos="relative"
      display="inline-flex"
      h={6}
      w={12}
      borderWidth="2px"
      borderRadius="full"
      borderColor="transparent"
    >
      <Box
        as="span"
        position="relative"
        display="inline-block"
        boxSize={5}
        borderRadius="full"
        bg="white"
        boxShadow="lg"
        aria-hidden="true"
      >
        <Flex
          as="span"
          position="absolute"
          inset={0}
          boxSize="full"
          align="center"
          justify="center"
        >
          {Icon}
        </Flex>
      </Box>
    </Box>
  );
}
