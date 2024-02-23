import React from 'react';
import Photo from '../../../../images/test/card1.jpg'
import { StaticImage } from 'gatsby-plugin-image';

export default function CardOne() {
  return (
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
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
        <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}
