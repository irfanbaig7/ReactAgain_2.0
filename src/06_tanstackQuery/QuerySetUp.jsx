import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

// fetching function
const addUser = async(userData) => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', userData)
    return res.data
}

const QuerySetUp = () => {

    // const { data, isPending, error, refetch } = useQuery({
    //     queryKey: ["users"],
    //     queryFn: fetchUsers,
    // })

    // queryClient ka access chahiye
    const queryClient = useQueryClient()

    useMutation({
        mutationFn: addUser,
        onSuccess: () => {
            // Refetch users data so UI gets updated
            queryClient.invalidateQueries({ queryKey: ['users'] })
            
        }
    })


    // handling loading and errors
    // if(isPending) return <p>Loading..</p>
    // if(error) return <p>Error founded</p>


  return (
    <div>
        <button onClick={() => refetch()} className='text-blue-300 cursor-pointer'>Refetch Users</button>
        <ul>
            {data.map((user) => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default QuerySetUp