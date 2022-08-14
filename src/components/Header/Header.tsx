import React from 'react';
import BasicInfo from '../BasicInfo/BasicInfo';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div id="Header">
        <BasicInfo />
      </div>
    );
  }
}