import type { Meta, StoryObj } from '@storybook/react'

import { Header } from './'

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authorized: Story = {
  args: {
    isAuth: true,
    userInfo: {
      name: 'John Doe',
      avatar: 'https://picsum.photos/200',
      email: 'example@gmail.com',
    },
  },
}

export const NotAuthorized: Story = {
  args: {
    isAuth: false,
  },
}
