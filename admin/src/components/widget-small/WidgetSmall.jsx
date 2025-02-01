import './WidgetSmall.css'
import React, { useEffect, useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { userRequest } from '../../constants/requestMethods';
import { Link } from 'react-router-dom';

const WidgetSmall = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await userRequest.get('users/?new=true');
            setUsers(res.data);
        })();
    }, []);

    return (
        <div className='widget-small-container'>
            <h2 className='widget-small-title'>New Join Members</h2>
            <ul className='widget-small-list'>
                {users.map((user) => (
                    <li className='widget-small-list-item' key={user._id}>
                        <img className='widget-small-img' src={user.image || "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg"} alt="avatar" />
                        <div className='widget-small-user-info'>
                            <p className='widget-small-name'>{user.username}</p>
                            <p className='widget-small-job-title'>{user.email}</p>
                        </div>
                        <Link to={`/user/${user._id}`}>
                            <button className='widget-small-btn'>
                                <VisibilityIcon />
                                Display
                            </button>
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default WidgetSmall
