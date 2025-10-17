import React from 'react'
import { UseAuth } from './AuthContext'

const Loing = () => {

    const {login, isAuthenticated } = UseAuth()

    const handleLogin = () => {
        const dummyUser = { name: "Irfan baig", email: "ibaig@gk.com" }
        console.log(dummyUser);
        login(dummyUser)  
    }
    
  return (
    <div>
        <h2>Login page</h2>
        {isAuthenticated ? (
            <p>You are alredy logged In</p>
        ):(
            <button onClick={handleLogin} className='bg-blue-500 text-white px-3 py-1 rounded'>
                login
            </button>
        )}
    </div>
  )
}

export default Loing