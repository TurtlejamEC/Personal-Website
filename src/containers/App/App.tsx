import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';
import NavBar from '../../components/NavBar/NavBar';
import { WindowDimensions } from '../../types/WindowDimensions';
import './App.css';

interface AppState {
  windowDimensions: WindowDimensions;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {windowDimensions: {width: window.outerWidth, height: window.outerHeight}};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ windowDimensions: {width: window.outerWidth, height: window.outerHeight} });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  render() {
    return <>
      <div id="App" className="glow">
        <ParticleBackground windowDimensions={this.state.windowDimensions} />
        <Header />
        <NavBar />
        <Outlet />
      </div>
    </>;
  }
}
