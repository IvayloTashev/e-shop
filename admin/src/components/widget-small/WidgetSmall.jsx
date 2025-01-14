import './WidgetSmall.css'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSmall = () => {
    return (
        <div className='widget-small-container'>
            <h2 className='widget-small-title'>New Join Members</h2>
            <ul className='widget-small-list'>
                <li className='widget-small-list-item'>
                    <img className='widget-small-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    <div className='widget-small-user-info'>
                        <p className='widget-small-name'>Brut Cosmos</p>
                        <p className='widget-small-job-title'>Fullstack Developer</p>
                    </div>
                    <button className='widget-small-btn'>
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className='widget-small-list-item'>
                    <img className='widget-small-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    <div className='widget-small-user-info'>
                        <p className='widget-small-name'>Brut Cosmos</p>
                        <p className='widget-small-job-title'>Fullstack Developer</p>
                    </div>
                    <button className='widget-small-btn'>
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className='widget-small-list-item'>
                    <img className='widget-small-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    <div className='widget-small-user-info'>
                        <p className='widget-small-name'>Brut Cosmos</p>
                        <p className='widget-small-job-title'>Fullstack Developer</p>
                    </div>
                    <button className='widget-small-btn'>
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className='widget-small-list-item'>
                    <img className='widget-small-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    <div className='widget-small-user-info'>
                        <p className='widget-small-name'>Brut Cosmos</p>
                        <p className='widget-small-job-title'>Fullstack Developer</p>
                    </div>
                    <button className='widget-small-btn'>
                        <VisibilityIcon />
                        Display
                    </button>
                </li>

                <li className='widget-small-list-item'>
                    <img className='widget-small-img' src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="avatar" />
                    <div className='widget-small-user-info'>
                        <p className='widget-small-name'>Brut Cosmos</p>
                        <p className='widget-small-job-title'>Fullstack Developer</p>
                    </div>
                    <button className='widget-small-btn'>
                        <VisibilityIcon />
                        Display
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default WidgetSmall
