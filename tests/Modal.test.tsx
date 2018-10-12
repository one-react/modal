import { mount } from 'enzyme'
import Button from 'or-button'
import React from 'react'

import { Modal } from '../src'

const mockCallBack = jest.fn()
describe('src/index', () => {
  describe('simulate click events', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderModal />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('open modal', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(0)
      wrapper.find('.open-btn').simulate('click')
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
    })

    // it('close icon #click', () => {
    //   expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
    //   wrapper.find('.or-modal-close-icon').simulate('click')
    //   expect(wrapper.find('.or-modal-wrapper').length).toBe(0)
    // })
  })
})

class RenderModal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <div>
        <div className="open-btn" onClick={this.handelOpen}>
          open
        </div>
        <Modal
          classname="modal-center"
          isOpen={this.state.isOpen}
          onClose={this.handleClose}
        >
          <div className="right-side">
            <svg
              className="or-modal-close-icon"
              fill="#000"
              height="30"
              viewBox="0 0 24 24"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              onClick={this.handleClose}
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </div>
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
