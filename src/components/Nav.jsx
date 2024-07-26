import React from 'react';
import Favorties from './Favorties.jsx';
import logo from '../assets/star-wars-logo.svg';

export default function Nav() {
    return (
        <nav className='navbar navbar-expand-md justify-content-between bg-secondary-subtle align-self-xl-center px-5' style={{width: "100vw"}}>
            <div className='container-fluid'>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarTogglerDemo01" 
                        aria-controls="navbarTogglerDemo01" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Star Wars Logo" width="100" height="100" />
                    </a>
                </div>
                <Favorties/>
            </div>
            
        </nav>
    )
}