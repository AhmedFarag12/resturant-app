import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute} from './SidebarElements'

const Sidebar = ({isOpen , Toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={Toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
