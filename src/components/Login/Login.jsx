import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

// const auth = getAuth(app)

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef()


    const handleSubmit = (event) => {
        // 1. prevent page refresh
        event.preventDefault()
        // error and success message empty
        setSuccess('')
        setError('')

        // 2. collect form data
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

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
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                event.target.reset();
                if (!loggedUser.emailVerified) {
                    alert('first verify your email then try again')
                }

                setSuccess('User Login successfully')
            })
            .catch(error => {
                console.error(error)
                setError(error.message)

            })
    }

    const handleEmailChange = (event) => {
        // console.log(event.target.value)

    }

    const handlePasswordBlur = (event) => {
        // console.log(event.target.value)

    }

    const handleResetPassword = event => {
        const email = (emailRef.current.value)
        if (!email) {
            alert('please provide an email')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Please Check your email')
            })
            .catch((error) => {
                const errorMessage = error.message;
                // ..
            });
    }


    return (
        <div className='w-50 mx-auto mt-5'>
            <h4>Please Login</h4>
            <form onSubmit={handleSubmit}>
                <input className='rounded ps-2 mb-4 w-75' onChange={handleEmailChange} type="email" name="email" ref={emailRef} id="" placeholder='Your Email' required />
                <br />
                <input className='rounded ps-2 mb-4 w-75' onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />
                <p><small>Forget password? please<span onClick={handleResetPassword} className='btn btn-link'>Reset</span></small></p>
                <p ><small>Already have an account? Please <Link to="/register">Register</Link></small></p>
                <p className='text-danger'>{error}</p>
                <p className='text-success'>{success}</p>
            </form>
        </div>
    );
};

export default Login;