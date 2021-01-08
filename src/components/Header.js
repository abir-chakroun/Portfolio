<<<<<<< HEAD
import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/datafile"
function Header() {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 280
      if (isScrolled !== scroll) {
        setScroll(!scroll)
      }
    }

    document.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scroll])

  console.log(scroll)
  return (
    <Nav>
      {scroll ? (
        <NavScrollContainer>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {" "}
            HOME{" "}
          </NavLink>
          <Bars />
          <NavMenu>
            {menuData.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </NavLink>
            ))}
          </NavMenu>
        </NavScrollContainer>
      ) : (
        <NavContainer>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            HOME{" "}
          </NavLink>
          <Bars />
          <NavMenu>
            {menuData.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                {item.title}
              </NavLink>
            ))}
          </NavMenu>
        </NavContainer>
      )}
      </Nav>
      )
      }

=======
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
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
export default Header
const Nav = styled.nav`
  font-size: 1rem;
  font-weight: 500;
  z-index: 10;
  position: relative;
  padding: 0;
`
<<<<<<< HEAD

=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
const NavContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0;
<<<<<<< HEAD
  transition: 0.4s all-ease;
`

const NavScrollContainer = styled.div`
  position: fixed;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 0;
  background: #313131;
  transition: 0.4s all-ease;
=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
`

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
<<<<<<< HEAD
  &:hover {
    color: #3e92a3;
  }

=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
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
