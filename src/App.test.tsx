import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app header', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app-header');
  expect(linkElement).toBeInTheDocument();
});
