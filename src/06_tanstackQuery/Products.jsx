import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { axiosInstance } from './axiosInstance';


// function jo fetching karega
const fetchProducts = async () => {
    const res = await axiosInstance.get("/products")
    return res.data;
}

const Products = () => {

    // using useQuery
    const { data, error, isLoading, isFetching } = useQuery({
        queryKey: ["products"], // unique key for caching
        queryFn: fetchProducts, // function that fetches data
    })

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
        <h1 className='text-3xl'>🛒 products</h1>
        {isFetching && <small>Refetching...</small>}
        <ul>
            {data.map((p) => (
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Products