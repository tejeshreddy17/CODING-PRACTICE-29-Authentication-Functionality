// Write your JS code here
import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogOut = props => {
  const {history} = props

  const onclickLogout = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
    console.log(history)
  }

  return (
    <>
      <button onClick={onclickLogout}>LogOut</button>
    </>
  )
}

export default withRouter(LogOut)
