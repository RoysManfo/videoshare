import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import MainPage from './pages/Main';
import Navbar from './pages/Navbar';
import Watch from './pages/Watch';
import Router from './pages/Router';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>
);
