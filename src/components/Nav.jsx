import React from 'react';
import Favorties from './Favorties.jsx';

export default function Nav() {
    return (
        <nav className='navbar fixed-top justify-content-between bg-light'>
            <div className='container-md'>
                <a className="navbar-brand" href="#">Star Wars</a>
                <Favorties/>
            </div>
            
        </nav>
    )
}