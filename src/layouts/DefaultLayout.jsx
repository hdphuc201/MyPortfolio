import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '~/components/layout/Header';

const DefaultLayout = () => {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-[1]">
                <Header />
            </div>
            <Outlet />
        </>
    );
};

export default DefaultLayout;
