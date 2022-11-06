import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from "react-router-dom"
import MainPage from "./Main";



export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/" element={<MainPage />} />
			</Routes>
		</BrowserRouter>
	);
}