import { mount } from 'enzyme'
import Button from 'or-button'
import React from 'react'

import { Modal } from '../src'

const mockCallBack = jest.fn()
describe('src/index', () => {
  describe('should render properly', () => {
    let wrapper
    it('#pass title props', () => {
      wrapper = mount(renderModal({ title: 'hello' }))
      expect(wrapper.find('.or-modal-title').text()).toBe('hello')
      expect(wrapper.find('.or-modal-close-icon').length).toBe(1)
    })

    it('#default footer', () => {
      wrapper = mount(renderModal({}))
      expect(wrapper.find('.or-modal-footer').length).toBe(1)
      expect(
        wrapper
          .find('.or-modal-footer .or-btn')
          .at(0)
          .text()
      ).toBe('CANCEL')
      expect(
        wrapper
          .find('.or-modal-footer .or-btn')
          .at(1)
          .text()
      ).toBe('OK')
    })

    it('#custom footer', () => {
      wrapper = mount(
        renderModal({
          footer: (
            <div className="customer-footer">
              <Button type="primary" size="small">
                确定
              </Button>
            </div>
          )
        })
      )
      expect(wrapper.find('.or-modal-footer').length).toBe(0)
      expect(wrapper.find('.customer-footer').length).toBe(1)
      expect(wrapper.find('.customer-footer').html()).toBe(
        '<div class="customer-footer"><div class="or-btn or-btn-primary">确定</div></div>'
      )
    })
  })

  describe('simulate click events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderModal />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('close icon #click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      wrapper.find('.or-modal-close-icon').simulate('click')
      expect(wrapper.find('.or-modal-wrapper').length).toBe(0)
    })

    it('cancel button #click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      wrapper
        .find('.or-modal-wrapper .or-btn')
        .at(0)
        .simulate('click')
      expect(wrapper.find('.or-modal-wrapper').length).toBe(0)
      expect(wrapper.find('.btn-state').text()).toBe('cancel clicked')
    })

    it('ok button #click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      wrapper
        .find('.or-modal-wrapper .or-btn')
        .at(1)
        .simulate('click')
      expect(wrapper.find('.or-modal-wrapper').length).toBe(0)
      expect(wrapper.find('.btn-state').text()).toBe('ok clicked')
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
    isOpen: true,
    btnState: 'init'
  }
  render() {
    return (
      <div>
        <div className="btn-state">{this.state.btnState}</div>
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
      isOpen: false,
      btnState: 'ok clicked'
    })
  }

  handleCancel = () => {
    this.setState({
      isOpen: false,
      btnState: 'cancel clicked'
    })
  }
}
