import { useColorModeValue, Box } from '@chakra-ui/core';

const Map = (props) => {
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
      <path d="M9 19l-6 2V5l6-2 6 2 6-2v15.5L15 21z" />
      <path strokeLinecap="round" d="M15 5v16M9 3v16" />
    </Box>
  );
};

export default Map;
