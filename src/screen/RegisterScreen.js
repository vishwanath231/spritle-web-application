import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
import './css/Form.css';
import { BiHomeAlt } from 'react-icons/bi';
import Message from '../components/Message';
import emailjs from '@emailjs/browser';



const RegisterScreen = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
        cpassword: ''
    })

    const [msg, setMsg] = useState('')

    const form = useRef();

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
        } else if (data.password !== '') {
            setError('')
        } else if (data.cpassword !== ''){
            setError('')
        }
    }

    const submitHandler = e => {
        e.preventDefault();

        if (!data.email) {
            setError('Email required!')
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            setError('Email address is invalid!')
        } else if (!data.password) {
            setError('Password required!')
        } else if(!data.cpassword){
            setError('Confirm password required!')
        }else if(data.password !== data.cpassword){
            setError("Password doesn't match")
        }else{

            const store = {
                email: data.email,
                password: data.password
            }

            if (localStorage.getItem(`user_${data.email}`)) {
                setError('User already exists!')
                setData({
                    email: '',
                })
            } else {
                emailjs.sendForm('service_khfy6sf', 'template_3sh14rt', form.current, 'L24WbnUQVplLj1NEs')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                localStorage.setItem(`user_${data.email}`, JSON.stringify(store))
                setData({
                    email: '',
                    password: '',
                    cpassword: ''
                })

                // navigate('/')

                setMsg('check your mail box, confirm your account! and create your profile')

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
                <div className="register__logo">
                    <img src={LOGO} alt="logo" />
                </div>
                {error && <Message err msg={error} />}
                {msg && <Message suc msg={msg} />}
                <form ref={form}  className="form" onSubmit={submitHandler}>
                    <h2>Register</h2>
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
                    <div className="form__field">
                        <label htmlFor="cpassword" className='form__label'>Confirm Password <span>*</span></label>
                        <input
                            type="password"
                            id='cpassword'
                            name='cpassword'
                            onChange={changeHandler}
                            value={data.cpassword}
                            placeholder='*****'
                        />
                    </div>
                    <button type="submit" className='login__btn'>REGISTER</button>
                    <div className='form__link'>
                        You have an account!
                        <Link to='/login'> Login Here</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default RegisterScreen;