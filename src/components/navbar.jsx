import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Instagram from "../assets/instagram.png";
import Spotify from "../assets/spotify.png";
import Catrala from "../assets/catrala-name.png";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="white" light expand="md">
        <NavbarBrand className="brandlogo" href="#init">
          <img className="brandlogo" src={Catrala} alt="logo_Catrala"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto nav-items" navbar>
            <NavItem>
              <NavLink href="#rings">Anillos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#earrings">Aros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#neckles">Collares</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#headbands">Cintillos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#hairwrap">Tiburones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#bands">Colets</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#hairclips">Pinches</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#bracelets">Pulseras</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#sunglasses">Lentes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#straps">Straps</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#recomendations">Recomendaciones</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
          <NavbarBrand href="https://www.instagram.com/catralaaccesorios/">
            <img className="rrss" src={Instagram} alt="instagram"/>
          </NavbarBrand>
          <NavbarBrand href="https://open.spotify.com/playlist/4qpcdMtdlMW7HWCAJDyDYP">
          <img className="rrss" src={Spotify} alt="spotify" />

          </NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;