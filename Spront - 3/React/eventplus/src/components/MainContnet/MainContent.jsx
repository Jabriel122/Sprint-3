import React from 'react';
import { children } from 'react';
import './MainContent.css'

const MainContent = ({children}) => {
    return (
        <main className='main-contest'>
            {children}
        </main>
    );
};

export default MainContent;