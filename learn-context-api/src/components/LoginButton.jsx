import {useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

const LoginButton = () => {
    const { isLoggedIn, login, logout} = useContext(AuthContext);
  return (
    <div>
        {isLoggedIn ? (
            <button onClick={logout}>Logout</button>
        ) : (
            <button onClick={login}>Login</button>
        )}
    </div>
  )
}

export default LoginButton