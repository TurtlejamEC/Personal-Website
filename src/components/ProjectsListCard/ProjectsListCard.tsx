import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsListCard.css';

interface ProjectsListCardProps {
  title: string;
  description: string;
  thumbnailSrc: string;
  route: string;
}

export default class ProjectListsCard extends React.Component<ProjectsListCardProps> {
  render() {
    return (
      <Link to={this.props.route} className="RouterLink">
        <div className="ProjectsListCard listCard">
          <img src={this.props.thumbnailSrc} style={{ float: "right", width: "10em" }} />
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
        </div>
      </Link>
    );
  }
}