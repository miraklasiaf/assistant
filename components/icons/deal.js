import { useColorModeValue, Box } from '@chakra-ui/core';

const Deal = (props) => {
  const color = useColorModeValue('#2D3748', '#fff');

  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={color}
      strokeLinecap="square"
      fill="none"
      color={color}
      {...props}
    >
      <circle cx="10" cy="12" r="1" />
      <path d="M8 18l-6-6 6-6h12a2 2 0 012 2v8a2 2 0 01-2 2H8z" />
    </Box>
  );
};

export default Deal;
