import React from 'react'
import { useCounter } from './CounterContext'

const CounterDisplay = () => {

  const { count } = useCounter()
  
  return (
    <h2 className="text-3xl text-center mt-8 font-bold">
      Global Count: {count}
    </h2>
  )
}

export default CounterDisplay