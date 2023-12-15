import React from 'react';
import { Link } from 'react-router-dom';

const Header2 = () => {
    return (
        <div className='text-center d-flex justify-content-center'>
            <Link className='m-2' to="/">Home</Link>
            <Link className='m-2' to="/login">Login</Link>
            <Link className='m-2' to="/register">register</Link>
        </div>
    );
};

export default Header2;