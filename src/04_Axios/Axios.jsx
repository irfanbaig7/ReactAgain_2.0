import React, { useEffect, useState } from 'react'
import api from './axiosInstance'

const Axios = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    // fetching data using axios
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users")
        setUsers(res.data)
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="border-b py-2">{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Axios