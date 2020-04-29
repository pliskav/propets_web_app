import React from 'react'

import RegistreForm from './RegisterForm'
import LoginForm from './LoginFrom'

import Button from './ui/Button'

import '../styles/auth.css'

class Auth extends React.Component {
  constructor() {
    super()
    this.state = {
      formMode: 'login',
    }
  }

  loginHandleClick = () => {
    this.setState({
     formMode: 'login',
    })
  }

  registerHandleClick = () => {
    this.setState({
      formMode: 'register',
    })
  }

  render() {
    const { formMode } = this.state
    return (
      <div className="form-wrapper">
        <div className="form-control">
          <Button type="button" onClick={this.loginHandleClick}>Login</Button>
          <Button type="button" onClick={this.registerHandleClick}>Register</Button>
        </div>
        {formMode === 'login' ? <LoginForm /> : <RegistreForm />}
      </div>
    )
  }
}

export default Auth
