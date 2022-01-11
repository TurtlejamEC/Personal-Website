import React from 'react';
import Header from '../../components/Header/Header';
import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';
import { WindowDimensions } from '../../types/WindowDimensions';
import './App.css';

interface AppState {
  windowDimensions: WindowDimensions;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {windowDimensions: {width: window.innerWidth, height: window.innerHeight}};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  updateWindowDimensions() {
    this.setState({ windowDimensions: {width: window.innerWidth, height: window.innerHeight} });
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
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
      <div id="App" className="glow">
        <ParticleBackground windowDimensions={this.state.windowDimensions} />
        <Header />
      </div>
    </>;
  }
}
