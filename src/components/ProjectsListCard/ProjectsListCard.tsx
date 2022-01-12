import React from 'react';

interface ProjectsListCardProps {
  title: string;
  description: string;
  thumbnailSrc: string;
}

export default class ProjectListsCard extends React.Component<ProjectsListCardProps> {
  render() {
    return (
      <div className="ProjectsListCard listCard">
        <img src={this.props.thumbnailSrc} style={{ float: "right", width: "10em" }} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}