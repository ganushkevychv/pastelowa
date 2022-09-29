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
  import logoColor from '../images/logoColor100x64.png'
import 'bootstrap/dist/css/bootstrap.min.css';

 

const Menu = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    const color = {
        color:"white"
    }
   

return(
<div>
      <Navbar {...args} expand="xl" dark="true">
        <NavbarBrand style={color} href="/"><img src={logoColor} className="logo-mono" alt="logoMono"/></NavbarBrand>
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