import React from 'react'
import icon from '../../images/icon.png';

export default function Footer() {
  return (
    <div className='bg-slate-800'>
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 gap-4 mb-10">
          <div className='flex items-center'>
            <img src={icon} className="w-10 h-10" />
          </div>
          <div>
            <div className='flex justify-end mb-2'>
              <h4 className='text-[14px] text-blue-600 font-medium hidden md:block'>Inscrivez-vous à notre Newsletter</h4>
            </div>
            <form>
              <div className='flex items-center justify-end'>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="block w-full h-10 rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Votre email"
                  />
                </div>
                <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 border border-blue-700 rounded shadow h-10 ml-2">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <li className='font-bold text-slate-50 text-[14px]'>A propos</li>
            <li className='font-normal text-slate-300 text-[13px]'>Notre combat</li>
            <li className='font-normal text-slate-300 text-[13px]'>Le personnel</li>
            <li className='font-normal text-slate-300 text-[13px]'>Les prix</li>
            <li className='font-normal text-slate-300 text-[13px]'>Nos ressources</li>
          </div>
          <div>
            <li className='font-bold text-slate-50 text-[14px]'>Support</li>
            <li className='font-normal text-slate-300 text-[13px]'>Assistance</li>
            <li className='font-normal text-slate-300 text-[13px]'>FAQ</li>
            <li className='font-normal text-slate-300 text-[13px]'>Les questions fréquentes</li>
          </div>
          <div>
            <li className='font-bold text-slate-50 text-[14px]'>Nos produits</li>
            <li className='font-normal text-slate-300 text-[13px]'>Les valeurs</li>
            <li className='font-normal text-slate-300 text-[13px]'>Nos protocoles</li>
            <li className='font-normal text-slate-300 text-[13px]'>Nos efforts CO2</li>
          </div>
          <div>
            <li className='font-bold text-slate-50 text-[14px]'>Politique</li>
            <li className='font-normal text-slate-300 text-[13px]'>RGPD</li>
            <li className='font-normal text-slate-300 text-[13px]'>Politique de confidentalité</li>
            <li className='font-normal text-slate-300 text-[13px]'>Cookies</li>
            <li className='font-normal text-slate-300 text-[13px]'>Retours</li>
          </div>
        </div>
        <div className='h-[1px] w-full bg-gray-300 mt-5 mb-5' />
        <div class="grid grid-cols-2 gap-4 pb-5">
          <div className='flex items-center'>
            <h5 className='font-bold text-white'>Created by Yuna and cook with ❤️</h5>
          </div>
          <div>
            <div className='flex justify-end'>
              <div>
                <a href="/">
                  <img src={icon} className='h-10 w-10' />
                </a>
              </div>
              <div className='ml-3'>
                <a href="/">
                  <img src={icon} className='h-10 w-10' />
                </a>
              </div>
              <div className='ml-3'>
                <a href="/">
                  <img src={icon} className='h-10 w-10' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}