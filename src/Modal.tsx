import clx from 'classnames'
import React, { PureComponent } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ModalPortal } from './ModalPortal'

interface Props {
  /**
   * customer classname for modal
   */
  classname?: string

  /**
   * whether the modal is opened or not
   **/
  isOpen: boolean

  /**
   * the positon of the modal related to the window
   * @default 'center'
   **/
  position?: 'left' | 'right' | 'bottom' | 'center'

  /**
   * whether the modal is closed when click the overlay
   * @default true
   **/
  isClosedOnOverlayClick?: boolean

  /**
   * children of the modal content
   **/
  children: React.ReactElement<any>

  /**
   * callback triggered by close the modal
   **/
  onClose?: () => void
}

export class Modal extends PureComponent<Props, {}> {
  render() {
    const {
      classname,
      position = 'center',
      children,
      isOpen,
      isClosedOnOverlayClick = true
    } = this.props

    const modalNames = clx(
      {
        [`or-modal-position-${position}`]: position
      },
      classname,
      'or-modal-wrapper'
    )
    return (
      <div>
        <CSSTransition
          in={isOpen}
          timeout={300}
          classNames="or-modal-mask-transition"
          unmountOnExit
        >
          {() => (
            <ModalPortal>
              <div className={modalNames}>
                {isClosedOnOverlayClick ? (
                  <div
                    className="or-modal-mask"
                    onClick={isClosedOnOverlayClick && this.handleClose}
                  />
                ) : (
                  <div className="or-modal-mask" />
                )}
                <div className="or-modal">
                  <div className="or-modal-content">{children}</div>
                </div>
              </div>
            </ModalPortal>
          )}
        </CSSTransition>
      </div>
    )
  }

  handleClose = () => {
    const { onClose } = this.props
    if (typeof onClose === 'function') {
      onClose()
    }
  }
}
