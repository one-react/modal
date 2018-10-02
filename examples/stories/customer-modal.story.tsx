import Button from 'or-button'
import React from 'react'
import { Modal } from '../../src'

export class CustomerModal extends React.Component {
  state = {
    isOpen: true
  }

  render() {
    const footerElement = (
      <div className="customer-footer">
        <Button type="primary" size="small" onClick={this.handleCancel}>
          确定
        </Button>
      </div>
    )
    return (
      <div className="customer-modal">
        <Button type="primary" small onClick={this.handelOpen}>
          Open
        </Button>
        <Modal
          title="customer modal"
          footer={footerElement}
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
