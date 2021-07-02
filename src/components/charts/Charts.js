import React from 'react';
import './Charts.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = () => {
    const data = [
        {
            name: 'Jan',
            sales: 20000,
            pv: 2400,
            amt: 24000,
        },
        {
            name: 'Feb',
            sales: 30000,
            pv: 1398,
            amt: 22100,
        },
        {
            name: 'Mar',
            sales: 20000,
            pv: 9800,
            amt: 22900,
        },
        {
            name: 'Apr',
            sales: 27800,
            pv: 3908,
            amt: 20000,
        },
        {
            name: 'May',
            sales: 18900,
            pv: 4800,
            amt: 21810,
        },
        {
            name: 'June',
            sales: 23900,
            pv: 3800,
            amt: 25000,
        },
        {
            name: 'July',
            sales: 34900,
            pv: 4300,
            amt: 21000,
        },
        {
            name: 'Aug',
            sales: 39000,
            pv: 4300,
            amt: 50000,
        },
        {
            name: 'Sep',
            sales: 12130,
            pv: 4300,
            amt: 21000,
        },
        {
            name: 'Oct',
            sales: 41000,
            pv: 4300,
            amt: 21000,
        },
        {
            name: 'Nov',
            sales: 23430,
            pv: 4300,
            amt: 23430,
        },
        {
            name: 'Dec',
            sales: 40000,
            pv: 4300,
            amt: 20000,
        },
    ];
    return (
        <div className="charts">
            <h3 className="chart-title">Revenue</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <YAxis dataKey="amt" />
                    <Line type="monotone" dataKey="sales" stroke="#5550bd" />
                    <Tooltip />
                    <CartesianGrid strokeDasharray="5 5" />
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Charts;