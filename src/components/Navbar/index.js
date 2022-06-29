import React from 'react'
import {Nav , NavIcon, NavLink ,Bars} from "./NavbarElements";

const Navbar = ({Toggle}) => {
    return (
        <>
            <Nav>
            <NavLink to="/" >Pizza</NavLink>
            <NavIcon onClick={Toggle}>
                <p>Menu</p>
                <Bars />
            </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
