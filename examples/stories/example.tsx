import Button from 'or-button'
import React from 'react'

import { SvgClose } from 'or-icons'
import Modal from 'or-modal'

export class Example extends React.Component {
  state = {
    isOpenCenter: false,
    isOpenRight: true
  }

  render() {
    return (
      <div>
        <div className="example-wrapper">
          <Button type="primary" onClick={this.handelOpen('isOpenCenter')}>
            Open default Center
          </Button>
          <Modal
            classname="modal-center"
            isOpen={this.state.isOpenCenter}
            onClose={this.handleClose('isOpenCenter')}
          >
            <div>
              <div className="right-side">
                <div
                  className="close-icon"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  <SvgClose
                    className="or-modal-close-icon"
                    fill="#333"
                    size="30"
                  />
                </div>
                <div className="slogan">
                  <div>LIFE IS SHORT</div>
                  <div>BUY A</div>
                  <div>LIPSTICK</div>
                </div>
                <Button
                  type="primary"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="footer">@Rice here 2018</div>
            </div>
          </Modal>
        </div>
        <div className="example-wrapper">
          <Button type="primary" onClick={this.handelOpen('isOpenRight')}>
            Open from Right
          </Button>
          <Modal
            classname="modal-right"
            position="right"
            isOpen={this.state.isOpenRight}
            onClose={this.handleClose('isOpenRight')}
          >
            <div>
              <div className="title-wrapper">
                <SvgClose
                  className="or-modal-close-icon"
                  fill="#777"
                  size="25"
                  onClick={this.handleClose('isOpenRight')}
                />
                <div className="title">Account</div>
              </div>
              <div className="fast-sign">
                <span
                  className="text-underline"
                  onClick={this.handleClose('isOpenRight')}
                >
                  Sign in
                </span>
                <span>or</span>
                <span
                  className="text-underline"
                  onClick={this.handleClose('isOpenRight')}
                >
                  create an account
                </span>
              </div>
              <div className="sign-title">SIGN IN</div>
              <div className="reminder">* Required information</div>
              <div className="reminder">E-mail *</div>
              <div className="">
                <input type="text" />
              </div>
              <div className="sign-title">NEW USER?</div>
              <Button
                type="primary"
                large
                onClick={this.handleClose('isOpenRight')}
              >
                Create an account
              </Button>
            </div>
          </Modal>
        </div>
        <div className="example-wrapper">
          <Button type="primary" onClick={this.handelOpen('isOpenCenter')}>
            Modal can't be closed by clicking overlay
          </Button>
          <Modal
            classname="modal-center"
            isOpen={this.state.isOpenCenter}
            isClosedOnOverlayClick={false}
            onClose={this.handleClose('isOpenCenter')}
          >
            <div>
              <div className="right-side">
                <div
                  className="close-icon"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  <SvgClose
                    className="or-modal-close-icon"
                    fill="#333"
                    size="30"
                  />
                </div>
                <div className="slogan">
                  <div>LIFE IS SHORT</div>
                  <div>BUY A</div>
                  <div>LIPSTICK</div>
                </div>
                <Button
                  type="primary"
                  onClick={this.handleClose('isOpenCenter')}
                >
                  SHOP NOW
                </Button>
              </div>
              <div className="footer">@Rice here 2018</div>
            </div>
          </Modal>
        </div>
      </div>
    )
  }

  handelOpen = state => {
    return () => {
      this.setState({
        [`${state}`]: true
      })
    }
  }

  handleClose = state => {
    return () => {
      this.setState({
        [`${state}`]: false
      })
    }
  }
}
