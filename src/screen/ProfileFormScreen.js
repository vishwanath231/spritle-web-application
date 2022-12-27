import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/img/logo.png';
import './css/Form.css';
import { BiHomeAlt } from 'react-icons/bi';
import Placeholder from '../assets/img/Placeholder.png';
import './css/ProfileForm.css';
import useProfile from '../hooks/useProfile';



const ProfileFormScreen = () => {

    const {
        step,
        stepOneCheck,
        stepTwoCheck,
        stepThreeCheck,
        prevStep,
        progress,
        handleProfileClick,
        handleProfile,
        handleSubmit,
        handleChange,
        values,
        errors,
        check
    } = useProfile()

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
                    <form className="form">
                        <div className='progress__bar'><span>{progress}</span>/100</div>
                        <h2>Profile</h2>
                        {check && <div className="profile__err">{check}</div>}
                        {
                            step === 1 &&
                            <StepOne
                                stepOneCheck={stepOneCheck}
                                handleProfile={handleProfile}
                                handleProfileClick={handleProfileClick}
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                            />
                        }
                        {
                            step === 2 &&
                            <StepTwo
                                stepTwoCheck={stepTwoCheck}
                                prevStep={prevStep}
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                            />
                        }
                        {
                            step === 3 &&
                            <StepThree
                                stepThreeCheck={stepThreeCheck}
                                prevStep={prevStep}
                                handleChange={handleChange}
                                values={values}
                                errors={errors}
                                handleSubmit={handleSubmit}
                            />
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileFormScreen;



const StepOne = ({ handleProfile, handleProfileClick, stepOneCheck, handleChange, values, errors }) => {
    return (
        <>
            <div className="form__field">
                <div className='profile__placeholder'>
                    <img src={Placeholder} className='' id='placeholder' alt='placeholder' onClick={handleProfileClick} />
                </div>

                <label htmlFor="profile" className="flex justify-center mb-2 text-sm font-medium text-gray-900">Profile <span className='text-red-500 text-base'>*</span></label>
                <input
                    type='file'
                    name='profile'
                    id='profile'
                    accept=".png, .jpg, .jpeg"
                    className='w-40 rounded-full'
                    style={{ display: "none" }}
                    onChange={handleProfile}
                />
                {errors.profile && <div className="profile__err">{errors.profile}</div>}

            </div>

            <div className="form__field">
                <label htmlFor="username" className='form__label'>Username <span>*</span></label>
                <input
                    type="text"
                    id='username'
                    name='username'
                    onChange={handleChange}
                    value={values.username}
                    placeholder='*****'
                />
                {errors.username && <div className="profile__err">{errors.username}</div>}
            </div>
            <button type='button' className='next__btn' onClick={stepOneCheck} >next</button>
        </>
    )
}




const StepTwo = ({ handleChange, values, stepTwoCheck, prevStep, errors }) => {
    return (
        <>
            <div className="form__field">
                <label htmlFor="email" className='form__label'>Email <span>*</span></label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    onChange={handleChange}
                    value={values.email}
                    placeholder='example@support.com'
                />
                {errors.email && <div className="profile__err">{errors.email}</div>}

            </div>
            <div className="form__field">
                <label htmlFor="birth_date" className='form__label'>Date of Birth<span>*</span></label>
                <input
                    type="date"
                    id='birth_date'
                    name='birth_date'
                    onChange={handleChange}
                    value={values.birth_date}
                    placeholder='*****'
                />
                {errors.birth_date && <div className="profile__err">{errors.birth_date}</div>}

            </div>
            <div className="form__field">
                <label htmlFor="phone_no" className='form__label'>Phone no <span>*</span></label>
                <input
                    type="number"
                    id='phone_no'
                    name='phone_no'
                    onChange={handleChange}
                    value={values.phone_no}
                    placeholder='*****'
                />
                {errors.phone_no && <div className="profile__err">{errors.phone_no}</div>}
            </div>
            <button type='button' className='next__btn' onClick={stepTwoCheck} >next</button><br /><br />
            <button type='button' className='prev__btn' onClick={prevStep} >back</button>

        </>
    )
}



const StepThree = ({ handleChange, values, prevStep, errors, handleSubmit }) => {
    return (
        <>
            <div className="form__field">
                <label htmlFor="city" className='form__label'>City <span>*</span></label>
                <input
                    type="text"
                    id='city'
                    name='city'
                    onChange={handleChange}
                    value={values.city}
                    placeholder='*****'
                />
                {errors.city && <div className="profile__err">{errors.city}</div>}

            </div>
            <div className="form__field">
                <label htmlFor="district" className='form__label'>District <span>*</span></label>
                <input
                    type="text"
                    id='district'
                    name='district'
                    onChange={handleChange}
                    value={values.district}
                    placeholder='*****'
                />
                {errors.district && <div className="profile__err">{errors.district}</div>}

            </div>
            <div className="form__field">
                <label htmlFor="pincode" className='form__label'>Pincode <span>*</span></label>
                <input
                    type="text"
                    id='pincode'
                    name='pincode'
                    onChange={handleChange}
                    value={values.pincode}
                    placeholder='*****'
                />
                {errors.pincode && <div className="profile__err">{errors.pincode}</div>}

            </div>
            <button type='button' className='next__btn' onClick={handleSubmit}>SUBMIT</button><br /><br />
            <button type='button' className='prev__btn' onClick={prevStep} >back</button>

        </>
    )
}