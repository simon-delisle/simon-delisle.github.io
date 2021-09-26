import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>I am a statistics enthusiast and hobbyist developer looking for new challenges.</h1>
    </div>
  );
}

export default HeroSection;
