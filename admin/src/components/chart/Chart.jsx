import './Chart.css'
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ title, data, dataKey, grid }) => {
    return (
        <div className='chart-container'>
            <div className='chart'>
                <h2 className='chart-title'>{title}</h2>
                <ResponsiveContainer width="100%" aspect={8 / 1}>
                    <LineChart data={data}>
                        <XAxis dataKey={"name"} stroke='#5a5ad1' />
                        <Line type="monotone" dataKey={dataKey} stroke='#5a5ad1' />
                        <Tooltip />
                        {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
