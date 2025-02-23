import React, { useState } from 'react'
import "./FruitCounter.css";

export default function FruitCounter() {

    const [mangoes, setMangoes] = useState(0);
    const [bananas, setBananas] = useState(0);

    let eatMango = () => {
        setMangoes((currMangoes) => currMangoes + 1)
    }

    let eatBanana = () => {
        setBananas((currBananas) => currBananas + 1)
    }

    return (
        <div className='bg-container'>
            <div className='content-container'>
                <h1 className='heading'>Bob ate <span className='fruit-value'>{mangoes}</span> Mangoes <span className='fruit-value'>{bananas}</span> Bananas</h1>
                <div className='fruits-container'>
                    <div className='fruit-container'>
                        <img
                            className="fruit-img"
                            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                            alt="mango"
                        />
                        <button
                            className='btn'
                            type='button'
                            onClick={eatMango}
                        >
                            Eat Mango
                        </button>
                    </div>
                    <div className='fruit-container'>
                        <img
                            className="fruit-img"
                            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                            alt="banana"
                        />
                        <button
                            className='btn'
                            type='button'
                            onClick={eatBanana}
                        >
                            Eat Banana
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
