import React from 'react';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/responsive.css';
import '../assets/css/style.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';



const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const bar1 = {
     width: "100%",
     border: "0px gray",
     display: "flex",
     justifyContent: "center",
     padding: "0px",
     position: "relative",
     background: "#fff",
     boxShadow: "0 4px 5px -3px #ececec",
     borderBottom: "1px solid #dddddd"
   }

  return (
      <Navbar sticky={'top'} color="light" light expand="md" className="d-flex justify-content-center" fix>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <div style={bar1}>
         <Nav className="justify-content-center" navbar>
            <NavItem>
              <NavLink href="#services" onClick={toggle} >Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#clients" onClick={toggle}>Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#projects" onClick={toggle}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about" onClick={toggle}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="blog" onClick={toggle}>Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#contact" onClick={toggle}>Contact</NavLink>
            </NavItem>
          </Nav>
          </div>
        </Collapse>
      </Navbar>
  );
}



export default Navigation;
