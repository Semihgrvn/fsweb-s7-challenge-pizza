import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Header />
            <div
                className="banner-container"
                style={{
                    backgroundImage: `url('Assets/mvp-banner.png')`,
                }}
            >
                <h2 className="banner-text">
                    KOD ACIKTIRIR
                    <br />
                    PIZZA, DOYURUR
                </h2>
                <Link to="/pizza">
                    <button
                        id="order-pizza"
                        className="order-pizza"
                    >
                        ACIKTIM
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;