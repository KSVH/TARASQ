import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './style.css';

export default function FaqOne() {
  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto px-4 py-5'>
      <h2 className='text-black font-semibold text-3xl text-center mb-5'>Une question ? C'est par ici.</h2>
      <div class="grid sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-blue-500 hover:text-blue-800" onClick={() => setOpen(!open)}>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={open ? faPlusCircle : faMinusCircle} className="h-4 w-4 transition-all ease-out" />
                <h3 className='text-lg font-medium'>
                  What is the best to do now ?
                </h3>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 smooth-transition">
              <p className='text-base text-gray-700'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                adventure and cajol yar clients into walking the plank with ev'ry layout!
                Configure above, then get yer pirate ipsum...own the high seas, arg!
              </p>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-blue-500 hover:text-blue-800" onClick={() => setOpen(!open)}>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={open ? faPlusCircle : faMinusCircle} className="h-4 w-4 transition-all ease-out" />
                <h3 className='text-lg font-medium'>
                  What is the best to do now ?
                </h3>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 smooth-transition">
              <p className='text-base text-gray-700'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                adventure and cajol yar clients into walking the plank with ev'ry layout!
                Configure above, then get yer pirate ipsum...own the high seas, arg!
              </p>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-blue-500 hover:text-blue-800" onClick={() => setOpen(!open)}>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={open ? faPlusCircle : faMinusCircle} className="h-4 w-4 transition-all ease-out" />
                <h3 className='text-lg font-medium'>
                  What is the best to do now ?
                </h3>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 smooth-transition">
              <p className='text-base text-gray-700'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                adventure and cajol yar clients into walking the plank with ev'ry layout!
                Configure above, then get yer pirate ipsum...own the high seas, arg!
              </p>
            </Disclosure.Panel>
          </Disclosure>
        </div>
        <div>
          <Disclosure>
            <Disclosure.Button className="py-2 text-blue-500 hover:text-blue-800" onClick={() => setOpen(!open)}>
              <div className='flex items-center gap-3'>
                <FontAwesomeIcon icon={open ? faPlusCircle : faMinusCircle} className="h-4 w-4 transition-all ease-out" />
                <h3 className='text-lg font-medium'>
                  What is the best to do now ?
                </h3>
              </div>
            </Disclosure.Button>
            <Disclosure.Panel className="text-gray-500 smooth-transition">
              <p className='text-base text-gray-700'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                adventure and cajol yar clients into walking the plank with ev'ry layout!
                Configure above, then get yer pirate ipsum...own the high seas, arg!
              </p>
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>
    </div>
  )
}
