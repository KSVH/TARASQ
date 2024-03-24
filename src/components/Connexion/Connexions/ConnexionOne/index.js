import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';

export default function ConnexionOne() {
  return (
    <div className='bg-black h-screen-minus-navbar flex items-center justify-center'>
      <div className='container mx-auto px-4 py-5 my-auto'>
        <div className='grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
          <div className='flex flex-col items-center justify-center'>
            <div className='flex'>
              <div className="h-10 w-10 cursor-pointer bg-cover">
                <StaticImage
                  src="../../../../images/icon.png"  // Remplacez cela par votre chemin d'image réel
                  alt="A dinosaur"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <h1 className='text-4xl text-white font-bold ml-2'>TARASQ</h1>
            </div>
            <p className='text-white'>Se connecter ou créer un compte</p>
          </div>
          <div>
            <div className='bg-white rounded-md p-8'>
              <div className='mb-5'>
                <h3 className='font-semibold text-gray-800 text-3xl'>Se connecter</h3>
                <p className='mt-2'>Vous êtes un nouvel utilisateur ? <a href="/" className='text-blue-500'>Créez un compte</a></p>
              </div>
              <form>
                <label className='font-medium text-xl text-gray-800'>Adresse e-mail</label>
                <input className='w-full h-10 border rounded mt-2 mb-5 p-2' placeholder='Adresse e-mail' />
                <label className='font-medium text-xl text-gray-800'>Mot de passe</label>
                <input className='w-full h-10 border rounded mt-2 p-2' placeholder='Mot de passe' />
              </form>
              <p className='mt-4 text-sm text-gray-600'>Mot de passe oublié ? <a href="/" className='text-blue-500'>Cliquez-ici</a></p>
              <div className='flex justify-end'>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow h-10 mt-3 w-[120px]">Connexion</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
