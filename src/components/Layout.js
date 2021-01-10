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
  input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #4f4f4f !important;
  font-size: 15px;
}
  }

  body{
  overflow-x: hidden;

  }

`
function Layout() {
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
export default Layout
