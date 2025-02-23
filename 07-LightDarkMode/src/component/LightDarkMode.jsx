import React, { useState } from 'react'
import "./LightDarkMode.css"

export default function LightDarkMode() {

    let [count, setCount] = useState(true)

    let onClickButton = () => {
        setCount(prevState => !prevState)
    }

    const modeClassName = count ? 'dark-mode' : 'light-mode'
    const buttonText = count ? 'Light Mode' : 'Dark Mode'

    return (
        <div className='app-container'>
            <div className={`container ${modeClassName}`}>
                <h1 className='heading'>Click To Change Mode</h1>
                <button type='button' onClick={onClickButton} className='btn'>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}