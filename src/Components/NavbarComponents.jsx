import { React, useState } from "react";
import {
  Button,
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Images } from "../Images/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser, faGear, faList } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt   } from "@fortawesome/free-solid-svg-icons";



import "./Navbar.scss";

const NavbarComponents = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  

  return (
    <div>
      <Navbar expand="lg" className="topNavbar">
        <Navbar.Brand href="/">
          <img
            src={Images.Logo}
            width="100%"
            height="100%"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <FormControl
                placeholder="Search for.."
                className="border-0 bg-light"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <Button className="search-button">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
            </div>
          </Form>
        </Navbar.Collapse>

        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item className="align-self-center">
            <FontAwesomeIcon icon={faBell} className="bell " />
          </Nav.Item>
          <Nav.Item className="align-self-center">
            <div class="topbar-divider d-none d-sm-block"></div>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown
              title={
                <div className="profileDrop" onClick={handleDropdownToggle}>
                  <span className="profileTitle mx-2">Username</span>
                  <img
                    width="32px"
                    src={Images.Profile}
                    alt="User Profile"
                    className="profileImage"
                  />
                </div>
              }
              id="basic-nav-dropdown"
              show={dropdownOpen}
              className="profileDrop"
            >
              <NavDropdown.Item href="#action/3.1">
                <div className="d-flex">
                  <FontAwesomeIcon icon={faUser} className="mx-2 bell" />
                  <p>Profile</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <div className="d-flex">
                  <FontAwesomeIcon icon={faGear} className="mx-2 bell"  />
                  <p>Settings</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <div className="d-flex">
                  <FontAwesomeIcon icon={faList} className="mx-2 bell"  />
                  <p>Activity</p>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <div className="d-flex">
                  <FontAwesomeIcon icon={faSignOutAlt} className="mx-2 bell"  />
                  <p>Logout</p>
                </div>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
        </Nav>
      </Navbar>

       
      
    </div>
  );
};

export default NavbarComponents;
