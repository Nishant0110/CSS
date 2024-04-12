import React from 'react'
import { data } from "../Data.js"

export default function Hero() {
    const { hero } = data;
    return (
        <section className=''>
            <div>
                {hero.map((item, i) => (
                    <img className='w-[100%]' key={`hero-img-${i}`} src={item.bgimage} alt="" />
                ))}
            </div>
            <div className='w-full'>
                {hero.map((item, i) => (<div>
                    <p className='absolute top-[50%]  right-[27%] text-7xl font-semibold'>{item.content1}</p>
                    <p className='absolute top-[60%]  right-[36.3%] text-7xl font-semibold'>{item.content2} <span className='absolute top-[60%] mx-4 text-[#377dff]'> {item.spancontent}</span></p>
                    <p className='absolute top-[70%]  right-[18.5%] text-7xl font-semibold'>{item.content3}</p>
                </div>))}
            </div>
        </section>
    )
}
