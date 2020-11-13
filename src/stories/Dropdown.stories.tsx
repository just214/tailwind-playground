import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Dropdown, DropdownProps } from '../components/Dropdown/Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
  argTypes: {
    title: { control: 'text' },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Select an option',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
