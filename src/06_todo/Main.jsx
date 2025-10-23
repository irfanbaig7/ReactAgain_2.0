import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import Todo from './Todo'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()

const Main = () => {
  return (
    <QueryClientProvider client={queryClient} >
        <Todo />
        <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default Main