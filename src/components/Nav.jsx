import React from 'react';
import Favorties from './Favorties.jsx';

export default function Nav() {
    return (
        <nav className='navbar justify-content-between bg-light'>
            <a className="navbar-brand" href="#">Star Wars</a>
            <Favorties/>
        </nav>
    )
}