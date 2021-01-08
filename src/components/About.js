import React from "react"
import imgSRC from "../images/abir.jpg"
import styled from "styled-components"
function About() {
  return (
<<<<<<< HEAD
    <Container id="about">
      <Imagecontainer>
        <Image src={imgSRC} alt="avatar" />
        <Textcontainer>
          <HI>Hi,</HI>
          <Text>
            I'm Abir, a software engineer. I am passionate about web development
            and particularly javascript frameworks for fullstack development. I
            love to learn new skills and techniques that inspire me to create
            cool things.
          </Text>
        </Textcontainer>
      </Imagecontainer>
=======
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
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
    </Container>
  )
}

export default About

const Container = styled.div`
<<<<<<< HEAD
  height: 730px;
  padding-top: 150px;
  background-color: #dfe0d4;
`
const Textcontainer = styled.div`
  width: 700px;
=======
=======
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
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
<<<<<<< HEAD
`
=======
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
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
