import React, { useState } from 'react'
import './EvenOdd.css'

export default function EvenOdd() {

    const [count, setCount] = useState(0);

    const getRandomNumber = () => Math.ceil(Math.random() * 100)
    //const randomNumber = getRandomNumber();

    const onIncrement = () => {
        setCount(getRandomNumber)
    }

  return (
    <div className='app-container'>
      <div className='count-container'>
        <h1 className='heading'>Count {count}</h1>
        <p>Count is {count % 2 === 0 ? 'Even' : 'Odd'}</p>
        <button type='button' onClick={onIncrement} className='btn'>
            Increment
        </button>
        <p className='note'>*Increse By Random Number Between 0 to 100</p>
      </div>
    </div>
  )
}
