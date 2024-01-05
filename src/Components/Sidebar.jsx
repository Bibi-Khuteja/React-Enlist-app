import React from 'react'
import "./Sidebar.scss"
import {
    Nav,
    NavDropdown,
  } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUser,faUsers,faDiagramProject,faClock } from "@fortawesome/free-solid-svg-icons";
import {  faGaugeHigh,faInbox,faCalendar,faEnvelopesBulk,faExternalLinkAlt    } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div>
         <Nav defaultActiveKey="/home" className="flex-column sidebar p-3" >
          <Nav.Link href="/home" className="d-flex py-3  NavLinkHover">
            <FontAwesomeIcon icon={faGaugeHigh}  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Overview</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex  py-3 NavLinkHover">
            <FontAwesomeIcon icon={faInbox}  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Inbox</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex py-3 NavLinkHover">
          <FontAwesomeIcon icon={faCalendar }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Calender</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex py-3 NavLinkHover">
          <FontAwesomeIcon icon={faLinkedin }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Social</p>
          </Nav.Link>
          <NavDropdown.Divider className="sidebarText" />
          {/* second */}
          <p className="mb-3 sidebarTitle">RECRUITMENTS</p>
          <Nav.Link href="/home" className="d-flex py-3 NavLinkHover">
            <FontAwesomeIcon icon={faEnvelopesBulk }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Job Indent</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex  py-3 NavLinkHover">
            <FontAwesomeIcon icon={faUser}  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Candidates</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex  py-3 NavLinkHover">
          <FontAwesomeIcon icon={faExternalLinkAlt  }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Referals</p>
          </Nav.Link>
          <NavDropdown.Divider className="sidebarText" />
          {/* third */}
          <p className="mb-3 sidebarTitle">ORGANIZATIONS</p>
          <Nav.Link href="/home" className="d-flex py-3 NavLinkHover">
            <FontAwesomeIcon icon={faUsers }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Employees</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex  py-3 NavLinkHover">
            <FontAwesomeIcon icon={faDiagramProject }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Roles</p>
          </Nav.Link>
          <Nav.Link href="/home" className="d-flex  py-3 NavLinkHover">
          <FontAwesomeIcon icon={faClock }  className="mx-3 align-self-center sidebarIcon"/>
            <p className="mb-0 sidebarText">Clients</p>
          </Nav.Link>
          <NavDropdown.Divider className="sidebarText" />

        </Nav>
    </div>
  )
}

export default Sidebar