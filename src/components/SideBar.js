import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faSuitcase,
  faIdCardAlt,
  faUser,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSuitcase, faIdCardAlt, faUser, faHome, faUniversity);

const SideBar = () => {
  return (
    <div className='sideBar '>
      <div className='mb-5'>
        <h3>
          <FontAwesomeIcon icon={faUniversity} />
          <strong className='px-1'>test</strong>
        </h3>
      </div>

      <div className='mb-4'>
        <FontAwesomeIcon icon={['fas', 'id-card-alt']} />
        <span className='px-3'>Dashboard</span>
      </div>
      <div className='mb-4'>
        <FontAwesomeIcon icon={faSuitcase} />
        <span className='px-3'>Gigs</span>
      </div>

      <div className='mb-4'>
        <FontAwesomeIcon icon={faHome} />
        <span className='px-3'>Company</span>
      </div>
      <div className='mb-4'>
        <FontAwesomeIcon icon={faUser} />
        <span className='px-3'>Account</span>
      </div>
    </div>
  );
};

export default SideBar;
