import React from 'react';
import ParticleAnimation from './ParticleAnimation';
import Particle from '../../assets/Particle.png';
import { WindowDimensions } from '../../types/WindowDimensions';
import './ParticleBackground.css';

interface ParticleBackgroundProps {
  windowDimensions: WindowDimensions;
}

export default class ParticleBackground extends React.Component<ParticleBackgroundProps> {
  canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(props: ParticleBackgroundProps) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    ParticleAnimation(this.canvasRef.current?.getContext('2d'), this.props.windowDimensions);
  }

  componentDidUpdate() {
    this.canvasRef.current!.width = this.props.windowDimensions.width;
    this.canvasRef.current!.height = this.props.windowDimensions.height;
  }

  render() {
    return (
      <div id='ParticleBackground'>
        <div id='ParticleDiv'>
          <img id="Particle"
            src={Particle}
            width="100" height="100"></img>
        </div>
        <canvas id='BackgroundCanvas' width={this.props.windowDimensions.width} height={this.props.windowDimensions.height} ref={this.canvasRef}/>
      </div>
    );
  }
}