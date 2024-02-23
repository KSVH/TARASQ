import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function CardFour() {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
      <div className="w-full cursor-pointer">
        <StaticImage
          src="../../../../images/test/card1.jpg"  // Remplacez cela par votre chemin d'image réel
          alt="A dinosaur"
          placeholder="blurred"
          layout="constrained"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div class="px-6 py-4">
        <h3 class="font-extrabold text-lg mb-2 text-blue-400">Editorial</h3>
        <h2 class="font-extrabold text-xl">The Coldest Sunset</h2>
        <p className='mb-2 text-gray-400 text-sm font-medium italic'>10 Février 1987</p>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
    </div>
  )
}
