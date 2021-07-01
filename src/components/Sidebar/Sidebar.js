import React from 'react';
import './Sidebar.css'
import { Home, ChatBubbleOutline, Email, ShoppingCart, DateRange, Person, Pages,Apps,Equalizer,TableChart,Map,FormatAlignJustify } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList ">
                        <li className="sidebarListItem active">
                            <Home className="sidebarIcon" />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Email className="sidebarIcon" />email
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutline className="sidebarIcon" />Chat
                        </li>
                        <li className="sidebarListItem">
                            <ShoppingCart className="sidebarIcon" /> eCommerce
                        </li>
                        <li className="sidebarListItem">
                            <DateRange className="sidebarIcon" />Calender
                        </li>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon" />Profile
                        </li>
                        <li className="sidebarListItem">
                            <Pages className="sidebarIcon" />Page
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Components</h3>
                    <ul className="sidebarList ">
                        <li className="sidebarListItem">
                            <Apps className="sidebarIcon" />
                            Icons
                        </li>
                        <li className="sidebarListItem">
                            <Equalizer className="sidebarIcon" />Charts
                        </li>
                        <li className="sidebarListItem">
                            <TableChart className="sidebarIcon" />Table
                        </li>
                        <li className="sidebarListItem">
                            <FormatAlignJustify className="sidebarIcon" />Form
                        </li>
                        <li className="sidebarListItem">
                            <Map className="sidebarIcon" />Maps
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;