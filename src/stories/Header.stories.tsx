import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import type { Story, Meta } from '@storybook/react/types-6-0';

import { Header, HeaderProps } from '../components/Header/Header';

const user = {
  name: 'bob',
  profilePicture:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

export default {
  title: 'Example/Header',
  component: Header,
  argTypes: {
    user: { control: 'object' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  user: null,
};
