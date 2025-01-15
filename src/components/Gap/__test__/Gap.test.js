import React from 'react';
import { render } from '@testing-library/react-native';
import Gap from '../Gap';

describe('Gap', () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('should render Gap correctly', () => {
    const { toJSON } = render(<Gap />);
    expect(toJSON()).toMatchSnapshot();
  });
});
