import React from 'react';
import People from '../components/People.jsx';
import Vehicles from '../components/Vehicles.jsx';
import Planets from '../components/Planets.jsx';

export default function Home() {
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