import React from 'react';
import './BasicInfo.css';

export default class BasicInfo extends React.Component {
  render() {
    return (
      <div id="BasicInfo" className="centerHorizontal">
        <h1>Elias Cho</h1>
        <p>Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/TurtlejamEC">github.com/TurtlejamEC</a></p>
        <p>Youtube: <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/user/Aquaboost123/featured">youtube.com/user/Aquaboost123/featured</a></p>
        <p>Resume: <a target="_blank" rel="noopener noreferrer" href="https://elias-cho-resume.s3.amazonaws.com/Resume.pdf">https://elias-cho-resume.s3.amazonaws.com/Resume.pdf</a></p>
      </div>
    );
  }
}