import Button from 'or-button'
import React from 'react'
import { Modal } from '../../src'

export class CustomerModal extends React.Component {
  state = {
    isOpen: true
  }

  render() {
    return (
      <div className="customer-modal">
        <Button type="primary" small onClick={this.handelOpen}>
          Open
        </Button>
        <Modal isOpen={this.state.isOpen} onClose={this.handleClose}>
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

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }
}
