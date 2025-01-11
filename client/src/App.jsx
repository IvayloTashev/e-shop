import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Catalog from './pages/catalog/Catalog';
import Details from './pages/details/Details';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Cart from './pages/cart/Cart';
import { useSelector } from "react-redux";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />

            <Route path="/products/:categories" element={<Catalog />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />

        </Routes>

    )
};

export default App;