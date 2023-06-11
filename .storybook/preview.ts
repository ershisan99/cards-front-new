import type { Preview } from '@storybook/react'
import '@fontsource-variable/montserrat'
import '../src/styles/index.scss'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview
