import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Register2 = () => {
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const auth = getAuth(app)
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
                const loggedUser = result.user;

                setSuccess("User successfully created")
                setError("")
                sendVerificationEmail(result.user)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }


    const sendVerificationEmail = user => {
        sendEmailVerification(user)
            .then(result => {
                setSuccess("User verification successful")
                alert("Check your email for verification email")
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h3>Please Register</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        required
                                    />
                                </div>
                                <p className='text-danger'>{error}</p>
                                <p className='text-success'>{success}</p>
                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                                <p>
                                    <small>Are you new here? Please <Link to="/login">Login</Link></small>
                                </p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register2;