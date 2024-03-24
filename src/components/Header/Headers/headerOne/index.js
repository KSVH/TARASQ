import React from 'react'
// Import FontAwesome components
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Gatsby components
import { StaticImage } from 'gatsby-plugin-image';

export default function HeaderOne() {
  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid sm:grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-20">
        <div className='flex flex-col items-center justify-center'>
          <div>
            <h1 className='font-bold text-headline text-4xl'>3 Months, 76+ <br />Updates: Q2 in review</h1>
            <p className='font-normal my-5 text-paragraph'>Holy : Découvrez HOLY, notre partenaire ! Des boissons énergisantes saines, et des Ice tea, sans sucres aux goûts et arômes naturels.
              Utilisez le code "ICIJAPON" pour 10% de réduction et "IicJapon5" pour 5€ de réduction lors de votre 1ère commande !</p>
            <button className='text-secondary font-bold flex items-center'>Turn the page <FontAwesomeIcon icon={faArrowRight} className="block h-4 w-4 ml-3 text-secondary hover-zoom-icon" aria-hidden="true" /></button>
          </div>
        </div>
        <div>
          <div className="h-[500px] w-full bg-cover">
            <StaticImage
              src="../../../../images/test/auth/photo2.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              layout="constrained"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}