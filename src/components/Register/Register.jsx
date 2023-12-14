import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const auth = getAuth(app);

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = (event) => {
        // 1. prevent page refresh
        event.preventDefault()
        // error and success message empty
        setSuccess('')
        setError('')

        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        // console.log(email, password);

        // Regular Expression 
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please set at least One Uppercase');
            return;
        }
        else if (!/(?=.*\d)/.test(password)) {
            setError('Please set at least on digits')
            return;
        }
        else if (!/(?=.*[!#$%&* ])/.test(password)) {
            setError('Please at least on Special Character')
            return;
        }

        // 3. create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                event.target.reset();
                setSuccess('User has created successfully')
                sendVerificationEmail(loggedUser)

            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
    }

    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result)
                alert('Please verify your email')
            })
            .catch(error => {
                setError()
            })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value)

    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value)

    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className='rounded ps-2 mb-4 w-75' onChange={handleEmailChange} type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input className='rounded ps-2 mb-4 w-75' onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
                <p ><small>New to this website <Link to="/login">Login</Link></small></p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Register;