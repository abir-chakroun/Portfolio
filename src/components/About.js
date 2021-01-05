import React from "react"
import imgSRC from "../images/abir.jpg"
import styled from "styled-components"
function About() {
  return (
    <Container>
      <Imagecontainer>
        <Image src={imgSRC} alt="avatar" />
      </Imagecontainer>
      <Textcontainer>
        <HI>Hi,</HI>
        <Text>
          I'm Abir, a software engineer. I am passionate about web development
          and particularly javascript frameworks for fullstack development. I
          love to learn new skills and techniques that inspire me to create cool
          things.
        </Text>
      </Textcontainer>
    </Container>
  )
}

export default About

const Container = styled.div`
  height: 550px;
  background-color: #f5f5f5;
  padding: 20px;
`
const Textcontainer = styled.div`
  width: 80%;
  margin: auto;
`
const HI = styled.h1`
   {
    font-size: 4em;
    font-family: helvetica;
    font-weight: 700;
    color: #3e92a3;
    @media screen and (max-width: 900px) h1 {
      font-size: 3em;
    }
  }
`
const Text = styled.h1`
  font-size: 2em;
  font-family: helvetica;
  font-weight: 300;
`

const Image = styled.img`
  border-radius: 50%;
  height: 160px;
  object-fit: contain;
  box-shadow: inset 0 0 0.7em 0.7em white;
`
const Imagecontainer = styled.div`
  height: 160px;
  text-align: center;
  margin: 10px;
`
