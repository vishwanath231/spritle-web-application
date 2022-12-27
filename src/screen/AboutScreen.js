import React from 'react';
import Navbar from '../components/Navbar';
import IMG from '../assets/img/profile.jpg';
import './css/About.css';
import { AiFillGithub, AiFillLinkedin,  } from 'react-icons/ai'
import { FaHackerrank } from 'react-icons/fa'

const AboutScreen = () => {
    return (
        <div>
            <Navbar />
            <div className='profile__container'>
                <h2 className='profile__about'>ABOUT</h2>
                <div className='profile__box'>
                    <div className='profile__img'>
                        <img src={IMG} alt="vishwanath" />
                    </div>
                    <div className='profile__content'>
                        <h2>I'm Vishwanath A</h2>
                        <h4>Web Developer (Fresher) </h4>
                        <p>
                            Web Developer with a passion for web application development and success in managing development projects. I am skilled in conceptualizing, designing, developing, and deploying software containing logical and mathematical solutions to business problems. I am dedicated to driving innovation to follow industry and technological trends and facilitate the early adoption of innovations.
                        </p>
                        <br />
                        <div className='skills'>
                            <span>Skills</span>
                            <div className='skills__list'>
                                <div className='skill'>JavaScript</div>
                                <div className='skill'>React.js</div>
                                <div className='skill'>Node.js</div>
                                <div className='skill'>MongoDB</div>
                                <div className='skill'>Express.js</div>
                                <div className='skill'>PHP</div>
                                <div className='skill'>MySQL</div>
                                <div className='skill'>Docker</div>
                            </div>
                        </div>
                        <br />
                        <div>
                            <span>Email: </span> <a href="mailto: vishwanatharuchunan@gmail.com">vishwanatharuchunan@gmail.com</a>
                        </div>
                        <br />
                        <div>
                            <span>Phone: </span> <a href="tel:+916385213119">(+91) 6385213119</a>
                        </div>
                        <div className='profile__social'>
                            <a href='https://github.com/vishwanath231' target='_blank' rel='noreferrer' className='icon'>
                                <AiFillGithub />
                            </a>
                            <a href='https://www.linkedin.com/in/vishwanath231/' target='_blank' rel='noreferrer' className='icon'>
                                <AiFillLinkedin />
                            </a>
                            <a href='https://www.hackerrank.com/vishwanath231?hr_r=1' target='_blank' rel='noreferrer' className='icon'>
                                <FaHackerrank />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutScreen;