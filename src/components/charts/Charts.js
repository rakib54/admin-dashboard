import React from 'react';
import './Charts.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ data, dataKey, title }) => {

    return (
        <div className="charts">
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis dataKey="amt" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;