import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
import './css/Form.css';
import { BiHomeAlt } from 'react-icons/bi';
import Message from '../components/Message';

const LoginScreen = () => {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('active')) {
            navigate('/home')
        }
    }, [navigate])

    const changeHandler = e => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })

        if (data.email !== '') {
            setError('')
        }else if (data.password !== '') {
            setError('')
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        if (!data.email) {
            setError('Email required!')
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
            setError('Email address is invalid!')
        }else if(!data.password){
            setError('Password required!')
        }else{
            
            const user = JSON.parse(localStorage.getItem(`user_${data.email}`))
            
            if (user?.email !== data.email) {
                setError('Email invalid!')
            }else if (user?.password !== data.password) {
                setError('Password invalid!')
            }else{
                
                localStorage.setItem('active', JSON.stringify(data.email))
                
                navigate('/home') 
            }
        }
    }


    
    return (
        <>
            <div className='form__home'>
                <Link to='/' className='returnHome__btn'> <BiHomeAlt />&nbsp;Home</Link>
            </div>
            <div className='form__container'>
                <div className='form__box'>
                    <div className="login__logo">
                        <img src={LOGO} alt="logo" />
                    </div>
                    {error && <Message err msg={error} />}
                    <form className="form" onSubmit={submitHandler}>
                        <h2>Login</h2>
                        <div className="form__field">
                            <label htmlFor="email" className='form__label'>Email <span>*</span></label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                onChange={changeHandler}
                                value={data.email}
                                placeholder='example@support.com'
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="password" className='form__label'>Password <span>*</span></label>
                            <input
                                type="password"
                                id='password'
                                name='password'
                                onChange={changeHandler}
                                value={data.password}
                                placeholder='*****'
                            />
                        </div>
                        <button type="submit" className='login__btn'>Login</button>
                        <div className='form__link'>
                            You don't have an account!
                            <Link to='/register'> SignUp Here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginScreen;