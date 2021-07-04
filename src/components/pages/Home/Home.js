import React from 'react';
import Features from '../../Features/Features';
import Charts from '../../charts/Charts';
import WidgetLg from '../../WidgetLg/WidgetLg';
import WidgetsSm from '../../widgetsSm/WidgetsSm';
import './Home.css'
import { data } from '../../FakeData/FakeData';

const Home = () => {
    return (
        <div className="home">
            <Features />
            <Charts data={data} dataKey="sales" title="Revenue" />
            <div className="homeWidgets">
                <WidgetsSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;