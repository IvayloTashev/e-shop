import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import UserList from './pages/user-list/UserList';


function App() {
    return (
        <div>
            <Topbar />

            <div className='app-container'>
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<UserList />} />
                </Routes>

            </div>

        </div>
    );
}

export default App;
