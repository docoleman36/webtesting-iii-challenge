import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';

test('Dashboard renders without crashing', () => {
  render(<Dashboard />);
})

test('contains display', () => {
  render(<Display />)
})

test('contains controls', () => {
  render(<Controls />)
})