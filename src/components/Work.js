import React from "react"
import styled from "styled-components"
function Work() {
  return (
    <workContainer>
      <workHeading>
        <h1> Work </h1>
        <h5>A selection of my web development projects</h5>
      </workHeading>
      <workWrapper></workWrapper>
    </workContainer>
  )
}
export default Work

const workContainer = styled.div`
  min-height: 100vh;
  padding: 5re calc((100 vw -1300px) / 2);
  background: #3e92a3;
  color: #fff;
`

const workHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const workWrapper = styled.div``
