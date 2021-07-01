import React from 'react';
import './Navbar.css'
import { NotificationsNone, MailOutline, Settings, HelpOutline, Language, Search } from '@material-ui/icons';
import admin from '../../assets/admin.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topLeft">
                    <Search className="SearchIcon" />
                    <input className="InputSearch" type="search" name="search" placeholder="search" id="" />
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">6</span>
                    </div>
                    <div className="topBarIconContainer">
                        <MailOutline />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Settings />
                    </div>
                    <div className="topBarIconContainer">
                        <HelpOutline />
                        <span className="topIconBadge">3</span>
                    </div>
                    <div className="topBarIconContainer">
                        <Language />
                    </div>
                    <div className="topAvatar">
                        <img src={admin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;