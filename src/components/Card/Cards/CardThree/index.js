import React from 'react';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import "./style.css";

export default function CardThree(props) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex shadow-xl hover-zoom-icon-container">
      <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-center leading-normal md:full sm:1/2 w-1/3">
        <p className="text-sm text-gray-600 flex items-center">
          <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
          </svg>
          Members only
        </p>
        <h2 className="text-blue-600 font-bold text-xl mb-2 hover-zoom-icon-container">{props.data.titre}</h2>
        <p className="text-gray-700 text-base">{props.data.description.description}</p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow h-10 mt-3 w-[120px]">
          <div className='flex items-center'>
            <span>Suivant</span>
            <FontAwesomeIcon icon={faArrowRight} className="block h-4 w-4 ml-3 text-white hover-zoom-icon" aria-hidden="true" />
          </div>
        </button>
      </div>
      <div className="h-64 lg:h-full w-full overflow-hidden bg-contain clipath rounded-r-md cursor-pointer">
        <StaticImage
          src="../../../../images/test/carou1.jpg"  // Remplacez cela par votre chemin d'image réel
          alt="A dinosaur"
          placeholder="blurred"
          layout="constrained"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
