import React from 'react';
import { render } from '../test-utils';
import IndexPage from '../../pages';

describe('Index page', () => {
  test('renders index page without crashing', () => {
    render(<IndexPage />);

    expect(screen.getByTestId('theme-toggle')).toBeInTheDocument();
  });
});
