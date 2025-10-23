import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

// queryfn
const fetchTodos = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    return data
}

const Todos = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,

    })

    // loading handing
    if(isLoading) return <p>Loading....</p>

    // Error handling 
    if(isError) return <p>Error : {error.message}</p>


  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {data.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todos