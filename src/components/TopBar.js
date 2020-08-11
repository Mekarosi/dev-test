import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

import Nav from 'react-bootstrap/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBell,
  faEnvelope,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSearch, faBell, faEnvelope, faCog);

const TopBar = () => {
  return (
    <div className='topBar'>
      <nav class='navbar navbar-expand-lg navbar-light bg-light'>
        <a class='navbar-brand' href='#'>
          {<FontAwesomeIcon style={{ margin: '10px' }} icon={faBell} />}{' '}
        </a>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                {
                  <FontAwesomeIcon
                    style={{ margin: '10px' }}
                    icon={faEnvelope}
                  />
                }
                <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                {<FontAwesomeIcon style={{ margin: '10px' }} icon={faCog} />}
                <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                {
                  <FontAwesomeIcon
                    style={{ margin: '10px' }}
                    icon={faEnvelope}
                  />
                }
                <span class='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
      {/* <nav className='navbar navbar-expand-lg '>
        <div className='collapse'>
          <ul className='navbar-nav mr-auto'>
            <li class='nav-item active'>
              <a class='nav-link' href='#'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
          <form class='form-inline my-2 my-lg-0'>
            <input
              class='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button class='btn btn-outline-success my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav> */}
      {/* <Form>
        <FontAwesomeIcon style={{ margin: '10px' }} icon={faSearch} />
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
      </Form> */}

      {/* <Nav className='navLink'>
        <Form>
          <FontAwesomeIcon style={{ margin: '10px' }} icon={faSearch} />
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        </Form>

        <Nav.Link href='#'>
          {<FontAwesomeIcon style={{ margin: '10px' }} icon={faBell} />}
        </Nav.Link>
        <Nav.Link href='#'>
          {<FontAwesomeIcon style={{ margin: '10px' }} icon={faEnvelope} />}
        </Nav.Link>
        <Nav.Link href='#'>
          {<FontAwesomeIcon style={{ margin: '10px' }} icon={faCog} />}
        </Nav.Link>
        <Nav.Link href='#'>
          {<FontAwesomeIcon style={{ margin: '10px' }} icon={faEnvelope} />}
        </Nav.Link>
      </Nav> */}
    </div>
  );
};

export default TopBar;
