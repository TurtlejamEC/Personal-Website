import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App/App';
import AboutPage from '../../components/AboutPage/AboutPage';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}