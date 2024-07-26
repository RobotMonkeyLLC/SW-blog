import React from 'react';
import Category from '../components/Category.jsx';

export default function Home() {
    return (
        <div className='mt-3 d-flex flex-column'>
            <div className='accordian'>
                <Category category="Characters"></Category>
            </div>
            <div className='accordian'>
                <Category category="Vehicles"></Category>
            </div>
            <div className='accordian'>
                <Category category="Planets"></Category>
            </div>
        </div>
    )
}