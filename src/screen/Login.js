import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
import './css/Form.css';
import { BiHomeAlt } from 'react-icons/bi';

const Login = () => {
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
                    <form className="form">
                        <h2>Login</h2>
                        <div className="form__field">
                            <label htmlFor="email" className='form__label'>Email <span>*</span></label>
                            <input
                                type="email"
                                id='email'
                                name='email'
                                placeholder='example@support.com'
                            />
                        </div>
                        <div className="form__field">
                            <label htmlFor="password" className='form__label'>Password <span>*</span></label>
                            <input
                                type="password"
                                id='password'
                                name='password'
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

export default Login