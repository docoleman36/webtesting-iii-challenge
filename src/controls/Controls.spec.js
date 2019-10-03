import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Controls renders without crashing', () => {
  render(<Controls />);
})

test('contains buttons', () => {
  const { getByText } = render(<Controls />);
  const closeGate = getByText(/close gate/i);
  const lockGate = getByText(/lock gate/i);

  expect(closeGate).toBeTruthy()
  expect(lockGate).toBeTruthy()
})

test('on click changes button text', () => {
  const locked = false;
  const closed = false;
  const toggleClose = jest.fn();

  const { getByText } = render(<Controls locked={locked} closed={closed} toggleClosed={toggleClose} />);

})