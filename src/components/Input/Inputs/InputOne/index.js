import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InputOne = ({ icon }) => {
  return (
    <div className="relative">
      <FontAwesomeIcon icon={icon} className="absolute left-3 top-3 text-gray-500" />
      <input className='w-full h-10 border rounded pl-10 p-2' placeholder='Mot de passe' />
    </div>
  );
};

export default InputOne;