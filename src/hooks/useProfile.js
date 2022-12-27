import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useProfile = () => {

    const navigate = useNavigate()


    const [step, setStep] = useState(1)
    const [progress, setProgress] = useState(0)

    
    


    const [values, setValues] = useState({
        profile: '',
        username: '',
        email: '',
        phone_no: '',
        birth_date: '',
        city: '',
        district: '',
        pincode: '',
    })

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (localStorage.getItem(`profile_${values?.email}`)) {
            navigate('/login')
        }
    }, [navigate, values])

    const handleProfileClick = () => {
        document.getElementById("profile").click()
    }


    const handleProfile = e => {
        if (e.target.files[0]) {

            const reader = new FileReader();

            reader.addEventListener("load", (e) => {
                document.getElementById('placeholder').setAttribute('src', e.target.result)

                setValues({
                    ...values,
                    profile: e.target.result
                })
            })

            reader.readAsDataURL(e.target.files[0])
        }

        
    }


    const handleChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        })

    }

    const stepOneCheck = () => {

        let error = {};

        if (!values.profile) {
            error.profile = "Profile is required!"
        } else if (!values.username) {
            error.username = "Name is required!"
        } else {

            setStep(step + 1)
            setProgress(progress + 50)
        }

        setErrors(error)
    }



    const stepTwoCheck = () => {

        let error = {};

        const user = JSON.parse(localStorage.getItem(`user_${values.email}`))


        var mob = /^[1-9]{1}[0-9]{9}$/;
        if (!values.email) {
            error.email = "Email is required!"
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            error.email = "Email address is invalid!"
        } else if (user?.email !== values.email) {
            error.email = "check your email, must given register email"
        }else if (!values.birth_date) {
            error.birth_date = "Date of Birth is required!"
        } else if (!values.phone_no) {
            error.phone_no = "Mobile number is required!"
        } else if (mob.test(values.phone_no) === false) {
            error.phone_no = "Please enter valid mobile number!"
        } else {
            setStep(step + 1)
            setProgress(progress + 50)
        }

        setErrors(error);
    }



    const stepThreeCheck = () => {

        let error = {};

        var code = /^[1-9]{1}[0-9]{5}$/;

        if (!values.city) {
            error.city = "City is required!"
        } else if (!values.district) {
            error.district = "District is required!"
        } else if (!values.pincode) {
            error.pincode = "Parent name is required!"
        } else if (code.test(values.pincode) === false) {
            error.pincode = "Please enter valid pincode!"
        } else {
            setStep(step + 1)
            setProgress(progress)
        }

        setErrors(error);
    }


    const [check, setCheck] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (Object.keys(errors).length === 0) {

            const user = JSON.parse(localStorage.getItem(`profile_${values.email}`))

            if (user?.email === values.email) {

                setCheck('You have already create profile!')
                setValues({
                    profile: '',
                    username: '',
                    email: '',
                    phone_no: '',
                    birth_date: '',
                    city: '',
                    district: '',
                    pincode: '',
                })
                
            } else {
                localStorage.setItem(`profile_${values.email}`, JSON.stringify(values))
                navigate('/login')
                setValues({
                    profile: '',
                    username: '',
                    email: '',
                    phone_no: '',
                    birth_date: '',
                    city: '',
                    district: '',
                    pincode: '',
                })
            }

            
        }
    };


    const prevStep = () => {
        setStep(step - 1)
        setProgress(progress - 50)
    }


    return {
        step,
        stepOneCheck,
        stepTwoCheck,
        stepThreeCheck,
        prevStep,
        handleSubmit,
        progress,
        handleProfileClick,
        handleProfile,
        handleChange,
        values,
        errors,
        check
    }
}




export default useProfile
