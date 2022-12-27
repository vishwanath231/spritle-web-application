import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BigSquare from '../puzzle/BigSquare';
import './css/Home.css';

const HomeScreen = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('active')) {
            navigate('/login')
        }
    }, [navigate])
    

    return (
        <>
            <Navbar />
            <div className='home__cotnainer'>
                <h2>Slide Puzzle</h2>
            <header className="App-header">
                <BigSquare />
            </header>
            </div>
        </>
    )
}

export default HomeScreen;