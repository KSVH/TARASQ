import React, { useState } from 'react'
import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function FaqTwo() {
  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto px-4 py-5'>
      <div class="grid sm:grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-2">
        <h2 className='text-black font-semibold text-3xl mb-5 text-end'>Une question ? <br />C'est par ici.</h2>
        <div>
          <div className='shadow-md rounded h-fit mb-3'>
            <Disclosure>
              <Disclosure.Button className="p-3 text-blue-500 hover:text-blue-800 w-full" onClick={() => setOpen(!open)}>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium'>
                    What is the best to do now ?
                  </h3>
                  <FontAwesomeIcon icon={open ? faMinus : faPlus} className="h-4 w-4" />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 smooth-transition">
                <p className='text-base text-gray-500 px-3 pb-5'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                  adventure and cajol yar clients into walking the plank with ev'ry layout!
                  Configure above, then get yer pirate ipsum...own the high seas, arg!
                </p>
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='shadow-md rounded h-fit mb-3'>
            <Disclosure>
              <Disclosure.Button className="p-3 text-blue-500 hover:text-blue-800 w-full" onClick={() => setOpen(!open)}>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium'>
                    And if i want to return my package ?
                  </h3>
                  <FontAwesomeIcon icon={open ? faMinus : faPlus} className="h-4 w-4" />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 smooth-transition">
                <p className='text-base text-gray-500 px-3 pb-5'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                  adventure and cajol yar clients into walking the plank with ev'ry layout!
                  Configure above, then get yer pirate ipsum...own the high seas, arg!
                </p>
              </Disclosure.Panel>
            </Disclosure>
          </div>
          <div className='shadow-md rounded h-fit mb-3'>
            <Disclosure>
              <Disclosure.Button className="p-3 text-blue-500 hover:text-blue-800 w-full" onClick={() => setOpen(!open)}>
                <div className='flex items-center justify-between'>
                  <h3 className='text-lg font-medium'>
                    Can i create a custom garage ?
                  </h3>
                  <FontAwesomeIcon icon={open ? faMinus : faPlus} className="h-4 w-4" />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 smooth-transition">
                <p className='text-base text-gray-500 px-3 pb-5'>The best Lorem Ipsum Generator in all the sea! Heave this scurvy copyfiller fer yar next
                  adventure and cajol yar clients into walking the plank with ev'ry layout!
                  Configure above, then get yer pirate ipsum...own the high seas, arg!
                </p>
              </Disclosure.Panel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  )
}
