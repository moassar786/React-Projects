import React from 'react'
import { useState } from 'react'
import "./ShowHideApp.css"

export default function ShowHideApp() {

    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);

    const showFirstname = () => {
        setShow(prevState => !prevState)
    }

    const hideLastname = () => {
        setHide(prevState => !prevState)
    }

    return (
        <div className='bg-container'>
            <h1 className='heading'>Show/Hide</h1>
            <div className='container'>
                <div>
                    <button type='button' onClick={showFirstname} className='btn'>
                        Show/Hide Firstname
                    </button>
                    {show ? <p className='firstname'>Joe</p> : null}
                </div>
                <div>
                    <button type='button' onClick={hideLastname} className='btn'>
                        Show/Hide Lastname
                    </button>
                    {hide ? <p className='lastname'>Jonas</p> : null}
                </div>
            </div>
        </div>
    )
}
