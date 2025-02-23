import React, { useState } from 'react'
import "./ClickCounter.css";

export default function ClickCounter () {
    let [count, setCount] = useState(0);

    let onIncrement = () => {
        setCount((currCount) => currCount + 1);
    }

    return (
        <div className='counter-container'>
            <h1 className='counter-heading'>
                The Button Has Been Clicked
                <br /> <span className='counter-value'>{count}</span> times
            </h1>
            <p className='description'>Click the button to increase the count!</p>
            <div className='button-container'>
                <button
                type='button'
                className='button'
                onClick={onIncrement}
                >
                    Click Me!
                </button>
            </div>
        </div>
    )
}


