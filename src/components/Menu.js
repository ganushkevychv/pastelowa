import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png'

 

const Menu = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const color = {
        color:"white"
    }
    const navbarMenuButton = {
        height: "2.5em",
        width: "2.5em",
        backgroundColor: "white"
    }

return(
<div>
      <Navbar {...args} expand="xl" dark="true">
        <NavbarBrand style={color} href="/">Finger Foods</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink style={color} href="/About/">O Nas</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color}  href="/Promo/">Oferta</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} href="/Galeria/">Galeria</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={color} href="/Contact/">Kontakt</NavLink>
            </NavItem>
             </Nav>
        </Collapse>
      </Navbar>
    </div>
)
}
export default Menu;