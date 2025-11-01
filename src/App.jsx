import React from 'react'
import UseReducer from './01_useReducer/UseReducer'
import UseReduAndContext from './02_useReduAndContextApi/UseReduAndContext'
import { CounterProvider } from './02_useReduAndContextApi/GlobalCounter/CounterContext'
import { AuthContextprovider } from './02_useReduAndContextApi/Authenctication/AuthContext'
import Loing from './02_useReduAndContextApi/Authenctication/Loing'
import Profile from './02_useReduAndContextApi/Authenctication/Profile'
import Zustandd from './03_Zustand/Zustandd'
import Axios from './04_Axios/Axios'
import Ex1Interceptors from './04_Axios/Ex1Interceptors'
import Prj from './05_Prj/Prj'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import Queryy from './06_tanstackQuery/Queryy'
// import TanStack from './06_tanstackPrj/TanStack'
// import Main from './06_todo/Main'
import QuerySetUp from './06_tanstackQuery/QuerySetUp'
import HelpFile from './06_tanstackQuery/HelpFile'
// import Again from './06_tanstackQuery/Again/Again'
import Product from './06_tanstackQuery/Again/Product'
import { Toaster } from 'react-hot-toast'
import Product2 from './06_tanstackQuery/project/Product2'
// import TransFormation from './04_Axios/transformation/TransFormation'

const App = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2, // retry failed requests 2 times
        refetchOnWindowFocus: false, // user jab tab switch kare, refetch mat karo
      },
    },
  })

  return (
    <>

      {/* 01 useReducer */}
      {/* <UseReducer /> */}


      {/* 02 useReducer an Context */}

      {/* <CounterProvider>
        <UseReduAndContext />
      </CounterProvider> */}

      {/* <AuthContextprovider>
        <Loing />
        <Profile />
      </AuthContextprovider> */}


      {/* 04 axios */}
      {/* <Axios /> */}
      {/* <Ex1Interceptors /> */}


      {/* mini project */}
      {/* <Prj /> */}

      {/* 06 tannstackQuery */}
      {/* <QueryClientProvider client={queryClient}>
        <Queryy />
      </QueryClientProvider> */}


      {/* 06 mini-Project of tanstackQuery */}
      {/* <TanStack /> */}
      {/* <Main /> */}


      <QueryClientProvider client={queryClient}>
        {/* <QuerySetUp /> */}
        {/* <QuerySetUp /> */}
        {/* <Product /> */}
        <Product2 />
        <Toaster position='top-right' />
      </QueryClientProvider>









    </>
  )
}

export default App