import React from "react"
import styled from "styled-components"
import { FaRegFileAlt } from "react-icons/fa"
import CV from "../images/AbirChakroun_cv.png"
function About() {
  return (
    <Container id="about">
      <TextContainer>
        <Hi>Hi,</Hi>
        <Text>
          I'm Abir, a full-stack software engineer.
          <br />
          I am passionate about web development and I work mostly with
          javascript and typescript. I enjoy developing user friendly and
          efficient apps.
          <br />
          I am very motivated and eager to learn new things, new design patterns
          and new tools that make our life easier as developers but also create
          cool things.
          <br />
        </Text>
        <Button
          onClick={() => {
            window.open(CV)
          }}
        >
          Curriculum-Vitae <FaRegFileAlt />
        </Button>
      </TextContainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  height: 100vh;
  background-color: #dfe0d4;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TextContainer = styled.div`
  margin: auto;
  width: 70%;
`
const Hi = styled.h1`
  font-size: 4em;
  font-family: helvetica;
  font-weight: 700;
  color: #3e92a3;
  margin: auto;
  @media screen and (max-width: 700px) {
    font-size: 3em;
  }
  @media all and (max-width: 552px) {
    font-size: 1.5em;
    margin: 0;
  }
  @media all and (max-width: 293px) {
    font-size: 18px;
  }
`
const Text = styled.h5`
  font-size: 20px;
  font-weight: 500;
  @media all and (max-width: 552px) {
    font-size: 16px;
  }
  @media all and (max-width: 293px) {
    font-size: 14px;
  }
`

const Button = styled.button`
  border: 1px solid #3e92a3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: none;
  color: #3e92a3;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 8px 0;
  width: 180px;
  border-radius: 10px;
  margin: 30px 0 0;
  @media all and (max-width: 552px) {
    font-size: 16px;
  }
  @media all and (max-width: 293px) {
    font-size: 14px;
  }
  &:hover {
    border: 1px solid transparent;
    background: #3e92a3;
    color: #dfe0d4;
    transition: 0.4s all-ease;
  }
  &:focus {
    outline: none;
  }
`
