import React from 'react'
import UsersList from './HelpFile'
import AddUsersForm from './AddUsersForm'

const QuerySetUp = () => {
    return (
        <div>
            <h1>User CRUD Demo (React Query + localStorage)</h1>
            <AddUsersForm />
            <UsersList />

        </div>
    )
}

export default QuerySetUp