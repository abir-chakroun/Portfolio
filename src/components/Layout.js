import React from "react"
import Header from "./Header"
import Main from "./Main"
import About from "./About"
import Contact from "./Contact"
import Work from "./Work"
import { createGlobalStyle } from "styled-components"
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css"
=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
<<<<<<< HEAD
  padding: 0;
  box-sizing: border-box;
  }
  body{
    overflow-x: hidden
=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
   padding: 0;
    box-sizing: border-box;
  }
`
export default function layout() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
      <Work />
      <Contact />
    </div>
  )
}
