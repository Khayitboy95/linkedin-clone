import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';

const Header = () => {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1611634529~hmac=35615bae35e677a89764a9666691b70b" alt=""/>
                <div className="header__search">
                    <SearchIcon />
                    <input type="text"/>
                </div>
            </div>
            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />   
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" /> 
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" /> 
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption title="me" avatar='https://avatars.githubusercontent.com/u/40865597?s=60&v=4' />
            </div>
        </div>
    )
}


export default Header;