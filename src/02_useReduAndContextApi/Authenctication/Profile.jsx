import React from 'react'
import { UseAuth } from './AuthContext'

const Profile = () => {

    const { user, isAuthenticated, logOut } = UseAuth()

    if (!isAuthenticated) {
        return <p>Please login frist</p>
    }

  return (
    <div className="p-4 border rounded w-80 mx-auto text-center mt-10">
      <h2 className="text-xl mb-3">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button
        onClick={logOut}
        className="bg-red-500 text-white px-4 py-2 rounded mt-3"
      >
        Logout
      </button>
    </div>
  )
}

export default Profile