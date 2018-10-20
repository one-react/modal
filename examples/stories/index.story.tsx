import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Modal from 'or-modal'
import { Example } from './example'
import { previewCode } from './util'

import './styles.scss'

storiesOf('or-modal', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Modal],
      propTablesExclude: [Example],
      styles: {
        jsxInfoContent: {
          borderTop: 'none',
          margin: 0
        }
      }
    })
  )
  .add('modal', () => <Example />, {
    info: {
      source: false,
      text: previewCode(require('!!raw-loader!./example.tsx'))
    }
  })
