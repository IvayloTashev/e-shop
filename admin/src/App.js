import './App.css';
import { Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/user-list/UserList';
import User from './pages/user/User';
import CreateUser from './pages/create-user/CreateUser';
import ProductsList from './pages/products-list/ProductsList';
import Product from './pages/product/Product';
import CreateProduct from './pages/create-product/CreateProduct';
import Login from './pages/login/Login';


function App() {
    const storedData = localStorage.getItem('persist:root');

    let admin = '';

    if (storedData) {
        const parsedData = JSON.parse(JSON.parse(storedData).user);

        if (parsedData.currentUser) {
            admin = parsedData.currentUser.accessToken;
        }
    }

    return (
        <div>
            {admin ? (
                <>
                    <Topbar />
                    <div className='app-container'>
                        <Routes>
                            <Route path='/' element={<Home />} />

                            <Route path='/users' element={<UserList />} />
                            <Route path='/user/:UserId' element={<User />} />
                            <Route path='/createUser' element={<CreateUser />} />

                            <Route path='/products' element={<ProductsList />} />
                            <Route path='/product/:productId' element={<Product />} />
                            <Route path='/createProduct' element={<CreateProduct />} />
                        </Routes>
                    </div>
                </>
            ) : (
                <>
                    <Routes>
                        <Route path='/login' element={<Login />} />
                        <Route path='*' element={<Login />} />
                    </Routes>
                </>
            )}
        </div>
    );
}

export default App;
