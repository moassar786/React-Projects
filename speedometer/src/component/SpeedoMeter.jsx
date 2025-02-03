import React from 'react'
import "./SpeedoMeter.css";
import { useState } from 'react';

export default function SpeedoMeter() {
    let [count, setCount] = useState(0);

    let onAccelerate = () => {
        if(count < 200) {
            setCount((currCount) => currCount + 10);
        }
    }

    let onBrake = () => {
        if(count > 0) {
            setCount((currCount) => currCount - 10);
        }
    }

    return (
        <div className='bg-container'>
            <h1 className='main-heading'>SPEEDOMETER</h1>
            <img
                src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
                alt="speedometer"
                className="speedometer-img"
            />
            <h2 className='sub-heading'>Speed is <span>{count}</span>mph</h2>
            <p>Min Limit is 0mph, Max Limit is 200mph</p>
            <div>
                <button
                    type='button'
                    className='btn btn-accelerate'
                    onClick={onAccelerate}
                >
                    Accelerate
                </button>

                <button
                    type='button'
                    className='btn btn-brake'
                    onClick={onBrake}
                >
                    Apply Brake
                </button>
            </div>
        </div>
    )
}
