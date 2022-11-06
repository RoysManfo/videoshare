import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom"
import MainPage from "./Main";
import Watch from './Watch';



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage home />} />
				<Route path="/watch" element={<Watch />} />
			</Routes>
		</BrowserRouter>
	);
}