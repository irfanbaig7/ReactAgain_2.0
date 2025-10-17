import React from 'react'
import { useAuthStore } from './useAuthStore'

const Login = () => {

    const { login, isAutenticated } = useAuthStore();

    const handleLogin = () => {
        const dummyUser = { name: "Rohitsharma", email: "rohit@gmail.com" }
        console.log(dummyUser);
        login(dummyUser)
    }

    return (
        <div className="p-4 border rounded w-80 mx-auto text-center mt-10">
            <h2 className="text-xl mb-3">Login</h2>
            {isAutenticated ? (
                <p className='text-green-600 font-semibold'>Already Logged In</p>
            ) : (
                <button onClick={handleLogin} className='bg-blue-600 text-white px-4 py-2 rounded'>
                    Login
                </button>
            )}

        </div>
    )
}

export default Login