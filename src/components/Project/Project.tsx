import React from 'react';
import { useParams } from 'react-router-dom';
import * as ProjectPages from '../../project-pages/Exports';
import ProjectProperties from '../../types/ProjectProperties';

function routeToProperty (route: string): string {
  const words = route.split('-');
  const uppercase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return uppercase.join('')
}

const Project = () => {
  const { projectId } = useParams();
  const propertyName = routeToProperty(projectId!) as ProjectProperties;

  return (
    <div className="Project listCard">
      {ProjectPages[propertyName]}
    </div >
  );

}

export default Project;