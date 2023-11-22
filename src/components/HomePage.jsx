import '../styles/HomePage.css'
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (

        <div className="bg-image">
            <div className="bg-overlay">
                <div className="homepage-content">
                    <h1 className='homepage-title'>Craft Your Professional Journey</h1>
                    <h2 className='homepage-desc'>Build a Standout CV in Minutes and Open Doors to Opportunities</h2>
                    <Link to="/cv-application/cv">
                        <button id='homepage-btn'>Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}