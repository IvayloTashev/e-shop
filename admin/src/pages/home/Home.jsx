import './Home.css'
import { dummyData } from '../../dummyData'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/feature-info/FeatureInfo'


import React from 'react'

const Home = () => {
    return (
        <div className='home-container'>
            <FeatureInfo />
            <Chart data={dummyData} title={"User Analytics"} dataKey={"Active User"} grid />
        </div>
    )
}

export default Home
