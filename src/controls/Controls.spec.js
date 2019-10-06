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
  const toggleClosed = jest.fn();

  const { getByText, findByText } = render(
  <Controls locked={locked} closed={closed} toggleClosed={toggleClosed} />);

    const closeBtn = getByText(/close gate/i);

    fireEvent.click(closeBtn);

    const openBtn = findByText(/open gate/i);

    expect(openBtn).toBeDefined();
    expect(toggleClosed).toHaveBeenCalled();
});

test("lock button changes to reflext state the door will be in if closed", () => {
  const locked = false; 
  const closed = true;
  const toggleLocked = jest.fn();
  const { getByText, findByText } = render(
    <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} />
  )

  const lockBtn = getByText(/lock gate/i);

  fireEvent.click(lockBtn);

  const unlockBtn = findByText(/unlock gate/i);

  expect(unlockBtn).toBeDefined();
  expect(toggleLocked).toHaveBeenCalled();
})

test("the closed toggle button is disabled if gate is locked", () => {
  const locked = true; 
  const closed = true;
  const toggleClosed = jest.fn();

  const { getByText } = render(
    <Controls locked={locked} closed={closed} toggleClosed={toggleClosed}/>
  );

  const openBtn = getByText(/open gate/i);

  fireEvent.click(openBtn);

  expect(toggleClosed).not.toHaveBeenCalled();
})

test("the locked toggle button is disabled if gate is open", () => {
  const locked = false;
  const closed = false;
  const toggleLocked = jest.fn();
  const { getByText } = render(
    <Controls locked={locked} closed={closed} toggleLocked={toggleLocked} />
  );

  const lockBtn = getByText(/lock gate/i);

  fireEvent.click(lockBtn);

  expect(toggleLocked).not.toHaveBeenCalled();
});