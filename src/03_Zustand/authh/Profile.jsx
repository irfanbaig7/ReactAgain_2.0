import React from 'react'
import { useAuthStore } from './useAuthStore'

const Profile = () => {

    const { user, isAutenticated, logout } = useAuthStore()

    if (!isAutenticated) {
        return (
            <p className="text-center mt-10 text-red-500">
                ⚠️ Please login first.
            </p>
        )
    }

    return (
        <div className="p-4 border rounded w-80 mx-auto text-center mt-10">
            <h2 className="text-xl mb-3">Profile</h2>
            <p className="text-gray-700">Name: {user.name}</p>
            <p className="text-gray-700 mb-3">Email: {user.email}</p>

            <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded"
            >
                Logout
            </button>
        </div>
    )
}

export default Profile