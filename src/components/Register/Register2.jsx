import React from 'react';

const Register2 = () => {
    const handleEmailChange = (e) => {
        console.log(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className='text-center'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="password" placeholder='Your password' />
                <br />
                <button>Register</button>
            </form>
        </div>
    );
};

export default Register2;