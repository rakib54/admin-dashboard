import React from 'react';
import './WidgetLg.css'

const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img className="widgetLgImg" src="https://pbs.twimg.com/profile_images/1047193607889870848/LEUniQP6_400x400.jpg" alt="" />
                        <span className="widgetLgName">Rakibur Rahman</span>
                    </td>
                    <td className="widgetLgDate">7 july 2021</td>
                    <td className="widgetLgAmount">12000</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img className="widgetLgImg" src="https://pbs.twimg.com/profile_images/1047193607889870848/LEUniQP6_400x400.jpg" alt="" />
                        <span className="widgetLgName">Tamim Iqbal</span>
                    </td>
                    <td className="widgetLgDate">10 july 2021</td>
                    <td className="widgetLgAmount">32000</td>
                    <td className="widgetLgStatus">
                        <Button type="Decline" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetUser">
                        <img className="widgetLgImg" src="https://pbs.twimg.com/profile_images/1047193607889870848/LEUniQP6_400x400.jpg" alt="" />
                        <span className="widgetLgName">Shakib Al Hasan</span>
                    </td>
                    <td className="widgetLgDate">12 july 2021</td>
                    <td className="widgetLgAmount">22000</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>                
            </table>
        </div>
    );
};

export default WidgetLg;