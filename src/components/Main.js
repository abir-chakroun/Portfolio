import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { personalData } from "../data/datafile"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
function Main() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "pexels-luis-gomes-546819.jpg" }) {
        id
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div id="main">
      <Container>
        <BackgroundImg
          alt="background"
          src={data.file.childImageSharp.fluid.src}
          fluid={data.file.childImageSharp.fluid}
        />
      </Container>
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
  )
}
export default Main

const Container = styled.div`
  height: 100vh;
  text-align: center;
  position: relative;
}
`
const BackgroundImg = styled(Img)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
const Caption = styled.div`
  top: 35%;
  position: absolute;
  width: 100%;
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
  }
`
