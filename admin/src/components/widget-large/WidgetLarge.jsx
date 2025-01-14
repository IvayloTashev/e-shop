import './WidgetLarge.css'
import React from 'react'

const WidgetLarge = () => {

    const Button = ({type}) => {
        return <button className={`widget-large-btn ` + type}>{type}</button>;
    }

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

                <tr className='widget-large-tr'>
                    <td className='widget-large-user-info'>
                        <img className='widget-large-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <p className='widget-large-name'>Brut Cosmos</p>
                    </td>
                    <td className='widget-large-date'>4 Jan 2022</td>
                    <td className='widget-large-amount'>$69.00</td>
                    <td className='widget-large-status'><Button type='Approved' /></td>
                </tr>

                <tr className='widget-large-tr'>
                    <td className='widget-large-user-info'>
                        <img className='widget-large-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <p className='widget-large-name'>Brut Cosmos</p>
                    </td>
                    <td className='widget-large-date'>4 Jan 2022</td>
                    <td className='widget-large-amount'>$69.00</td>
                    <td className='widget-large-status'><Button type='Pending' /></td>
                </tr>

                <tr className='widget-large-tr'>
                    <td className='widget-large-user-info'>
                        <img className='widget-large-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <p className='widget-large-name'>Brut Cosmos</p>
                    </td>
                    <td className='widget-large-date'>4 Jan 2022</td>
                    <td className='widget-large-amount'>$69.00</td>
                    <td className='widget-large-status'><Button type='Declined' /></td>
                </tr>

                
                <tr className='widget-large-tr'>
                    <td className='widget-large-user-info'>
                        <img className='widget-large-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                        <p className='widget-large-name'>Brut Cosmos</p>
                    </td>
                    <td className='widget-large-date'>4 Jan 2022</td>
                    <td className='widget-large-amount'>$69.00</td>
                    <td className='widget-large-status'><Button type='Declined' /></td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge
