import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarButton.css';

interface NavBarButtonProps {
  text: string;
}

const linkMap: Map<string, string> = new Map([
  ["About", "/"],
  ["Music", "music"],
  ["Projects", "projects"],
  ["Blog", "blog"]
]);

export default class NavBarButton extends React.Component<NavBarButtonProps> {
  render() {
    return (
      <Link to={linkMap.get(this.props.text)!} className="RouterLink">
        <div className="NavBarButton">{this.props.text}</div>
      </Link>
    );
  }
}