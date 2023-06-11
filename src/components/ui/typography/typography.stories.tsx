import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography.H1,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography.H1>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
  args: {
    children: 'Card content',
  },
}
