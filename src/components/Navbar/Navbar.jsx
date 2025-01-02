import React from 'react'
import './Navbar.css'
import { Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <div className='navbar-container'>

            <div className='navbar-wrapper'>

                <div className='navbar-left'>
                    <span className='language'>EN</span>
                    <div className='search-container'>
                        <input type="text" />
                        <Search style={{ color: "grey", fontSize: 20 }} />
                    </div>
                </div>

                <div className='navbar-center'>
                    <div className='logo-container'>
                        <h1>GGWP</h1>
                    </div>
                </div>

                <div className='navbar-right'>
                    <div className='navbar-register-container'>
                        Register
                    </div>

                    <div className='navbar-login-container'>
                        Sing in
                    </div>

                    <div className='navbar-cart-container'>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
