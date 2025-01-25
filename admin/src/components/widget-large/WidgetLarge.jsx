import './WidgetLarge.css'
import { userRequest } from '../../constants/requestMethods';
import React, { useEffect, useState } from 'react'
import { format } from 'timeago.js'

const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={`widget-large-btn ` + type}>{type}</button>;
    }

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await userRequest.get('orders');
            setOrders(res.data);
        })();
    }, []);

    return (
        <div className='widget-large-container'>
            <h2 className='widget-large-title'>Lastest Transactions</h2>
            <table className='widget-large-table'>
                <tr className='widget-large-tr'>
                    <th className='widget-large-th'>Customer</th>
                    <th className='widget-large-th'>Date</th>
                    <th className='widget-large-th'>Amount</th>
                    <th className='widget-large-th'>Status</th>
                </tr>
                {orders.map((order) => (
                    <tr className='widget-large-tr' key={order._id}>
                        <td className='widget-large-user-info'>
                            <p className='widget-large-name'>{order.userId}</p>
                        </td>
                        <td className='widget-large-date'>{format(order.createdAt)}</td>
                        <td className='widget-large-amount'>${order.amount}</td>
                        <td className='widget-large-status'><Button type={order.status} /></td>
                    </tr>
                ))}

            </table>
        </div>
    )
}

export default WidgetLarge
