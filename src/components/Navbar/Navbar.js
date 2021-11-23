import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Navbar.scss';
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar);
    return (
        <>
            <IconContext.Provider value={{ color: 'red' }}>
                <div className="navbar">
                    <NavLink to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </NavLink>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className="navbar-toggle">
                            <NavLink to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </NavLink>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <a href={item.path}>{item.icon}<span>{item.title}</span></a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
