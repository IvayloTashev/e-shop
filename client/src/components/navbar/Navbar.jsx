import React from 'react'
import './Navbar.css'
import { Search } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);

    console.log(quantity);
    

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
                        <Badge badgeContent={quantity} color="secondary">
                            <ShoppingCartIcon />
                        </Badge>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar
