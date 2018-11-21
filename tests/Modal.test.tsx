import { mount } from 'enzyme'
import React from 'react'
import { CSSTransition } from 'react-transition-group'

import Modal from '../src'

const mockCallBack = jest.fn()
describe('src/index', () => {
  describe('should render properly', () => {
    it('render', () => {
      const wrapper = mount(renderModal({ isOpen: true }))
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      expect(wrapper.find('.or-modal-mask').length).toBe(1)
      expect(wrapper.find('.or-modal').length).toBe(1)
      expect(wrapper.find('.or-modal-content').length).toBe(1)
      expect(wrapper.find('.or-modal-content').text()).toBe(
        'I am modal content'
      )
    })

    it('position #default center', () => {
      const wrapper = mount(renderModal({ isOpen: true }))
      expect(
        wrapper.find('.or-modal-wrapper').hasClass('or-modal-position-center')
      ).toBe(true)
    })

    it('position #right', () => {
      const wrapper = mount(renderModal({ isOpen: true, position: 'right' }))
      expect(
        wrapper.find('.or-modal-wrapper').hasClass('or-modal-position-right')
      ).toBe(true)
    })

    it('position #left', () => {
      const wrapper = mount(renderModal({ isOpen: true, position: 'left' }))
      expect(
        wrapper.find('.or-modal-wrapper').hasClass('or-modal-position-left')
      ).toBe(true)
    })

    it('position #bottom', () => {
      const wrapper = mount(renderModal({ isOpen: true, position: 'bottom' }))
      expect(
        wrapper.find('.or-modal-wrapper').hasClass('or-modal-position-bottom')
      ).toBe(true)
    })
  })

  describe('simulate click events # default closed', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderModal isOpen={false} />)
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
  })

  describe('simulate click events #default open', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderModal isOpen={true} />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('close icon #click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      expect(wrapper.find(CSSTransition).props().in).toBeTruthy()
      wrapper.find('.close-icon').simulate('click')
      // cannot make transitionEnd works
      expect(wrapper.find(CSSTransition).props().in).toBeFalsy()
    })
  })

  describe('simulate click events #modal closed by clicking overlay', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(<RenderModal isOpen={true} />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      expect(wrapper.find(CSSTransition).props().in).toBeTruthy()
      wrapper.find('.or-modal-mask').simulate('click')
      // cannot make transitionEnd works
      expect(wrapper.find(CSSTransition).props().in).toBeFalsy()
    })
  })

  describe('simulate click events #modal not closed by clicking overlay', () => {
    let wrapper
    beforeEach(() => {
      wrapper = mount(
        <RenderModal isOpen={true} isClosedOnOverlayClick={false} />
      )
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('click', () => {
      expect(wrapper.find('.or-modal-wrapper').length).toBe(1)
      expect(wrapper.find(CSSTransition).props().in).toBeTruthy()
      wrapper.find('.or-modal-mask').simulate('click')
      // cannot make transitionEnd works
      expect(wrapper.find(CSSTransition).props().in).toBeTruthy()
    })
  })
})

function renderModal(props) {
  return (
    <Modal className="modal-center" {...props}>
      <div>I am modal content</div>
    </Modal>
  )
}

class RenderModal extends React.Component<{
  isOpen: boolean
  isClosedOnOverlayClick?: boolean
}> {
  state = {
    isOpen: this.props.isOpen
  }

  render() {
    return (
      <div>
        <div className="open-btn" onClick={this.handelOpen}>
          open
        </div>
        <Modal
          className="modal-right"
          position="right"
          isOpen={this.state.isOpen}
          onClose={this.handleClose}
          isClosedOnOverlayClick={this.props.isClosedOnOverlayClick}
        >
          <div className="close-icon" onClick={this.handleClose}>
            close
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
