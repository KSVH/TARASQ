import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import InputOne from '../../../Input/Inputs/InputOne';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import './ConnexionThree.css';
import InputTwo from '../../../Input/Inputs/InputTwo';

export default function ConnexionThree() {
  return (
    <div className="h-screen-minus-auth bg-white">
      <div className='flex items-stretch h-screen-minus-auth'>
        <div className='w-1/3'>
          <div className=' h-full'>
            <div className='w-full h-full'>
              <div className="h-full w-full cursor-pointer bg-cover">
                <StaticImage
                  src="../../../../images/test/auth/photo3.jpg"
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='container flex items-center justify-center p-5'>
          <div className='w-[600px]'>
            <div className='flex mb-10'>
              <div className="h-10 w-10 cursor-pointer bg-cover">
                <StaticImage
                  src="../../../../images/icon.png"  // Remplacez cela par votre chemin d'image réel
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h1 className='text-4xl text-gray-600 font-bold ml-2'>TARASQ</h1>
            </div>
            <div className='mb-5 justify-between items-center md:flex'>
              <h3 className='font-semibold text-gray-700 text-3xl'>Se connecter</h3>
              <p className='mt-2 text-sm text-gray-600'>Vous êtes un nouvel utilisateur ? <a href="/" className='text-blue-500'>Créez un compte</a></p>
            </div>
            <form>
              <InputOne icon={faLock} />
              <InputOne icon={faUser} />
              <InputTwo />
            </form>
            <p className='mt-4 text-sm text-gray-600 text-end'>Mot de passe oublié ? <a href="/" className='text-blue-500'>Cliquez-ici</a></p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow h-10 mt-3 w-[120px] w-full">Connexion</button>
          </div>
        </div>
      </div>
    </div>
  )
}
