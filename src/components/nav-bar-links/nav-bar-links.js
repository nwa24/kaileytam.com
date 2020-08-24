import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import InstagramLogo from 'components/instagram-logo';
import NavBarCart from 'components/nav-bar-cart';

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  font-family: 'Montserrat Semibold';
  letter-spacing: 2px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: '.';
    color: transparent;
    height: 1px;
  }

  :hover {
    color: #e98f80;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`;
export default function NavbarLinks() {
  return (
    <>
      <NavItem to="/" activeClassName="active">
        Home
      </NavItem>
      <NavItem to="/blog" activeClassName="active">
        Blog
      </NavItem>
      <NavItem to="/contact" activeClassName="active">
        Contact
      </NavItem>
      <NavItem to="/shop" className="shopLink" activeClassName="active">
        Shop
      </NavItem>
      <InstagramLogo />
      <NavBarCart />
    </>
  );
}
