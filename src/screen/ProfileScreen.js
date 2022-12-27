import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './css/Profile.css';

const ProfileScreen = () => {

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem('active'));
    const profile = JSON.parse(localStorage.getItem(`profile_${user}`));

    useEffect(() => {
        if (!profile?.username) {
            navigate('/')
        }
    }, [profile, navigate])
    

    return (
        <>
            <Navbar />
            <div className='profile__container'>
                <div className='activeProfile__box'>
                    <div className='profile__image'>
                        <img src={profile?.profile} alt="profile" />
                    </div>
                    <h2>{profile?.username}</h2>
                    <div className='profile__grid'>
                        <div className='profile__boxx'>
                            <div><span>Email :</span> {profile?.email}</div>
                            <div><span>Phone No :</span> {profile?.phone_no}</div>
                            <div><span>Date of Birth :</span> {profile?.birth_date}</div>
                        </div>
                        <div className='profile__boxx'>
                            <div><span>City :</span> {profile?.city}</div>
                            <div><span>District :</span> {profile?.district}</div>
                            <div><span>Pincode :</span> {profile?.pincode}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileScreen