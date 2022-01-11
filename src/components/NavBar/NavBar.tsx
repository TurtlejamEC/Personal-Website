import React from 'react';
import NavBarButton from '../NavBarButton/NavBarButton';
import './NavBar.css';

const navBarOptions = ["About", "Music", "Projects", "Blog"];

export default class NavBar extends React.Component {
  render() {
    return (
      <div id="NavBar">
        {navBarOptions.map(option => <NavBarButton key={option} text={option} />)}
      </div>
    );
  }
}