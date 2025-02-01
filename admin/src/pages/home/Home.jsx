import './Home.css'
import React, { useEffect, useState } from 'react'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/feature-info/FeatureInfo'
import WidgetSmall from '../../components/widget-small/WidgetSmall'
import WidgetLarge from '../../components/widget-large/WidgetLarge'
import { userRequest } from '../../constants/requestMethods'

const Home = () => {
    const [userStats, setUserStats] = useState([]);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    useEffect(() => {
        (async () => {
            try {
                const res = await userRequest.get('/users/stats');
                const stats = res.data.map((item) => ({
                    name: months[item._id - 1],
                    "Active User": item.total
                }));
                stats.sort((a, b) => months.indexOf(a.name) - months.indexOf(b.name));
                setUserStats(stats);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

        return (
            <div className='home-container'>
                <FeatureInfo />
                <Chart data={userStats} title={"User Analytics"} dataKey={"Active User"} grid />
                <div className='home-widgets'>
                    <WidgetSmall />
                    <WidgetLarge />
                </div>
            </div>
        )
    }

export default Home
