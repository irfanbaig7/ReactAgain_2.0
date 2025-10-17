import React from 'react'
import { useCounter } from './CounterContext'

const CounterButtons = () => {
  const { increment, decrement, reset } = useCounter()

  return (
    <div className="flex gap-3 justify-center mt-4">
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-1 rounded-md"
      >
        +
      </button>
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-1 rounded-md"
      >
        -
      </button>
      <button
        onClick={reset}
        className="bg-gray-500 text-white px-4 py-1 rounded-md"
      >
        Reset
      </button>
    </div>
  )
}

export default CounterButtons