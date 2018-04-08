import React from 'react'
import { storiesOf } from '@storybook/react'

import Example from './example'

storiesOf('Modal', module)
  .add('example', () => (
    <Example />
  ))
