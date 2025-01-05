import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import Details from './pages/details/Details';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/products/:categories" element={<Catalog />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            
        </Routes>

    )
};

export default App;