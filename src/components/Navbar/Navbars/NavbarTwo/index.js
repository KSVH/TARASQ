import React, { useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Articles', href: '#', current: false },
  { name: 'Works', href: '#', current: false },
  { name: 'About', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavbarTwo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 660;
      setIsScrolled(shouldBeScrolled);
    };

    // Ajoutez un écouteur d'événements de défilement à la fenêtre
    window.addEventListener('scroll', handleScroll);

    // Retirez l'écouteur d'événements lors du nettoyage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Disclosure as="nav" className={classNames("fixed z-10 width-nav px-2 transition-all duration-300", isScrolled ? "bg-white shadow-lg" : "")}>
      {({ open }) => (
        <>
          <div className="container mx-auto">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
              </div>
              {/* Navigation */}
              <div className="hidden sm:flex items-center justify-end space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames("text-white font-serif text-xl", isScrolled ? "text-black" : "")}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* Bouton du menu mobile */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-secondary focus:outline-none focus:ring-2 focus:ring-inset">
                  <span className="absolute -inset-0.5 text-white" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faXmark} className={classNames("block h-6 w-6", isScrolled ? "text-secondary" : "text-white")} aria-hidden="true" />
                  ) : (
                    <FontAwesomeIcon icon={faBars} className={classNames("block h-6 w-6", isScrolled ? "text-secondary" : "text-white")} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>


          <Disclosure.Panel className="sm:hidden z-20">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-background-pink hover:text-white bg-secondary',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? '' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}