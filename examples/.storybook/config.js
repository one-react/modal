import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

function loadStories() {
  require('../stories')
  // You can require as many stories as you need.
}

setOptions({
  name: 'One React',
  url: '#'
})

configure(loadStories, module)
