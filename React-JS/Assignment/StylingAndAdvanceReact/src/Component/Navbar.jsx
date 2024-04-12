import React from 'react'
import { data } from "../Data.js"

export default function Navbar() {
    const { nav } = data;

    return (
        <nav className='w-[100%] flex justify-between items-center px-9 py-5 bg-[#ffcb5e]'>
            <div>
                {
                    nav.map((itemname, i) => (
                        <img key={i} src={itemname.imglogo} alt="" />
                    )
                    )}
            </div>

            <div>
                {
                    nav.map((itemname, i) => (
                        <a href="#" key={i} className='mx-3 text-2xl font-medium'>{itemname.link}</a>
                    )
                    )}
            </div>

            <div >
                {nav.map((item, i) => (
                    <div key={i} className='inline-block mx-5'>
                        {item.icon && <item.icon className='text-2xl' />}</div>
                )
                )}
            </div>
        </nav>
    )
}
