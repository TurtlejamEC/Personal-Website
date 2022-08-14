import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { createBrowserHistory, BrowserHistory } from 'history';
import App from '../App/App';
import AboutPage from '../../components/AboutPage/AboutPage';
import CustomRouter from '../CustomRouter/CustomRouter';
import MusicPage from '../../components/MusicPage/MusicPage';
import ProjectsPage from '../../components/ProjectsPage/ProjectsPage';
import ProjectsList from '../../components/ProjectsList/ProjectsList';
import Project from '../../components/Project/Project';

export default class Router extends React.Component {
  browserHistory : BrowserHistory;

  constructor() {
    super({});
    this.browserHistory = createBrowserHistory();
  }

  render() {
    const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
	if (path) {
		this.browserHistory.replace(path);
	}

    return (
      <CustomRouter browserHistory={this.browserHistory}>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path="music" element={<MusicPage />} />
            <Route path="projects" element={<ProjectsPage />}>
              <Route path=":projectId" element={<Project />} />
              <Route index element={<ProjectsList />} />
            </Route>
            <Route index element={<AboutPage />} />
          </Route>
        </Routes>
      </CustomRouter>
    )
  }
}