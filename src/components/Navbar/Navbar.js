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
            <IconContext.Provider value={{ color: '#f18805' }}>
                <div className="navbar">
                    <NavLink to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSideBar} />
                    </NavLink>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSideBar}>
                        <li className="navbar-toggle">
                            <button className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </button>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <NavLink to={item.path}>{item.icon}<span>{item.title}</span></NavLink>
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
