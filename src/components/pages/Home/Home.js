import React from 'react';
import Features from '../../Features/Features';
import Charts from '../../charts/Charts';
import WidgetLg from '../../WidgetLg/WidgetLg';
import WidgetsSm from '../../widgetsSm/WidgetsSm';
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <Features />
            <Charts />
            <div className="homeWidgets">
                <WidgetsSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;