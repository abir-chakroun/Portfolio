import React from "react"
import styled from "styled-components"
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
  }
`
