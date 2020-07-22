import { useColorModeValue, Box } from '@chakra-ui/core';

const Home = (props) => {
  const color = useColorModeValue('#2D3748', '#fff');

  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      color={color}
      stroke={color}
      strokeLinecap="square"
      fill="none"
      {...props}
    >
      <path d="M3 10.182V22h18V10.182L12 2z" />
      <path d="M9 14h6v8H9z" />
    </Box>
  );
};

export default Home;
