import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';
import { StaticImage } from 'gatsby-plugin-image';

class StarrySky extends React.Component {
  state = {
    num: 60,
    vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
  starryNight = () => {
    anime({
      targets: ["#sky .star"],
      opacity: [
        {
          duration: 700,
          value: "0"
        },
        {
          duration: 700,
          value: "1"
        }
      ],
      easing: "linear",
      loop: true,
      delay: (el, i) => 50 * i
    });
  };
  shootingStars = () => {
    anime({
      targets: ["#shootingstars .wish"],
      easing: "linear",
      loop: true,
      delay: (el, i) => 1000 * i,
      opacity: [
        {
          duration: 700,
          value: "1"
        }
      ],
      width: [
        {
          value: "150px"
        },
        {
          value: "0px"
        }
      ],
      translateX: 350
    });
  };
  randomRadius = () => {
    return Math.random() * 0.7 + 0.6;
  };
  getRandomX = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
  };
  getRandomY = () => {
    return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
  };
  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }
  render() {
    const { num } = this.state;
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        {/* Image statique */}
        <div style={{ position: 'absolute', top: 350, left: 150 }}>
          <StaticImage
            src="../../../../images/illustrations/header/avatar.png"
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            class='rounded'
            style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Contenu principal avec votre arrière-plan */}
        <div id="App" className='bg-gradient-to-b from-purple-400 via-pink-400 to-pink-200 h-screen flex justify-center flex-col'>
          <h1 className='text-9xl text-white text-center uppercase'>Yuna <br />dream</h1>
          <p className='text-white text-2xl text-center py-10'>Découvrez l’univers Yuna Dream <br />à travers mon site internet</p>
          <div className='flex justify-center'>
            <button className='text-secondary w-[200px] h-16 shadow-md bg-white rounded-full text-xl font-serif transition duration-300 ease-in-out transform hover:shadow-xl'>Découvrir</button>
          </div>
          <svg id="sky">
            {[...Array(num)].map((x, y) => (
              <circle
                cx={this.getRandomX()}
                cy={this.getRandomY()}
                r={this.randomRadius()}
                stroke="none"
                strokeWidth="0"
                fill="white"
                key={y}
                className="star"
              />
            ))}
          </svg>
          <div id="shootingstars">
            {[...Array(60)].map((x, y) => (
              <div
                key={y}
                className="wish"
                style={{
                  left: `${this.getRandomY()}px`,
                  top: `${this.getRandomX()}px`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default StarrySky;