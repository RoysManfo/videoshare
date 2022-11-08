import React from 'react';
import { Link } from 'react-router-dom';
import '../css/index.css';

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to={"/"}>
                <h1 className='company' title='VideoShare Home page'>VideoShare</h1>
            </Link>
            <div className='right-nav'>
                <ul className='navigate'>
                    <li>Following</li>
                    <li>Upload</li>
                    <li>Library</li>
                </ul>
                <div className="profile" title='Profile' id='profile-pic'>
                    <div className='profile-img'></div>
                    <ul className="menu" id='menu'>
                        <li title='Profile'>Profile</li>
                        <li title='Account'>Account</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
