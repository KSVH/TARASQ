import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function CardTwo(props) {

  function couperTexte(texte, longueurMax) {
    if (texte.length <= longueurMax) {
      return texte;
    }

    const texteCoupe = texte.substring(0, longueurMax) + '...';
    return texteCoupe;
  }

  const texteCoupe = couperTexte(props.data.description.description, 40);

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-2xl">
      <div className="h-64 lg:h-full w-full cursor-pointer bg-cover">
        <StaticImage
          src="../../../../images/test/card2.jpg"  // Remplacez cela par votre chemin d'image réel
          alt="A dinosaur"
          placeholder="blurred"
          layout="constrained"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <h2 className="text-blue-700 font-bold text-xl mb-2">{props.data.titre}</h2>
          <p className="text-gray-700 text-base">{texteCoupe}</p>
        </div>
        <div className="flex items-center">
          <StaticImage
            src="../../../../images/test/card2.jpg"  // Remplacez cela par votre chemin d'image réel
            alt="A dinosaur"
            placeholder="blurred"
            layout="constrained"
            height={40}
            width={40}
            style={{ borderRadius: '100%', marginRight: "10px" }}
          />
          <div className="text-sm">
            <p className="text-blue-700 leading-none font-semibold">{props.data.auteur}</p>
            <p className="text-gray-400 italic">10 Février 1934</p>
          </div>
        </div>
      </div>
    </div>
  )
}
