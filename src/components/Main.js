import React from "react"
import styled from "styled-components"
<<<<<<< HEAD
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import image from "../images/pexels-luis-gomes-546819.jpg"
import { personalData } from "../data/datafile"

console.log(personalData.linkedin)
function Main() {
  return (
    <div id="main">
      <Container />
      <Caption>
        <Title> Abir Chakorun </Title>
        <SubTitle> FULLSTACK WEB DEVELOPER</SubTitle>
        <IconsWrapper>
          <a href={personalData.github} target="_blank">
            <IconGithub />
          </a>
          <a href={personalData.linkedin} target="_blank">
            <IconLinkedin />{" "}
          </a>

          <a href="#contact" style={{ textDecoration: "none" }}>
            <IconMail />
          </a>
        </IconsWrapper>
      </Caption>
    </div>
  )}
export default Main

const Container = styled.div`
  height: 700px;
  text-align: center;
  position: relative;
 background-image: url(${image});
 filter: blur(7px)grayscale(100%) ;
 background-size: cover;
 transform: scale(1.1); 
}
`
const Caption = styled.div`
  position: absolute;
  bottom: 30%;
  left: 30%;
  text-align: center;
`
const Title = styled.h1`
  font-size: 5em;
  line-height: 90px;
  margin: 18px;
  font-family: papyrus;
  font-weight: 900;
  color: #3e92a3;
  @media screen and (max-width: 900px) h1 {
    font-size: 3.3em;
    margin: 0;
  }
`
const SubTitle = styled.h2`
  font-family: monospace;
  font-size: 1.8rem;
  color: #f5f5f5;
  font-weight: 300;
  letter-spacing: 3px;
`
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const IconGithub = styled(FaGithub)`
  color: #fff;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: 0.2 ease;
  }
`
const IconLinkedin = styled(FaLinkedin)`
  color: #fff;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: 0.2 ease;
  }
`
const IconMail = styled(GoMail)`
  color: #fff;
  width: 30px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: 0.2 ease;
=======
function Main() {
  return (
    <Container>
      <Title> Abir Chakorun </Title>
      <SubTitle> SOFTWARE DEVELOPER</SubTitle>
    </Container>
  )
}

export default Main

const Container = styled.div`
  height: 650px;
  padding-top: 250px;
  text-align: center;
  position: relative;
  object-fit: contain;
  background: linear-gradient(230deg, #111111, #2a2a2a, #313131, #4b4b4b, #4e4e4e);
    background-size: 1000% 1000%;

    -webkit-animation: AnimationName 59s ease infinite;
    -moz-animation: AnimationName 59s ease infinite;
    -o-animation: AnimationName 59s ease infinite;
    animation: AnimationName 59s ease infinite;
}
`
const Title = styled.h1`
   {
    font-size: 5em;
    line-height: 90px;
    margin: 18px;
    font-family: papyrus;
    font-weight: 900;
    color: #3e92a3;
    @media screen and (max-width: 900px) h1 {
      font-size: 3.3em;
      margin: 0;
    }
  }
`
const SubTitle = styled.h2`
   {
    font-family: monospace;
    font-size: 1.8rem;
    color: #f5f5f5;
    font-weight: 300;
    letter-spacing: 3px;
  }
  @-webkit-keyframes AnimationName {
    0% {
      background-position: 52% 0%;
    }
    50% {
      background-position: 49% 100%;
    }
    100% {
      background-position: 52% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 52% 0%;
    }
    50% {
      background-position: 49% 100%;
    }
    100% {
      background-position: 52% 0%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 52% 0%;
    }
    50% {
      background-position: 49% 100%;
    }
    100% {
      background-position: 52% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 52% 0%;
    }
    50% {
      background-position: 49% 100%;
    }
    100% {
      background-position: 52% 0%;
    }
>>>>>>> 5ac70ef3ca7f6a5b908436783788fdf75f0753c9
  }
`
