import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
function Header() {
  return (
    <Nav>
      <NavContainer>
        <NavLink to="/"> HOME </NavLink>
        <Bars />
        <NavMenu>
          {menuData.map((item, i) => (
            <NavLink key={i} to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  )
}
export default Header
const Nav = styled.nav`
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
  position: relative;
  padding: 0;
`
const NavContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0;
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`
const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 10px;
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
