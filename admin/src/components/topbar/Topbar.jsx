import './Topbar.css'
import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { logoutUser } from '../../redux/apiCalls'
import { useDispatch } from 'react-redux';

const Topbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    //TODO fix navigation to login after logout
    const handleLogout = (e) => {
        e.preventDefault();
        logoutUser(dispatch);
        navigate('/login')
    }

    return (
        <div className='topbar-container'>
            <div className='topbar-wrapper'>

                <div className='topbar-left'>
                    <Link to={'/'}>
                        <p className='topbar-logo'>Admin Panel</p>
                    </Link>
                </div>

                <div className='topbar-center'>
                    <ul className='topbar-list'>
                        <Link to={'/'}><li className='topbar-list-item'>Home</li></Link>
                        <Link to={'/users'}><li className='topbar-list-item'>Users</li></Link>
                        <Link to={'/products'}><li className='topbar-list-item'>Products</li></Link>
                    </ul>
                </div>

                <div className='topbar-right'>
                    <p className='topbar-right-logout' onClick={handleLogout}>Logout</p>
                </div>

            </div>

        </div>
    )
}

export default Topbar
