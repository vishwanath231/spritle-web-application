import React from 'react'
import Login from './screen/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './screen/Landing';
import Register from './screen/Register';
import Home from './screen/Home';
import './App.css';
import About from './screen/About';
import ProfileForm from './screen/ProfileForm';
import ProfileScreen from './screen/ProfileScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing /> } />
                <Route path='/about' element={<About /> } />
                <Route path='/login' element={<Login /> } />
                <Route path='/register' element={<Register /> } />
                <Route path='/profile' element={<ProfileScreen /> } />
                <Route path='/user' element={<ProfileForm /> } />
                <Route path='/home' element={<Home /> } />
            </Routes>
        
        </BrowserRouter>
    )
}

export default App;