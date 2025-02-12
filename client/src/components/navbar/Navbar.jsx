import React from 'react'
import './Navbar.css'
import { Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Link } from "react-router";

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector((state) => state.user.currentUser);

    return (
        <div className='navbar-container'>

            <div className='navbar-wrapper'>

                <div className='navbar-left'>
                    <span className='language'>EN</span>
                    <div className='search-container'>
                        <input type="text" />
                        <Search style={{ color: "white", fontSize: 24, cursor: 'pointer' }} />
                    </div>
                </div>

                <div className='navbar-center'>
                    <div className='logo-container'>
                        <Link to={'/'}><h1>GGWP</h1></Link>
                    </div>
                </div>

                <div className='navbar-right'>

                    {user ? (
                        <>
                            <div className='navbar-logout-container'>
                                <p>Logout</p>
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
