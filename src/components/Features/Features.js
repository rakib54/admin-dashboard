import React from 'react';
import './Feature.css'
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

const Features = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featureTitle">7,438</span>
                <div className="featureContainer">
                    <span className="featureOrders">Order</span>
                </div>
                <div className="featureMoney">
                    <span style={{color:'green'}} className="featureRate"><ArrowUpward className="featureIcon" />25%</span>
                    <span className="featureSubtitle">Since last week</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">$28,947</span>
                <div className="featureContainer">
                    <span className="featureOrders">Revenue</span>
                </div>
                <div className="featureMoney">
                    <span style={{color:'green'}} className="featureRate"><ArrowUpward className="featureIcon" />25%</span>
                    <span className="featureSubtitle">Since last week</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">$3,241</span>
                <div className="featureContainer">
                    <span className="featureOrders">Avg order value</span>
                </div>
                <div className="featureMoney">
                    <span style={{color:'red'}} className="featureRate"><ArrowDownward className="featureIcon negative" />-11.2%</span>
                    <span className="featureSubtitle">Since last week</span>
                </div>
            </div>
            <div className="featuredItem">
                <span className="featureTitle">45.2K</span>
                <div className="featureContainer">
                    <span className="featureOrders">Unique visitors</span>
                </div>
                <div className="featureMoney">
                    <span style={{color:'green'}} className="featureRate"><ArrowUpward className="featureIcon" />12.3%</span>
                    <span className="featureSubtitle">Since last week</span>
                </div>
            </div>

        </div>
    );
};

export default Features;