import React from 'react'
import CounterDisplay from './GlobalCounter/CounterDisplay'
import CounterButtons from './GlobalCounter/CounterButtons'
import Loing from './Authenctication/Loing'
import Profile from './Authenctication/Profile'

const UseReduAndContext = () => {
  return (
    <div className="mt-10">
      {/* <div>
        <h1 className="text-2xl font-bold text-center">🧮 Global Counter Example</h1>
        <CounterDisplay />
        <CounterButtons />
      </div> */}
      <div>
        <Loing />
        <Profile />
      </div>
    </div>
  )
}

export default UseReduAndContext