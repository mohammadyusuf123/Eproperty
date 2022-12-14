import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding } from '@fortawesome/free-regular-svg-icons'


const Navbar = () => {

    let Links = [
        {name: 'Home', link: ''},
        {name: 'Our Properties', link: ''},
        {name: 'Agents', link: ''},
        {name: 'Blog', link: ''},
        {name: 'Login/Sign Up', link: ''}
      ]
  
    return (
        <div className='py-5 flex flex-row justify-between content-center text-lg'>
        <div className='flex flex-row items-center text-darker font-bold tablet:text-xl laptop:text-2xl'>
          <div><FontAwesomeIcon icon={faBuilding} /></div>
          <div className='pl-2'>Eproperty</div>
        </div>
        <ul className={'flex items-center tablet:text-sm laptop:text-base'}>
          {Links.map((link) => (
              <li key={ link.link } className='tablet:mx-3 laptop:mx-5 text-gray-400  hover:text-darker'>
                <a href={ link.link }>{ link.name }</a>
              </li>
          ))}
          <button className='  text-gray-400  hover:text-darker'>
            Contact Us
          </button>
        </ul>
      </div>
    );
};

export default Navbar;