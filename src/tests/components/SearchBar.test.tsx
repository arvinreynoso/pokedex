import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SearchBar from '../../components/SearchBar';

const setup = () => {
  const utils = render(<SearchBar />);
  const input = utils.getByPlaceholderText('Name') as HTMLInputElement;
  return { input, ...utils };
};

test('change search bar value', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'bulbasaur' }});
  expect(input.value).toBe('bulbasaur');
});