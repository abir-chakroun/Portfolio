import React from "react"
import imgSRC from "../images/abir.jpg"
import styled from "styled-components"
function About() {
  return (
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
const Textcontainer = styled.div`
  width: %;
  margin: auto;
`
const HI = styled.h1`
   {
    font-size: 4em;
    font-family: helvetica;
    font-weight: 700;
    color: #3e92a3;
    width: 80%;
    margin: auto;
    @media screen and (max-width: 900px) h1 {
      font-size: 3em;
    }
  }
`
const Imagecontainer = styled.div`
  display: flex;
  width: 800px;
  justify-content: space-between;
  align-items: center;
  margin: 50px auto;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`
const Text = styled.h5`
  fonst-size: 20px;
  font-weight: 500;
  max-width: 80%;
  margin: auto;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`
