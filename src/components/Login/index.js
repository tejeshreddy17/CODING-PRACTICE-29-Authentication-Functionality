// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

class Login extends Component {
  state = {username: 'rahul', password: 'rahul@2021'}

  onsubmitSucess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  onClickingLogin = async () => {
    console.log('pressed')
    const details = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onsubmitSucess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    const history = this.props
    if (jwtToken === undefined) {
      return (
        <div>
          <h1>Please Login</h1>
          <button type="button" onClick={this.onClickingLogin}>
            Login with Sample Creds
          </button>
        </div>
      )
    }
    return <Redirect to="/" />
  }
}

export default Login
