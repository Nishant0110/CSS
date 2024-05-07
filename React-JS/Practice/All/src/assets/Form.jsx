import React, { useState } from 'react'
import './Form.css'
export default function Form() {
    const [name, setName] = useState()
    const [fName, setFname] = useState()
    const inputevent = (event) => {
        setName(event.target.value);
    }
    const submitData = () => {
        setFname(name)
    }
    return (
        <>
            <div>
                <h1>Welcome {fName}</h1>
                <input type="text" id="" placeholder="enter your name" onChange={inputevent} />
                <button onClick={submitData}>Click me</button>
            </div>
        </>
    )
}
