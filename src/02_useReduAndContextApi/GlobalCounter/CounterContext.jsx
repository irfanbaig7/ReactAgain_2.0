import React, { createContext, useContext, useReducer } from 'react'
import { counterReducer, intialCounterState } from './counterReducer';

export const CounterContext = createContext()

export const CounterProvider = ({ children }) => {

    //  multiple logics combine into single thing that call reducer function jo ki ham usko centralized karenge

    const [ state, dispatch ] = useReducer(counterReducer, intialCounterState);

    // helper functions
    const increment = () => dispatch({ type: "INCREMENT" })
    const decrement = () => dispatch({ type: "DECREMENT" })
    const reset = () => dispatch({ type: "RESET" })

  return (
    <CounterContext.Provider value={{ count: state.count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

// custom hook for useContext

export const useCounter = () => useContext(CounterContext)