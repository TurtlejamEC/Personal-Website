import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App/App';

export default class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />}>
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}