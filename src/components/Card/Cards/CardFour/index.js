import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function CardFour({ data }) {

  // FUNCTION FOR CUT THE TEXT 
  function couperTexte(texte, longueurMax) {
    if (texte.length <= longueurMax) {
      return texte;
    }

    const texteCoupe = texte.substring(0, longueurMax) + '...';
    return texteCoupe;
  }

  // CONST FOR TAKING THE DATA TO CUT
  const texteCoupe = couperTexte(data.description.description, 120);

  const image = getImage(data.media)

  console.log(data, "ici fin du components")

  return (
    <div class="rounded-lg overflow-hidden shadow-xl">
      <div className="w-full cursor-pointer h-[200px]">
        <GatsbyImage
          image={image}
          alt="toto"
          placeholder="blurred"
          layout="constrained"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div class="px-6 py-4 min-h-[200px]">
        <h3 class="font-extrabold text-lg mb-2 text-secondary">Editorial</h3>
        <h2 class="font-extrabold text-xl text-primary">{data.titre}</h2>
        <p className='mb-2 text-secondary text-sm font-medium italic'>10 Février 1987</p>
        <p class="text-paragraph text-base">
          {texteCoupe}
        </p>
      </div>
    </div>
  )
}
