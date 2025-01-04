import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import { decrement, increment, incrementByAmount } from './store/features/counter/counterSlice';
function App() {
  const counter = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <p>counter value is {counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By</button>
    </>
  )
}

export default App
