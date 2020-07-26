import React, { useState } from "react"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import { navigate } from "gatsby"

const Navigation = styled.nav`
  height: 8vh;
  display: flex;
  background-color: #f7f3e9;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  margin: 0 auto;
  padding: 0 2vw;
  z-index: 2;
  align-self: center;

  a {
    color: #ca5743;
  }

  a.shopLink {
    border-radius: 25px;
    border: 2px solid #ca5743;
    padding: 15px;
    @media (max-width: 768px) {
      font-size: 15px;
      padding: 15px 70px 15px 70px;
      margin-top: 300px;
    }
  }

  @media (max-width: 768px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }

  .active {
    color: #e98f80;
    text-decoration: underline;
  }

  .instagramLogo {
    margin: 2vh;
    @media (max-width: 768px) {
      margin-top: 2.5vh;
    }
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 5vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #f7f3e9;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #ca5743;
  width: 30px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: #ca5743;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const HeaderTitle = styled.h1`
  text-transform: lowercase;
  margin-top: 18px;
  color: #2c422f;
  font-size: 50px;
  font-family: "Montserrat Medium";
  letter-spacing: 1px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 760px) {
    font-size: 40px;
    margin-top: 10px;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <HeaderTitle
        onClick={() => {
          navigate(`/`)
        }}
      >
        kaileytam
      </HeaderTitle>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
