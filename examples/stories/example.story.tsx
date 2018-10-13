import Button from 'or-button'
import React from 'react'
import { Modal } from '../../src'

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
            Open default center
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
                  <svg
                    className="or-modal-close-icon"
                    fill="#000"
                    height="30"
                    viewBox="0 0 24 24"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
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
                <svg
                  className="or-modal-close-icon"
                  fill="#777"
                  height="25"
                  viewBox="0 0 24 24"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={this.handleClose('isOpenRight')}
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
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
