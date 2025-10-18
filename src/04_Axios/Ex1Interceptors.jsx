import React, { useEffect } from 'react'
import api from './exOneInterceptores'

const Ex1Interceptors = () => {


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/posts")
                console.log("Data : ", res.data.slice(0,3))   
            } catch (error) {
                console.log("Error : ", error);
            }
        }
        fetchData();
    }, [])
    



  return (
    <h1 className="p-4 text-xl font-bold">Axios Interceptors Demo</h1>
  )
}

export default Ex1Interceptors