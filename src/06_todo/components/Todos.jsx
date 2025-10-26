import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'

const Todos = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  if(isLoading) return <p>Loadinggg...</p>
  if(isError) return <p>{error.message || "Somethig went wrong!"}</p>
  

  return (
    <div>
      {data?.slice(0, 10).map((p) => (
        <li key={p.id}>
          <p>{p.title}</p>
        </li>
      ))}
    </div>
  )
}

export default Todos