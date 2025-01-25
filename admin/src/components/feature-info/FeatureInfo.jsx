import './FeatureInfo.css'
import React, { useEffect, useState } from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { userRequest } from '../../constants/requestMethods';

const FeatureInfo = () => {
    const [income, setIncome] = useState([]);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const res = await userRequest.get('orders/income');
                const sortedData = res.data.sort((a, b) => a._id - b._id);
                setIncome(sortedData);

                if (sortedData.length >= 2 && sortedData[0].total !== 0) {
                    setPercentage((sortedData[0].total * 100) / sortedData[1].total - 100);
                } else {
                    setPercentage(0)
                }
            } catch (err) {
                console.error('Error fetching income data:', err);
            }
        })();
    }, []);

    console.log(income);
    

    return (
        <div className='feature-info-container'>
            <div className='feature-info-item'>
                <p className='feature-info-title'>Revanue</p>
                <div className='feature-info-money-container'>
                    <p className='feature-money'>${income[0]?.total}</p>
                    <p className='feature-money-rate'>%{(percentage).toFixed(2)}
                        {percentage < 0 ? (<ArrowDownwardIcon className='negative-arrow' />) : (<ArrowUpwardIcon className='positive-arrow'/>)}
                    </p>
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
