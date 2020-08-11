import React, { Component } from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class CreateGig extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row' style={{ height: '700px' }}>
          <div
            className='col'
            style={{
              width: '150px',
              borderRight: '1px solid rgb(245, 238, 238)',
              height: '600px',
              marginTop: '10px',
            }}
          >
            <SideBar />
          </div>

          <div className='col-9'>
            <TopBar />
            <div style={{ display: 'inlineFlex', paddingBottom: '20px' }}>
              <strong>
                <h2 style={{ color: '#555064' }}>Gigs</h2>
              </strong>
            </div>

            <div>
              <h6>New gig</h6>
            </div>

            <div className='box d-flex'>
              <div className='firstbox mr-5'>
                <p>Basic data</p>

                <p>Renumeration</p>
              </div>

              <div className='secondbox'>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridEmail'>
                      <Form.Label>Role</Form.Label>
                      <Form.Control type='text' value='Product Designer' />
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Label>Company</Form.Label>
                      <Form.Control type='text' value='TM30' />
                    </Form.Group>
                  </Form.Row>
                  <Form.Label>Location</Form.Label>
                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridEmail'>
                      <Form.Control as='select'>
                        <option>Country</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='formGridPassword'>
                      <Form.Control as='select' defaultValue='Choose...'>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Control>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId='formGridAddress1'>
                    <Form.Control placeholder='Address' />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridState'>
                      <Form.Label>Add tags</Form.Label>
                      <Form.Control type='text' value='Product Designer' />
                    </Form.Group>
                  </Form.Row>

                  <div className='d-flex'>
                    <p>
                      <a href='/'>Cancel</a>
                    </p>
                    <Button
                      variant='primary'
                      type='submit'
                      style={{ marginLeft: '20px', color: 'white' }}
                    >
                      <a href='/salary' style={{ color: 'white' }}>
                        Continue
                      </a>
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateGig;
