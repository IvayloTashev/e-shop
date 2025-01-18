import './App.css';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/user-list/UserList';
import User from './pages/user/User';
import CreateUser from './pages/create-user/CreateUser';
import ProductsList from './pages/products-list/ProductsList';


function App() {
    return (
        <div>
            <Topbar />

            <div className='app-container'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/users' element={<UserList />} />
                    <Route path='/user/:UserId' element={<User />} />
                    <Route path='/createUser' element={<CreateUser />} />

                    <Route path='/products' element={<ProductsList />} />
                    <Route path='/product:/productId' element={<ProductsList />} />
                    <Route path='/createProduct' element={<ProductsList />} />
                </Routes>

            </div>

        </div>
    );
}

export default App;
