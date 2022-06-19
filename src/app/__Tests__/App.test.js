import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import '@testing-library/jest-dom';
import App from '../components/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders App to DOM', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app');
  expect(appContainer).toBeInTheDocument();
});