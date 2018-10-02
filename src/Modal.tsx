import clx from 'classnames'
import Button from 'or-button'
import React, { PureComponent } from 'react'
import { ModalPotal } from './ModalPortal'

interface Props {
  /**
   * customer classname for modal
   */
  classname?: string

  /**
   * title for modal
   **/
  title: string

  /**
   * customer footer for modal, will override the default footer
   */
  footer?: React.ReactElement<any> | null

  /**
   * whether the modal is opened or not
   **/
  isOpen: boolean

  /**
   * children of the modal content
   **/
  children: React.ReactElement<any>

  /**
   * callback triggered by click the 'cancel' button
   **/
  onCancel?: () => void

  /**
   * callback triggered by click the 'ok' button
   **/
  onOk?: () => void
}

export class Modal extends PureComponent<Props, {}> {
  render() {
    const { title, footer, children, isOpen } = this.props
    const classnames = clx('or-modal-wrapper', 'or-clearfix')
    return (
      <div>
        {isOpen && (
          <ModalPotal>
            <div className={classnames}>
              <div className="or-modal-mask" />
              <div className="or-modal">
                {title && (
                  <div className="or-modal-title-wrapper">
                    <div className="or-modal-title">{title}</div>
                    <svg
                      fill="#9E9E9E"
                      height="18"
                      viewBox="0 0 24 24"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={this.handleClose}
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg>
                  </div>
                )}
                <div className="or-modal-content">{children}</div>
                {footer ? (
                  footer
                ) : footer === null ? null : (
                  <div className="or-modal-footer">
                    <Button size="small" onClick={this.handleCancel}>
                      CANCEL
                    </Button>
                    <Button size="small" type="primary" onClick={this.handleOk}>
                      OK
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ModalPotal>
        )}
      </div>
    )
  }

  handleCancel = () => {
    this.handleClose()
  }

  handleClose = () => {
    const { onCancel } = this.props
    if (typeof onCancel === 'function') {
      onCancel()
    }
  }

  handleOk = () => {
    const { onOk } = this.props
    if (typeof onOk === 'function') {
      onOk()
    }
  }
}
