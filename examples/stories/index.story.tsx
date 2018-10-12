import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Example } from './example.story'
import './styles.scss'

storiesOf('or-modal', module).add(
  'modal',
  withInfo({ inline: true })(() => (
    <div>
      <Example />
    </div>
  ))
)
