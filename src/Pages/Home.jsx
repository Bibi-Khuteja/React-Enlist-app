import React from "react";
import { Nav, Row, Col, Dropdown,Card } from "react-bootstrap";
import Sidebar from "../Components/Sidebar";
import { Link } from "react-router-dom";
import { NavigationPath } from "../Navigation/Navigation";
import "./Home.scss";

export const Home = () => {
  return (
    <div>
      <Row className="m-0">
        <Col lg={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>
          <div>
            <Nav className="jobsNavbar mt-4">
              <Nav.Item>
                <Nav.Link href="activejobs" className="active">
                  ACTIVE JOBS
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="inactive" className="inactive inctiveHoverLink">
                  INACTIVE JOBS
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <div>
            <Row>
              <Col lg={3} md={12} sm={12}>
                <p className="my-3 numberActivjob">9 Active Jobs</p>
              </Col>
              <Col lg={2} md={12} sm={12} className="p-0 sortColumn">
                <div className="d-flex">
                  <p className="filterTitle my-4">Sort By:</p>
                  <Dropdown className="my-3 p-0">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="sortDropButton  ml-1 p-0 my-2"
                    >
                      Date
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
              <Col lg={2} md={12} sm={12} className="pl-1 sortColumn">
                <div className="d-flex">
                  <p className="filterTitle my-4">Status:</p>
                  <Dropdown className="my-3">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="sortDropButton  ml-1 p-0 my-2"
                    >
                      All
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
              <Col lg={2} md={12} sm={12} className="p-0 sortColumn">
                <div className="d-flex">
                  <p className="filterTitle my-4">Client:</p>
                  <Dropdown className="my-3">
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="sortDropButton ml-1 p-0 my-2"
                    >
                      Adobe
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
              <Col lg={3} md={12} sm={12} className="createnewButton">
                <div className="text-right my-4 ">
                  <Link to={NavigationPath.CreateNew} className="createButton">CREATE NEW +</Link>
                </div>
              </Col>
            </Row>
          </div>
          {/* cards */}
          <div>
            <Row>
              <Col lg={3} md={6} sm={12}>
                <Card className="shadow" >
                  <Card.Body>
            
                    <p className="cardText">
                     Java Developer
                    </p>
                    <p className="cardTitle">
                      Developer
                    </p>
                    <p className="cardText">
                     Candidates:
                    </p>
                    <div className="listDiv ">
                    <ul className="d-flex justify-content-around listNumber">
                      <li className="listText">20</li>
                      <li  className="listText">5</li>
                      <li  className="listText">5</li>
                    </ul>
                    <ul className="d-flex justify-content-around listNumber">
                      <li  className="listText">Total</li>
                      <li  className="listText">Interview</li>
                      <li  className="listText">Hired</li>
                    </ul>
                    </div>
                    <p className="cardText">
                     Fulltime
                    </p>
                    <hr className="px-2 py-0 m-0 "/>
                    <p className="cardText">
                     Posteds
                    </p>
                    <Card.Link className="cardLink" href="#">See Details</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <Card   className="shadow">
                  <Card.Body>
            
                    <p className="cardText">
                     Python Developer
                    </p>
                    <p className="cardTitle">
                      Developer
                    </p>
                    <p className="cardText">
                     Candidates:
                    </p>
                    <div className="listDiv ">
                    <ul className="d-flex justify-content-around listNumber">
                      <li className="listText">20</li>
                      <li  className="listText">5</li>
                      <li  className="listText">5</li>
                    </ul>
                    <ul className="d-flex justify-content-around listNumber">
                      <li  className="listText">Total</li>
                      <li  className="listText">Interview</li>
                      <li  className="listText">Hired</li>
                    </ul>
                    </div>
                    <p className="cardText">
                     Fulltime
                    </p>
                    <hr className="px-2 py-0 m-0 "/>
                    <p className="cardText">
                     Posteds
                    </p>
                    <Card.Link className="cardLink" href="#">See Details</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};
