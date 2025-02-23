import React from 'react'
import { useState } from 'react'
import "./Welcome.css";

export default function Welcome() {

    let [subscribe, setSubscribe] = useState(true);

    let isSubscribe = () => {
        setSubscribe(true)
    }

    let isSubscribedBtn = () => {
        setSubscribe(false)
    }

  return (
    
    <div className='bg-container'>
      <h1 className='heading'>Welcome</h1>
      <p className='description'>Thank you! Happy Learning</p>
      {!subscribe && (
        <button className='btn' onClick={isSubscribe} type='button'>
            Subscribe
        </button>
      )}
      {subscribe && (
        <button className='btn' onClick={isSubscribedBtn} type='button'>
            Subscribed
        </button>
      )}
    </div>
  )
}
