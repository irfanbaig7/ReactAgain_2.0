import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { localStorageAddUser } from './helper'

const AddUsersForm = () => {

    const [name, setName] = useState('')
    const queryClient = useQueryClient();

    // mutation for add
    const addUserMutation = useMutation({
        mutationFn: (user) => localStorageAddUser(user),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] }) // refetch users
            setName(''); // clear form
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name) return
        addUserMutation.mutate({ name }) // send new user details
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter user name..' />
         <button type="submit" disabled={addUserMutation.isPending}>
        {addUserMutation.isPending ? 'Adding...' : 'Add User'}
      </button>
      {addUserMutation.isError && <div>Error adding user!</div>}
    </form>
  )
}

export default AddUsersForm