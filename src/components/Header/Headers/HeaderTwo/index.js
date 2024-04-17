import React, { useEffect, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import { StaticImage } from "gatsby-plugin-image";

// Définition des fonctions à l'extérieur du composant
const randomRadius = () => {
  return Math.random() * 0.7 + 0.6;
};

const getRandomX = (vw) => {
  return Math.floor(Math.random() * Math.floor(vw)).toString();
};

const getRandomY = (vh) => {
  return Math.floor(Math.random() * Math.floor(vh)).toString();
};

const StarrySky = () => {
  const [num, setNum] = useState(200);
  const [vw, setVw] = useState(0);
  const [vh, setVh] = useState(0);

  useEffect(() => {
    // Définir vw et vh à l'intérieur du bloc useEffect
    const vwValue = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const vhValue = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    setVw(vwValue);
    setVh(vhValue);

    const starryNight = () => {
      anime({
        targets: ["#sky .star"],
        opacity: [
          {
            duration: 700,
            value: "0",
          },
          {
            duration: 700,
            value: "1",
          },
        ],
        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i,
      });
    };

    const shootingStars = () => {
      anime({
        targets: ["#shootingstars .wish"],
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
          {
            duration: 700,
            value: "1",
          },
        ],
        width: [
          {
            value: "150px",
          },
          {
            value: "0px",
          },
        ],
        translateX: 350,
      });
    };

    starryNight();
    shootingStars();

    // Nettoyage de l'animation lors du démontage du composant
    return () => {
      anime.remove("#sky .star");
      anime.remove("#shootingstars .wish");
    };
  }, []); // Dépendances vides pour exécuter uniquement une fois lors du montage initial

  return (
    <div>
      <div
        id="App"
        className="bg-gradient-to-b from-purple-400 via-pink-400 to-pink-200 h-screen flex justify-center flex-col"
      >
        <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-white text-center uppercase z-50 animate__animated animate__backInLeft">
          Yuna <br />
          dream
        </h1>
        <p className="text-white text-2xl text-center py-10 z-50 animate__animated animate__backInRight">
          Découvrez l’univers Yuna Dream <br />à travers mon site internet
        </p>
        <div className="flex justify-center">
          <button className="text-secondary w-[200px] h-16 shadow-md bg-white rounded-full text-xl font-serif transition duration-300 ease-in-out transform hover:shadow-xl z-50 animate__animated animate__backInUp">
            Découvrir
          </button>
        </div>
        <svg id="sky">
          {[...Array(num)].map((x, y) => (
            <circle
              cx={getRandomX(vw)}
              cy={getRandomY(vh)}
              r={randomRadius()}
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
                left: `${getRandomY(vh)}px`,
                top: `${getRandomX(vw)}px`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarrySky;
