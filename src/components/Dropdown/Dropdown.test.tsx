import * as React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { Dropdown } from './Dropdown';

describe('<Dropdown>', () => {
  it('renders learn react link', () => {
    const { getByText } = render(<Dropdown title="Dropdown Title" />);
    const linkElement = getByText(/learn react/i);
    expect(document.body.contains(linkElement));
  });
});
