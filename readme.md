# One React Component: modal

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/modal.svg)](https://travis-ci.org/one-react/modal)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/modal.svg)](https://circleci.com/gh/one-react/modal)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/modal.svg)](https://codecov.io/gh/one-react/modal) 
[![Version](https://img.shields.io/npm/v/or-modal.svg)](https://www.npmjs.com/package/or-modal)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/modal.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-modal

// with yarn
yarn add or-modal
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import Button from 'or-button'
import React from 'react'

import { SvgClose } from 'or-icons'
import Modal from 'or-modal'

export class Example extends React.Component {
  state = {
    isOpenCenter: false
  }

  render() {
    return (
      <div>
        <div className="example-wrapper">
          <Button type="primary" onClick={this.handelOpen('isOpenCenter')}>
            Open default Center
          </Button>
          <Modal
            className="modal-center"
            isOpen={this.state.isOpenCenter}
            onClose={this.handleClose('isOpenCenter')}
          >
            <div>
              <div className="right-side">
                <div
                  className="close-icon"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  <SvgClose
                    className="or-modal-close-icon"
                    fill="#333"
                    size="30"
                  />
                </div>
                <div className="slogan">
                  <div>LIFE IS SHORT</div>
                  <div>BUY A</div>
                  <div>LIPSTICK</div>
                </div>
                <Button
                  type="primary"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="footer">@Rice here 2018</div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }

  handelOpen = state => {
    return () => {
      this.setState({
        [`${state}`]: true
      })
    }
  }

  handleClose = state => {
    return () => {
      this.setState({
        [`${state}`]: false
      })
    }
  }
}

```

## API

```ts
interface Props {
  /**
   * customer className for modal
   */
  className?: string

  /**
   * whether the modal is opened or not
   **/
  isOpen: boolean

  /**
   * determine the positon of the modal related to the window
   * @default 'center'
   **/
  position?: 'left' | 'right' | 'bottom' | 'center'

  /**
   * Determine whether you can close modal by clicking overlay
   * @default true
   **/
  isClosedOnOverlayClick?: boolean

  /**
   * children of the modal content
   **/
  children: React.ReactElement<any>

  /**
   * callback triggered by closing the modal
   **/
  onClose?: () => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-modal can be overridden:

```scss
$or-modal-content-padding: $or-gap * 2 $or-gap * 4 !default;

```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://modal-one-react.netlify.com)

## License

MIT &copy; foryuki
