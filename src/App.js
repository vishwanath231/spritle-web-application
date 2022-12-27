import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutScreen from './screen/AboutScreen';
import HomeScreen from './screen/HomeScreen';
import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import ProfileFormScreen from './screen/ProfileFormScreen';
import RegisterScreen from './screen/RegisterScreen';
import ProfileScreen from './screen/ProfileScreen';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingScreen /> } />
                <Route path='/about' element={<AboutScreen /> } />
                <Route path='/login' element={<LoginScreen /> } />
                <Route path='/register' element={<RegisterScreen /> } />
                <Route path='/profile' element={ <ProfileScreen /> } />
                <Route path='/user' element={<ProfileFormScreen /> } />
                <Route path='/home' element={<HomeScreen /> } />
            </Routes>
        
        </BrowserRouter>
    )
}

export default App;