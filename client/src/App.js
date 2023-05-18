import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import UserProvider from './contexts/UserProvider';
import DataTagProvider from './contexts/DataTagContext';
import './styles/App.scss';

function App() {
  return (
    <div className='react-root'>
      <BrowserRouter>
        <Navbar />
        <UserProvider>
          <DataTagProvider>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/About' element={<About />}/>
              <Route path='/Login' element={<Login />}/>
              <Route path='/Profile' element={<Profile />}/>      
            </Routes>
          </DataTagProvider>
        </UserProvider>
      </BrowserRouter>
    </div>  
  );
}

export default App;