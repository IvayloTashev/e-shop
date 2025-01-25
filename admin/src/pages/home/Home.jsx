import './Home.css'
import React, { useEffect, useMemo, useState } from 'react'
import { dummyData } from '../../dummyData'
import Chart from '../../components/chart/Chart'
import FeatureInfo from '../../components/feature-info/FeatureInfo'
import WidgetSmall from '../../components/widget-small/WidgetSmall'
import WidgetLarge from '../../components/widget-large/WidgetLarge'
import { userRequest } from '../../constants/requestMethods'

const Home = () => {
    //TODO its not working properly
    // const [userStats, setUserStats] = useState([]);

    // const months = useMemo(
    //     () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // );

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const res = await userRequest.get('/users/stats');
    //             res.data.map((item) =>
    //                 setUserStats((prev) => [
    //                     ...prev,
    //                     { name: months[item._id - 1], "Active User": item.total }
    //                 ]))
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     })();
    // }, [])

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
