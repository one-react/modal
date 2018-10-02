import { mount, ReactWrapper } from 'enzyme'
import React from 'react'

import { Modal } from '../src'

describe('src/index', () => {
  describe('should render properly', () => {
    let wrapper
    it('#title', () => {
      wrapper = mount(renderModal({ title: 'hello' }))
      expect(wrapper.find('.or-modal-title').text()).toBe('hello')
    })
  })
})

function renderModal(props) {
  return (
    <Modal isOpen={true} {...props}>
      <div>Hello, do you want to continue?</div>
    </Modal>
  )
}

class RenderModal extends React.Component {
  state = {
    isOpen: true
  }
  render() {
    return (
      <div>
        {this.state.isOpen && (
          <Modal
            title="basic"
            isOpen={this.state.isOpen}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <div>Hello, do you want to continue?</div>
          </Modal>
        )}
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
