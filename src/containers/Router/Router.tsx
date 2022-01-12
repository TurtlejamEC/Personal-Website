import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App/App';
import AboutPage from '../../components/AboutPage/AboutPage';
import MusicPage from '../../components/MusicPage/MusicPage';
import ProjectsPage from '../../components/ProjectsPage/ProjectsPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path="music" element={<MusicPage />} />
            <Route path="projects" element={<ProjectsPage />}>
              <Route index element={<ProjectsList />} />
            </Route>
            <Route index element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }
}