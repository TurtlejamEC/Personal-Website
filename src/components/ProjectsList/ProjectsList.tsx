import React from 'react';
import ProjectsListCard from '../ProjectsListCard/ProjectsListCard';
import ProjectsListCardPropsArray from './ProjectsListCardPropsArray';

import ModelingThePropagationOfTrueFakeNewsOnTwitterThumbnail from '../../assets/Projects/ModelingThePropagationOfTrueFakeNewsOnTwitter/ModelingThePropagationOfTrueFakeNewsOnTwitterThumbnail.png';
import HarmonizerThumbnail from '../../assets/Projects/Harmonizer/HarmonizerThumbnail.png';
import RhythmBulletHellThumbnail from '../../assets/Projects/RhythmBulletHell/RhythmBulletHellThumbnail.png';
import CompetitiveProgrammingThumbnail from '../../assets/ProjectsList/CompetitiveProgrammingThumbnail.png';


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