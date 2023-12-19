import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Register2 = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const auth = getAuth(app)
    const handleEmailChange = (e) => {
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        // firebase auth
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setSuccess("User successfully created")
                setError("")
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }
    return (
        <div className='text-center'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='Your password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <h5 className='text-danger'>{error}</h5>
            <h5 className='text-success'>{success}</h5>
        </div>
    );
};

export default Register2;