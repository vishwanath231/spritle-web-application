import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LOGO from '../assets/img/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleClick = () => setClick(!click);


    const navigate = useNavigate()

    const handelScroll = () => {

        const offset = window.scrollY;
        if (offset > 20) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }


    useEffect(() => {

        window.addEventListener('scroll', handelScroll);
    }, [])

    const user =JSON.parse(localStorage.getItem('active'));
    const profile = JSON.parse(localStorage.getItem(`profile_${user}`));


    const logoutHandler = () => {
        localStorage.removeItem('active')
        window.location.href='/'
        window.location.reload(false);
        
    }


    return (
        <>
            <NavContainer>
                <nav className={scrolled ? "nav scroll" : "nav"}>
                    <div className="navbar">
                        <Link to='/'>
                            <Logo>
                                <img src={LOGO} alt="logo" />
                            </Logo>
                        </Link>
                        <ul className={click ? "nav__menu active" : "nav__menu"}>
                            <li><Link to="/">Landing</Link></li>
                            {user ? <li><Link to="/home">Home</Link></li> : null}
                            <li><Link to="/about">About</Link></li>
                            {profile ? <li><Link to="/profile">Profile</Link></li> : null}
                            {user ? <li><button onClick={logoutHandler} className='login__btn'>Logout</button></li> : <li><Link to="/Login" className='login__btn'>Login</Link></li>}
                        </ul>
                        <MenuBar onClick={handleClick}>
                            <div className={click ? "hamburger open" : "hamburger"}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </MenuBar>
                    </div>
                </nav>
            </NavContainer>
            <Mobile onClick={handleClick}>
                <div className={click ? "mobile__menu-list active" : "mobile__menu-list"}>
                    <ul>
                        <li><Link to="/">Landing</Link></li>
                        {user ? <li><Link to="/home" className='login__btn'>Home</Link></li> : null}
                        <li><Link to="/about">About</Link></li>
                        {profile ? <li><Link to="/profile">Profile</Link></li> : null}
                        {user ? <li><button onClick={logoutHandler} className='mobileLogin__btn'>Logout</button></li> : <li><Link to="/Login" className='mobileLogin__btn'>Login</Link></li>}
                    </ul>
                </div>
            </Mobile>

        </>
    )
}

export default Navbar;



const NavContainer = styled.div`
    
    .nav{
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 999;
        background: #fff;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        @media(max-width:920px){
            z-index:9999;
        }
    }

    @media(min-width:920px){
        .nav.scroll{
            background: #f2f2f2;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

            a{
                color:#000;
                transition: all .6s ease;
                scroll-behavior: smooth;

                &:hover{
                    color:#cb966a;
                }
            }
        }
    }
    .navbar{
        max-width: 1140px;
        margin: 0 auto;
        padding:15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    .nav__menu {
        display: flex;
        align-items: center;

        li{
            list-style: none;
            margin-left:20px;

            .login__btn{
                background: #000;
                color: #fff;
                padding: .7rem 1rem;
                border-radius: 5px;
                border: none;
                outline: none;
                cursor: pointer;

                &:hover{
                    color: #fff;
                }
            }

            a {
                text-decoration: none;
                color: #000;
                transition: all .6s ease;

                &:hover{
                    color:red;
                }
            }
        }


        @media(max-width:920px){
            display: none;
        }
    }

    
`;

const Logo = styled.div`

    img{
        width: 50px;
        display: block;

        @media(min-width:920px){
            width: 50px;
            display: block;
        }
    }
`;


const MenuBar = styled.div`
    display: none;
    
    .hamburger {
        position: relative;
        width: 27px;
        height: 22px;
        cursor: pointer;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
    }

    .hamburger span {
        position: absolute;
        width: 100%;
        height: 2px;
        right: 4px;
        background: #000;
        border-radius: 6px;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }



    .hamburger span:nth-child(1) {
        top: 0;
    }

    .hamburger span:nth-child(2),
    .hamburger span:nth-child(3) {
        top: 8px;
    }

    .hamburger span:nth-child(4) {
        top: 16px;
    }

    .hamburger.open span:nth-child(1) {
        top: 10px;
        opacity: 0;
    }

    .hamburger.open span:nth-child(2) {
        transform: rotate(45deg);
    }

    .hamburger.open span:nth-child(3) {
        transform: rotate(-45deg);
    }

    .hamburger.open span:nth-child(4) {
        top: 10px;
        opacity: 0;
    }

    @media(max-width:920px){
        display: block;
        padding: 1rem;
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 55px;
    }


`;



const Mobile = styled.div`
    
    .mobile__menu-list{
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #f4f4f4;
        z-index: 999;
        display: none;
    }

    .mobile__menu-list ul {
        list-style:none;
        padding: 5rem 10px 0 10px;
        text-align: left;
    }

    .mobile__menu-list ul li {
        margin: 3rem 0;

        .mobileLogin__btn{
            background: #000;
            color: #fff;
            font-size: 1.1rem;
            padding: .7rem 1rem;
            width:100%;
            border-radius:5px;
            border: none;
            cursor: pointer;

            &:hover{
                background: lightgray;
                color: #000;
            }
        }
    }

    
    .mobile__menu-list ul li a {
        font-size: 1.2rem;
        font-weight: 400;
        color: #000;
        text-transform: uppercase;
        text-decoration: none;
    }
    .mobile__menu-list ul li a:hover{
        color: crimson;
    }

    

 
    @media(max-width:920px){
        .mobile__menu-list.active{
            display: block;
        }
    }
`;