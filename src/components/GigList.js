import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import SideBar from './SideBar';
import TopBar from './TopBar';

const GigList = () => {
  return (
    <div className='container-fluid home'>
      <div className='row' style={{ height: '700px' }}>
        <div className='col'>
          <SideBar />
        </div>

        <div className='col-9'>
          <TopBar />
          <div style={{ display: 'inline-flex', paddingBottom: '20px' }}>
            <strong>
              <h2 style={{ color: '#555064' }}>Gigs</h2>
            </strong>
            <Button style={{ width: '120px' }} variant='secondary'>
              <Link to='/new'> New gig {''} +</Link>
            </Button>
          </div>

          <div className='gigNav'>
            <a href='#' className='gigButtonA'>
              All gigs
              <span className='badge'>3408</span>
            </a>
            <a href='#' className='gigButtonB px-5'>
              my gigs<span className='badge'>1200</span>
            </a>
            <a href='#' className='gigButtonC'>
              Rejected gigs
              <span className='badge'>100</span>
            </a>
          </div>
          {/* <div className='d-flex justify-content-between'>
            <div className=''>
              All gigs
              <span className='badge'>3408</span>
            </div>
            <div className=''>
              my gigs<span className='badge'>1200</span>
            </div>
            <div className=''>
              Rejected gigs
              <span className='badge'>100</span>
            </div>
          </div> */}

          <div style={{ marginBottom: '30px' }}>
            <div className='col-3'>
              <button
                className='midButton'
                style={{
                  border: '1px solid gainsboro',
                  marginRight: '10px',
                  color: 'rgb(210, 208, 215)',
                }}
              >
                Freelane
              </button>
            </div>
            <button
              className='btn dropdown-toggle'
              style={{
                border: '1px solid gainsboro',
                marginRight: '10px',
                color: 'rgb(210, 208, 215)',
                fontSize: '12px',
                padding: '2px',
                width: '100px',
              }}
              type='button'
              data-toggle='dropdown'
            >
              Keyword
            </button>

            <button
              className='btn dropdown-toggle'
              style={{
                border: '1px solid gainsboro',
                marginRight: '10px',
                color: 'rgb(210, 208, 215)',
                fontSize: '12px',
                padding: '2px',
                width: '100px',
              }}
              type='button'
              data-toggle='dropdown'
            >
              Location
            </button>

            <button className='midButtonC'>Remote friendly</button>
            <button className='midButton'>Design</button>
            <button className='midButton'>Contact</button>
          </div>

          <table class='table'>
            <thead>
              <tr>
                <th scope='col'></th>
                <th scope='col'>Role</th>
                <th scope='col'>Company</th>
                <th scope='col'>Date</th>
                <th scope='col'>Salary</th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type='checkbox' className='check' />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button className='deleteB'>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type='checkbox' className='check' />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button className='deleteB'>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type='checkbox' className='check' />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button className='deleteB'>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type='checkbox' className='check' />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button className='deleteB'>Delete</button>
                </td>
              </tr>
              <tr>
                <td>
                  <input type='checkbox' className='check' />
                </td>
                <td>Product Designer</td>
                <td>TM30</td>
                <td>20th June 2020</td>
                <td>20,000-30,000</td>
                <td>
                  <button className='deleteB'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GigList;
