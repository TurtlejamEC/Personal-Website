import React from 'react';
import ProjectsListCard from '../ProjectsListCard/ProjectsListCard';
import ProjectsListCardPropsArray from './ProjectsListCardPropsArray';

export default class ProjectsList extends React.Component {
  render() {
    return (
      <div id='ProjectsList'>
        {ProjectsListCardPropsArray.map(props =>
          <ProjectsListCard key={props.route} {...props} />
        )}
      </div>
    );
  }
}