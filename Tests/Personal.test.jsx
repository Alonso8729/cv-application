import Personal from '../src/components/Personal-Details/Personal'
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

test('renders Personal component', () => {
  const { getByLabelText, getByPlaceholderText } = render(<Personal/>);
  // Simulate user input
  fireEvent.change(getByLabelText(/full name/i), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText(/enter email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(getByPlaceholderText(/enter phone number/i), { target: { value: '123-456-7890' } });
  fireEvent.change(getByPlaceholderText(/enter city, country/i), { target: { value: 'New York, USA' } });

  // Assert that the inputs have the correct values
  expect(getByLabelText(/full name/i).value).toBe('John Doe');
  expect(getByPlaceholderText(/enter email/i).value).toBe('john@example.com');
  expect(getByPlaceholderText(/enter phone number/i).value).toBe('123-456-7890');
  expect(getByPlaceholderText(/enter city, country/i).value).toBe('New York, USA');
});