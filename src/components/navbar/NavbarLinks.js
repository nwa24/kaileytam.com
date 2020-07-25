import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import InstagramLogo from "./InstagramLogo"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  position: relative;
  font-family: "Montserrat Semibold";
  letter-spacing: 2px;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
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
`
const NavbarLinks = () => {
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
      {/* Temporarily disabling the shop page */}
      {/* <NavItem to="/shop" className="shopLink" activeClassName="active">
        Shop
      </NavItem> */}
      <InstagramLogo />
    </>
  )
}

export default NavbarLinks
