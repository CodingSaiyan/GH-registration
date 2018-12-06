import React from 'react';
import './Sidebar.css';

export default function  Sidebar() {
    return (
        <div className="sidebar">

            <div className="hero">
                <div className="hero-blanket">
                    <h3>SALT LAKE CITY</h3>
                    <p>DIVISION C — JULY 15–17</p>
                    <p>DIVISION B — JULY 29–31</p>
                    <p>DIVISION A — AUGUST 5–7</p>
                </div>
            </div>
            
            <div className="target">
                <div className="target-blanket">
                    <h3>DENVER</h3>
                    <p>COMING SOON</p>
                </div>
            </div>

            <div className="target">
                <div className="target-blanket">
                    <h3>PHOENIX</h3>
                    <p>COMING SOON</p>
                </div>
            </div>
        </div>
    )
}