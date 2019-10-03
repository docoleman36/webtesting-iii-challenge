import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

test('Display renders without crashing', () => {
  render(<Display />);
})
