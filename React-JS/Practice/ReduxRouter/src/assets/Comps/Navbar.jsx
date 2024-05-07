import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import AllProduct from './AllProduct'

export default function Navbar() {
    const navStyle = {
        padding: "1rem",
        backgroundColor: "grey"
    }
    const ulStyle = {

    }
    const liStyle = {
        listStyle: "none",
        margin: "2rem", display: "inline-block",
    }
    const aStyle = {
        textDecoration: "none",
        color: "black"
    }
    const myStyle = ({ isActive }) => {
        return {
            color: isActive ? "blue" : "black",
            backgroundColor : isActive ? "skyblue":"gray"
        }
    }
    return (
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}><NavLink style={myStyle} to='/AllProduct'>AllProduct</NavLink></li>
                <li style={liStyle}><NavLink style={myStyle} to='/Pro1'>Pro1</NavLink></li>
                <li style={liStyle}><NavLink style={myStyle} to='/Pro2'>Pro2</NavLink></li>

            </ul>
        </nav>
    )
}
