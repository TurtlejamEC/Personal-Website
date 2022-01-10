import React from 'react';
import './BasicInfo.css';

export default class BasicInfo extends React.Component {
  render() {
    return (
      <div className="BasicInfo centerHorizontal">
        <h1>Elias Cho</h1>
        <p>Github: <a target="_blank" rel="noopener noreferrer" href="https://github.com/TurtleBCA">github.com/TurtleBCA</a></p>
        <p>Youtube: <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/user/Aquaboost123/featured">youtube.com/user/Aquaboost123/featured</a></p>
      </div>
    );
  }
}