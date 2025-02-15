import React from 'react'
import './Navbar.css'
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router";
import { logout } from '../../redux/apiCalls';

const Navbar = () => {
    const dispatch = useDispatch();
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);

    const hanldeLogout = (e) => {
        e.preventDefault();
        logout(dispatch);
    }

    return (
        <div className='navbar-container'>

            <div className='navbar-wrapper'>

                <div className='navbar-left'>
                    <div className='logo-container'>
                        <Link to={'/'}><h1>GGWP</h1></Link>
                    </div>
                </div>

                <div className='navbar-center'>
                    <div className='navbar-dropdown-menu'>
                        <button className='navbar-dropdown-btn'>
                            Categories<span><ArrowDropDownIcon /></span>
                        </button>
                        <div className='navbar-dropdown-content'>
                            <Link to={'/products/headset'}><p className='dropdown-item'>Headset</p></Link>
                            <Link to={'/products/keyboard'}><p className='dropdown-item'>Keyboard</p></Link>
                            <Link to={'/products/mouse'}><p className='dropdown-item'>Mice</p></Link>
                            <Link to={'/products/mousepad'}><p className='dropdown-item'>Mousepad</p></Link>
                        </div>
                    </div>
                </div>
                <div className='navbar-right'>

                    {user ? (
                        <>
                            <div className='navbar-logout-container'>
                                <p onClick={hanldeLogout}>Logout</p>
                            </div>
                            <div className='navbar-cart-container'>
                                <Link to={'/cart'}>
                                    <Badge badgeContent={quantity} color="secondary">
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='navbar-register-container'>
                                <Link to={'/register'}>Register</Link>
                            </div>

                            <div className='navbar-login-container'>
                                <Link to={'/login'}>Sing in</Link>
                            </div>
                        </>
                    )}
                </div>

            </div>

        </div>
    )
}

export default Navbar
