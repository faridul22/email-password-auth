import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login2 = () => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const auth = getAuth(app)
    console.log(user)


    const handleSubmit = event => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        setError("");
        setSuccess("")
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Please add at least one upperCase")
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const loggedUser = result.user;
                setUser(loggedUser)
                setSuccess("User login successfully")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h3>Login</h3>
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
                                    Login
                                </button>
                                <p><small>Are you new here? Please <Link to="/register">Register</Link></small></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login2;