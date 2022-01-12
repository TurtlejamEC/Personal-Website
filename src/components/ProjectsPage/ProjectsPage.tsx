import React from 'react';
import { Outlet } from 'react-router-dom';

export default class ProjectsPage extends React.Component {
  render() {
    return (
      <div id='ProjectsPage'className="page">
        <Outlet />
      </div>
    );
  }
}