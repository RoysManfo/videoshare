import React from 'react';
import '../css/index.css';
export default function Navbar(){
    return (
        <nav className="nav">
            <h1 className='company'>VideoShare</h1>
            <div className='right-nav'>
                <ul className='navigate'>
                    <li>Following</li>
                    <li>Upload</li>
                    <li>Library</li>
                </ul>
                <div className="profile" title='Profile'><div className='profile-img'></div></div>
            </div>
        </nav>
    )
}
