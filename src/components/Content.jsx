import React from 'react';
import People from './People.jsx';
import Vehicles from './Vehicles.jsx';
import Planets from './Planets.jsx';

export default function Content() {
    return (
        <div className='accordian'>
            <People></People>
            <Vehicles></Vehicles>
            <Planets></Planets>
        </div>
        
    )
}