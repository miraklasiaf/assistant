import { Box } from '@chakra-ui/core';

const Hamburger = (props) => (
  <Box
    as="svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    {...props}
  >
    <path d="M4 6h16M4 12h16M4 18h16" />
  </Box>
);

export default Hamburger;
