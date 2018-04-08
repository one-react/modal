import React from 'react'
import clx from 'classnames'
import Button from 'or-button'

class Modal extends React.Component {
  render () {
    const { title, children, isOpen } = this.props
    const classnames = clx({
      'or-modal-wrapper': true,
      'or-clearfix': true,
      active: isOpen
    })
    return (
      <div className={classnames}>
        <div className='modal-mask' />
        <div className='or-modal'>
          {
            title &&
            <div className='title-wrapper'>
              <div className='title'>{title}</div>
              <svg
                fill='#9E9E9E'
                height='18'
                viewBox='0 0 24 24'
                width='18'
                xmlns='http://www.w3.org/2000/svg'
                onClick={this.handleClose}>
                <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/>
                <path d='M0 0h24v24H0z' fill='none' />
              </svg>
            </div>
          }
          {
            <div className='content'>{children}</div>
          }
          <div className='footer-wrapper'>
            <Button small onClick={this.handleClose}>CANCEL</Button>
            <Button small type='primary'>OK</Button>
          </div>
        </div>

      </div>
    )
  }

  handleClose = () => {
    const { onCancel } = this.props
    if (typeof onCancel === 'function') {
      onCancel()
    }
  }
}

export default Modal
