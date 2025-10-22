import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactQuery from './ReactQuery'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from 'react-hot-toast'


// notes:
// ReactQueryDevtools: debugging ke liye — queries, cache, refetch, etc.


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // jab window focus ho tab auto refetch mat kare
      retry: 2, // max 2 retry agar request fail ho jaye
    }
  }
})



const TanStack = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery />
      <Toaster position='top-right' />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default TanStack