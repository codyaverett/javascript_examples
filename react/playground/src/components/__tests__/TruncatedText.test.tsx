// jest tet 
import React from 'react';
import { test, expect } from '@jest/globals';
import { render } from '@testing-library/react';

import TruncatedText from '../TruncatedText';

test('renders truncated text', () => {
    const { getByText } = render(
        <TruncatedText text="This is a long text" limit={2} />
    );
    expect(getByText('This is...')).toBeTruthy();
    }
);
