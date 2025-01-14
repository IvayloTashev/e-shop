import './Home.css'
import { dummyData } from '../../dummyData'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/feature-info/FeatureInfo'


import React from 'react'
import WidgetSmall from '../../components/widget-small/WidgetSmall'
import WidgetLarge from '../../components/widget-large/WidgetLarge'

const Home = () => {
    return (
        <div className='home-container'>
            <FeatureInfo />
            <Chart data={dummyData} title={"User Analytics"} dataKey={"Active User"} grid />
            <div className='home-widgets'>
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
