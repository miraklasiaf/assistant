import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import theme from '../components/design-system';
import { ChakraProvider } from '@chakra-ui/core';

const AllProviders = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

const customRender = (ui, options) => {
  render(ui, {
    wrapper: AllProviders,
    ...options
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, userEvent };
