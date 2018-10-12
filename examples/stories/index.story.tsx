import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { CustomerModal } from './customer-modal.story'
import { Example } from './example.story'
import './styles.scss'

storiesOf('or-modal', module)
  .add(
    'modal #center',
    withInfo({ inline: true })(() => (
      <div>
        <Example />
      </div>
    ))
  )

  .add(
    'modal #right side',
    withInfo({ inline: true })(() => (
      <div>
        <CustomerModal />
      </div>
    ))
  )
