import React from 'react';
import Header2 from '../Header/Header2';
import { Outlet } from 'react-router-dom';

const Main2 = () => {
    return (
        <div>
            <Header2></Header2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main2;