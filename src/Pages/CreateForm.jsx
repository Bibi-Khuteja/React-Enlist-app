import React from "react";
import { Row, Col, Form,Button } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import "./CreateForm.scss"

export const CreateForm = () => {
  return (
    <div>
      <Row className="mr-0" >
        <Col lg={3} md={12} className="pr-0 sidebarCol">
          <Sidebar />
        </Col>
        <Col lg={9} md={12} className=" ">
          <Form>
            <Row className="MainForm px-3 ">
              <Col lg={6} md={12} sm={12} >
                <Form.Group controlId="formBasicTitle" className="my-3">
                  <Form.Label className="myFormLabel">Job Title</Form.Label>
                  <Form.Control type="text" placeholder="Java Developer" required />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="my-3">
                  <Form.Check
                  className="myFormLabel"
                    type="checkbox"
                    label=" Employee can work remotely"
                    
                  />
                </Form.Group>
                <Row >
                  <Col lg={6} md={6} sm={12}>
                  <Form.Group controlId="formBasicDomain" className="my-3">
                    <Form.Label className="myFormLabel">Domain</Form.Label>
                    <Form.Control type="text" placeholder="Development" required/>
                  </Form.Group>

                  <Form.Group controlId="formBasicDomain" className="my-3">
                    <Form.Label className="myFormLabel">Experiance</Form.Label>
                    <Form.Control type="text" placeholder="Mid-Level" required/>
                  </Form.Group>

                  <Form.Group controlId="formBasicDomain" className="my-3">
                    <Form.Label className="myFormLabel">No. of Positions</Form.Label>
                    <Form.Control type="text" placeholder="no of positions" required/>
                  </Form.Group>
                  </Col>
                
                  <Col lg={6} md={6} sm={12}>
                  <Form.Group controlId="formBasicType"  className="my-3">
                    <Form.Label className="myFormLabel">Job Type</Form.Label>
                    <Form.Control as="select" required>
                      <option>-</option>
                      <option>Full-time</option>
                      <option>Part-time</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formBasicDomain" className="my-3">
                    <Form.Label className="myFormLabel">No. of Positions</Form.Label>
                    <div className="d-flex justify-content-between">
                    
                      <Form.Control type="text" placeholder="" required/>
                      <p className="mx-1 myFormLabel">to</p>
                     
                      <Form.Control type="text" placeholder="" required/>
                      <p className="ml-1 myFormLabel">LPA</p>
                      
                    </div>
                  </Form.Group>

                  <Form.Group controlId="formBasicDomain" className="my-3">
                    <Form.Label className="myFormLabel">Date of Joining</Form.Label>
                    <Form.Control type="date" placeholder="" required/>
                  </Form.Group>
                  
                  </Col>
                 
                </Row>

                <Form.Group controlId="formBasicTitle" className="my-3">
                  <Form.Label className="myFormLabel">Description</Form.Label>
                  <Form.Control  as="textarea" rows={5} placeholder="" required/>
                </Form.Group>

              </Col>
              <Col lg={6} md={12} sm={12} >
                <Row>
                  <Col lg={6} md={6} sm={12} >
                  <Form.Group controlId="formBasicType"  className="my-3">
                    <Form.Label className="myFormLabel">Assign to</Form.Label>
                    <Form.Control as="select" required>
                      <option>choose</option>
                      <option>SaiBabu</option>
                      <option>Elen</option>
                    </Form.Control>
                  </Form.Group>
                  </Col>
                  <Col lg={6} md={6} sm={12} >
                  <Form.Group controlId="formBasicType"  className="my-3">
                    <Form.Label className="myFormLabel">Client</Form.Label>
                    <Form.Control as="select" required >
                      <option>choose</option>
                      <option>J.K</option>
                      <option>Google</option>
                    </Form.Control>
                  </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formBasicTitle" className="my-3">
                  <Form.Label className="myFormLabel">Job Responsiblities</Form.Label>
                  <Form.Control  as="textarea" rows={5} placeholder="" required/>
                </Form.Group>

                <Form.Group controlId="formBasicTitle" className="my-3">
                  <Form.Label className="myFormLabel">Benefits</Form.Label>
                  <Form.Control  as="textarea" rows={3} placeholder="" required/>
                </Form.Group>

               <div className="text-right">
               <Button className="my-3" type="submit">
                  Save
                </Button>
               </div>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
