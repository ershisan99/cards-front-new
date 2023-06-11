import { Meta } from '@storybook/react'

import { Checkbox } from './checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export const Uncontrolled = {
  args: {
    label: 'Click here',
    disabled: false,
  },
}
