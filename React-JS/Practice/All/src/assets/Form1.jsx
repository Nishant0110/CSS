import React, { useState } from 'react'
import './Form.css'
export default function Form1() {
    const [fullName, setfullName] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: '',
    });

    const inputEvent = (event) => {
        console.log(event.target.value);
        const value = event.target.value
        const name = event.target.name

        setfullName((preValue) => {
            if (name === 'fName') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            } else if (name === 'lName') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone: preValue.phone,
                }
            }
            else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone: preValue.phone,
                }
            }
            else if (name === 'phone') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone: value,
                }
            }
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        alert('form submitted');
    }

    return (
        <>
            <form action="" onSubmit={onSubmit}>
                <div>
                    <h1>My First name is {fullName.fname}. my lastname is  {fullName.lname}.  my email is {fullName.email}. my phone number is {fullName.phone}.</h1>
                    <input type="text" id="" placeholder="enter your fname" name="fName" onChange={inputEvent} />
                    <input type="text" id="" placeholder="enter your lname" name="lName" onChange={inputEvent} />
                    <input type="email" id="" placeholder="enter your email" name="email" onChange={inputEvent} autoCapitalize='off' />
                    <input type="number" id="" placeholder="enter your phone number" name="phone" onChange={inputEvent} />
                    <button >Click me</button>
                </div>
            </form>
        </>
    )
}
