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
import Queryy from './06_tanstackQuery/Queryy'
// import TransFormation from './04_Axios/transformation/TransFormation'

const App = () => {

  const queryClient = new QueryClient()


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


      {/* 03 Zustand */}
      {/* <Zustandd /> */}


      {/* 04 axios */}
      {/* <Axios /> */}
      {/* <Ex1Interceptors /> */}
    

      {/* mini project */}
      
      {/* <Prj /> */}



      {/* 06 tannstackQuery */}
      <QueryClientProvider client={queryClient}>
        <Queryy />
      </QueryClientProvider>
      

      
      
      



    </>
  )
}

export default App