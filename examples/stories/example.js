import React from 'react'

import Modal from '../../src'
import Button from 'or-button'

class Example extends React.Component {
  state = {
    isOpen: false
  }
  render () {
    return (
      <div>
        <Button type='primary' small onClick={this.handelOpen}>Open</Button>
        <Modal
          title='basic'
          isOpen={this.state.isOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}>
          <div>Hello, do you want to continue?</div>
        </Modal>
      </div>
    )
  }

  handelOpen = () => {
    console.log('...')
    this.setState({
      isOpen: true
    })
  }

  handleOk = () => {

  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }
}

export default Example
