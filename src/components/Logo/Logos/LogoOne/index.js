import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export default function LogoOne() {
  return (
    <div>
      <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className='text-end'>
          <h3 className='text-xs font-semibold uppercase text-gray-600'>Nos plateformes</h3>
          <h2 className='text-xl font-semibold text-gray-600 my-4'>Ils nous font confiance.</h2>
          <p className='text-md text-gray-600'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next adventure
            and cajol yar clients into walking the plank with ev'ry layout! Configure above, then get yer pirate ipsum...own
            the high seas, arg!</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow h-10 mt-3">En savoir plus</button>
        </div>
        <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className="flex justify-center">
            <StaticImage
              src="../../../../images/icon.png"  // Remplacez cela par votre chemin d'image réel
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: '50%', height: '50%' }}
            />
          </div>
          <div className="flex justify-center">
            <StaticImage
              src="../../../../images/icon.png"  // Remplacez cela par votre chemin d'image réel
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: '50%', height: '50%' }}
            />
          </div>
          <div className="flex justify-center">
            <StaticImage
              src="../../../../images/icon.png"  // Remplacez cela par votre chemin d'image réel
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: '50%', height: '50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
