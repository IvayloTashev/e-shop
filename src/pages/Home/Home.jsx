import React from 'react'
import './Home.css'

import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'

const Home = () => {
    return (
        <div className='main-container'>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home

