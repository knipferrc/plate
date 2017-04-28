import { Card, CardText } from 'material-ui/Card'
import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import BorderedButton from '../../../components/BorderedButton/BorderedButton'
import Cookies from 'js-cookie'
import Link from 'next/link'
import LoginMutation from '../../../mutations/LoginMutation'
import LoginValidation from '../../../validations/LoginValidation'
import PropTypes from 'prop-types'
import RenderWhiteTextField from '../../../utils/RenderWhiteTextField'

class LoginForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    login: PropTypes.func
  }

  state = {
    loginError: false
  }

  userLogin = async login => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    const token = await login(username, password)
    if (token.data.login === null) {
      this.setState({
        loginError: true
      })
    } else {
      Cookies.set('token', token.data.login, { path: '/', expires: 7 })
      window.location.href = '/dashboard'
    }
  }

  render() {
    const { login, handleSubmit } = this.props

    const errorStyle = {
      marginBottom: 10,
      backgroundColor: '#FFCDD2'
    }

    return (
      <div className="container-fluid">
        <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <h1 className="header-text">Login</h1>
            {this.state.loginError &&
              <Card style={errorStyle}>
                <div className="error-text">
                  <CardText>
                    <b>Error:</b> Invalid Login.
                    <Link prefetch href="/forgotpassword">
                      <a style={{ textDecoration: 'none' }}>
                        {' '}Forgot Password?
                      </a>
                    </Link>
                  </CardText>
                </div>
              </Card>}
            <form onSubmit={handleSubmit(() => this.userLogin(login))}>
              <Field
                name="username"
                id="username"
                component={RenderWhiteTextField}
                type="text"
                label="Username"
              />
              <Field
                name="password"
                id="password"
                component={RenderWhiteTextField}
                type="password"
                label="Password"
                style={{ marginBottom: 20 }}
              />
              <BorderedButton color="white" type="submit" label="Login" />
            </form>
            <div className="forgot-password">
              <Link prefetch href="/forgotpassword">
                <a>Forgot Password?</a>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .text-field-email {
            margin-bottom: 15px;
          }
          .text-field-password {
            margin-bottom: 15px;
          }
          .forgot-password {
            margin-top: 15px;
          }
          .forgot-password a {
            color: white;
            text-decoration: none;
          }
          .error-text {
            text-align: center;
          }
          .full-height {
            height: 90vh;
          }
          .header-text {
            color: white;
            margin-bottom: 50px;
          }
        `}
        </style>
      </div>
    )
  }
}

export default compose(
  reduxForm({
    form: 'loginForm',
    validate: LoginValidation
  }),
  graphql(LoginMutation, {
    props: ({ mutate }) => ({
      login: (username, password) =>
        mutate({ variables: { username, password } })
    })
  })
)(LoginForm)