import React from 'react';
import './WidgetsSm.css'
import { Visibility } from '@material-ui/icons';

const WidgetsSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Visiting Customer</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://pbs.twimg.com/profile_images/1047193607889870848/LEUniQP6_400x400.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUser">Rakibur Rahman</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://pbs.twimg.com/profile_images/1047193607889870848/LEUniQP6_400x400.jpg" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmName">Rakibur Rahman</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default WidgetsSm;