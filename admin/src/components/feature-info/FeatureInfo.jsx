import './FeatureInfo.css'
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeatureInfo = () => {
    return (
        <div className='feature-info-container'>
            <div className='feature-info-item'>
                <p className='feature-info-title'>Revanue</p>
                <div className='feature-info-money-container'>
                    <p className='feature-money'>$2,35</p>
                    <p className='feature-money-rate'>-9.50 <ArrowDownwardIcon /></p>
                    <p className='feature-money-compare'>Compared to last month</p>
                </div>
            </div>

            <div className='feature-info-item'>
                <p className='feature-info-title'>Sales</p>
                <div className='feature-info-money-container'>
                    <p className='feature-money'>$4,25</p>
                    <p className='feature-money-rate'>-5.50 <ArrowDownwardIcon /></p>
                    <p className='feature-money-compare'>Compared to last month</p>
                </div>
            </div>

            <div className='feature-info-item'>
                <p className='feature-info-title'>Cost</p>
                <div className='feature-info-money-container'>
                    <p className='feature-money'>$1,10</p>
                    <p className='feature-money-rate'>+4.50 <ArrowUpwardIcon /></p>
                    <p className='feature-money-compare'>Compared to last month</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureInfo
