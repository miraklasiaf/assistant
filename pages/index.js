import { Flex, Heading, Text, Button, Stack } from '@chakra-ui/core';
import { useAuth } from '@context/auth';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { getLayout } from '@components/layout/default';
import { MY_APP } from '@utils/constants';

const Index = () => {
  const auth = useAuth();

  return (
    <Flex direction="column" justify="center" align="center">
      <Heading
        as="h1"
        mb={2}
        size="2xl"
        fontStyle="italic"
        fontWeight="extrabold"
      >
        {MY_APP}
      </Heading>

      <Text maxW="xl">Your personal assistant</Text>

      {auth.user ? (
        <Button
          as="a"
          href="/dashboard"
          backgroundColor="gray.900"
          color="white"
          fontWeight="medium"
          mt={4}
          maxW="200px"
          _hover={{ bg: 'gray.700' }}
          _active={{
            bg: 'gray.800',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Stack
          direction={['column', 'row']}
          w="full"
          maxW="xl"
          align="center"
          justify="flex-start"
          mt={8}
        >
          <Button
            onClick={(e) => auth.signinWithGitHub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            leftIcon={<FaGithub />}
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with GitHub
          </Button>
          <Button
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            leftIcon={<FaGoogle />}
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

Index.getLayout = getLayout;

export default Index;
