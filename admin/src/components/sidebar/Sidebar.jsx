import './Sidebar.css'
import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmailIcon from '@mui/icons-material/Email';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import WorkIcon from '@mui/icons-material/Work';
import ReportIcon from '@mui/icons-material/Report';


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'><LineStyleIcon />Home</li>
                        <li className='sidebar-list-item'><TimelineIcon />Analytics</li>
                        <li className='sidebar-list-item'><TrendingUpIcon />Sales</li>
                    </ul>
                </div>
            </div>

            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Quick Menu</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'><PersonIcon />Users</li>
                        <li className='sidebar-list-item'><StorefrontIcon />Products</li>
                        <li className='sidebar-list-item'><AttachMoneyIcon />Transactions</li>
                        <li className='sidebar-list-item'><EqualizerIcon />Reports</li>
                    </ul>
                </div>
            </div>

            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Notifications</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'><EmailIcon />Mail</li>
                        <li className='sidebar-list-item'><DynamicFeedIcon />Feedback</li>
                        <li className='sidebar-list-item'><MessageIcon />Messages</li>
                    </ul>
                </div>
            </div>

            <div className='sidebar-wrapper'>
                <div className='sidebar-menu'>
                    <h3 className='sidebar-title'>Staff</h3>
                    <ul className='sidebar-list'>
                        <li className='sidebar-list-item'><WorkIcon />Manage</li>
                        <li className='sidebar-list-item'><TimelineIcon />Analytics</li>
                        <li className='sidebar-list-item'><ReportIcon />Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
