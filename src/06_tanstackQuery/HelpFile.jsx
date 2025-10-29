import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { localStorageDeleteUser, localStorageEditUser, localStorageGetUsers } from './helper'

const UsersList = () => {

  const queryClient = useQueryClient();

  // sare users milege
  const { data: users, isLoading, isError, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: localStorageGetUsers,
    staleTime: 5000, // 5 sec
    gcTime: 60000, // 1 minute cache
  })

  // edit 

  // manage state for edit feild
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  const editUserMutation = useMutation({
    mutationFn: ({ id, newData }) => localStorageEditUser(id, newData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      setEditingId(null)
      setEditName('')

    }
  })

  // delete
  const deleteUserMutation = useMutation({
    mutationFn: (id) => localStorageDeleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    }
  })

  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error loading users.</div>;

  return (
    <div>
      <button onClick={() => refetch()} >Refetch Users</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>

            {editingId === u.id ? (
              <>
                <input type="text" value={editName} onChange={e => setEditName(e.target.value)} autoFocus />
                <button onClick={() => editUserMutation.mutate({ id: u.id, newData: { name: editName } })}>
                  Save
                </button>
              </>
            ) : (
              <>
                {u.name}
                <button onClick={() => editUserMutation.mutate({ id: u.id, newData: { name: "new name" } })} disabled={editUserMutation.isPending}>
                  Edit
                </button>

                <button onClick={() => deleteUserMutation.mutate(u.id)} disabled={deleteUserMutation.isPending}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList