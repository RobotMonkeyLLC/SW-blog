import React from 'react';
import People from './People.jsx';
import Vehicles from './Vehicles.jsx';
import Planets from './Planets.jsx';

export default function Content() {
    return (
        <div className='col-12'>
            <div className='accordian'>
            <People></People>
            </div>
            <Vehicles></Vehicles>
            <Planets></Planets>
        </div>
    )
}