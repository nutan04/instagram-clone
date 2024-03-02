import React from 'react'
import '../Header/header.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import HomeIcon from '@mui/icons-material/Home';
import TelegramIcon from '@mui/icons-material/Telegram';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import Brand  from '../../Assets/imgaes/instalogo.png'
function Header() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    console.log(showNavbar);
    return (
        <>
            <nav className="navbar">
                <div className="container">
                
                    <div className="logo_design">
                    <img src={Brand} alt="logo" className='logo' />
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>

                   {showNavbar ? <CancelIcon/> : <MenuIcon/>}
                        {/* <MenuOpenIcon/> */}
                    </div>
                    <div className='nav-elements'>
                        <ul className='mt-2'>

                            {/* <input type="search" placeholder='search' name="" id="" /> */}
                            <input type="search" placeholder="&#xF002;   Search" className='myComponent' />

                        </ul>
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <NavLink to="/"><HomeIcon/></NavLink>
                            </li>
                            <li>
                                <NavLink to="/message"><TelegramIcon/></NavLink>
                            </li>
                            <li>
                                <NavLink to="/add"><AddBoxOutlinedIcon/></NavLink>
                            </li>
                            <li>
                                <NavLink to="/explore"><ExploreOutlinedIcon/></NavLink>
                            </li>
                            <li>
                                <NavLink to="/userprofile"><FavoriteBorderOutlinedIcon/></NavLink>
                            </li>
                            <li>
                                <NavLink to="/myprofile"><img src={require('../../Assets/imgaes/profile.png')} alt="profile" className="profileimage" /></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header