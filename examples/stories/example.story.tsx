import Button from 'or-button'
import React from 'react'
import { Modal } from '../../src'

export class Example extends React.Component {
  state = {
    isOpen: true
  }
  render() {
    return (
      <div>
        <Button type="primary" small onClick={this.handelOpen}>
          Open
        </Button>
        <Modal
          title="basic"
          isOpen={this.state.isOpen}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div>Hello, do you want to continue?</div>
        </Modal>
      </div>
    )
  }

  handelOpen = () => {
    this.setState({
      isOpen: true
    })
  }

  handleOk = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false
    })
  }
}
