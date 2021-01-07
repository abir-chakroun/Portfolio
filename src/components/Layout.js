import React from "react"
import Header from "./Header"
import Main from "./Main"
import About from "./About"
import Contact from "./Contact"
import Work from "./Work"
import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body{
    overflow-x: hidden
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
