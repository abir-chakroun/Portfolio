import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import { FaGithub, FaLink } from "react-icons/fa"
import home from "../images/home.mp4"
import media0 from "../images/Média0.mp4"
import media1 from "../images/Média1.mp4"
import media2 from "../images/Média2.mp4"
import media3 from "../images/Média3.mp4"
import media4 from "../images/Média4.mp4"
function Work() {
  const data = useStaticQuery(graphql`
    query allWork {
      allWorkJson {
        edges {
          node {
            name
            link
            alt
            description
            keywords
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            vid {
              name
            }
          }
        }
      }
    }
  `)

  function getWork(data) {
    const workArray = []
    data.allWorkJson.edges.forEach((item, index) => {
      workArray.push(item)
    })
    return workArray
  }

  const displayData = getWork(data)
  console.log(displayData)

  return (
    <WorkContainer id="work">
      <WorkHeading>
        <h1> WORK </h1>
      </WorkHeading>
      <WorkWrapper>
        {displayData.map((item, index) =>
          item.node.img ? (
            <WorkCardContainer>
              <WorkCard key={index} interval={null}>
                {item.node.img.map((imgSrc, i) => (
                  <Carousel.Item key={i}>
                    <WorkImg
                      alt={item.node.alt}
                      src={imgSrc.childImageSharp.fluid.src}
                      fluid={imgSrc.childImageSharp.fluid}
                    />
                  </Carousel.Item>
                ))}
              </WorkCard>
              <WorkTitle
                onClick={() => {
                  window.open(item.node.link)
                }}
              >
                {item.node.name}
              </WorkTitle>

              <WorkInfo>
                {item.node.description} <br />
                {item.node.keywords}
              </WorkInfo>
              <IconsWrapper>
                <a href={item.node.github} target="_blank">
                  <IconGithub />
                </a>
                <a href={item.node.link} target="_blank">
                  <IconLink />{" "}
                </a>
              </IconsWrapper>
            </WorkCardContainer>
          ) : item.node.vid ? (
            <WorkCardContainer>
              <WorkCard interval={null}>
                <Carousel.Item key={0}>
                  <Video controls muted>
                    <source src={home} type="video/mp4" />
                  </Video>
                </Carousel.Item>
                <Carousel.Item key={0}>
                  <Video controls muted>
                    <source src={media0} type="video/mp4" />
                  </Video>
                </Carousel.Item>
                <Carousel.Item key={1}>
                  <Video controls muted>
                    <source src={media1} type="video/mp4" />
                  </Video>
                </Carousel.Item>
                <Carousel.Item key={2}>
                  <Video controls muted>
                    <source src={media2} type="video/mp4" />
                  </Video>
                </Carousel.Item>
                <Carousel.Item key={3}>
                  <Video controls muted>
                    <source src={media3} type="video/mp4" />
                  </Video>
                </Carousel.Item>
                <Carousel.Item key={4}>
                  <Video controls muted>
                    <source src={media4} type="video/mp4" />
                  </Video>
                </Carousel.Item>
              </WorkCard>
              <WorkTitle
                onClick={() => {
                  window.open(item.node.link)
                }}
              >
                {item.node.name}
              </WorkTitle>

              <WorkInfo>
                {item.node.description} <br />
                {item.node.keywords}
              </WorkInfo>
            </WorkCardContainer>
          ) : null
        )}
      </WorkWrapper>
    </WorkContainer>
  )
}
export default Work
const WorkContainer = styled.div`
  min-height: 100vh;
  background: #3e92a3;
  padding: 0 20px;
`

const WorkHeading = styled.div`
  padding-top: 50px;
  text-align: center;
  margin-bottom: 5rem;
  h1 {
    font-size: 3.6em;
    text-align: center;
    font-family: Roboto Slab, serif;
    color: #dfe0d4;
  }
`
const WorkCardContainer = styled.div`
  transition: 0.2s ease;
  width: 640px;
  &:hover {
    transform: scale(1.02);
  }
  min-height: 450px;
  margin-bottom: 20px;

  @media screen and (max-width: 690px) {
    transition: 0.2s ease;
    width: 450px;
    min-height: 390px;
  }
`

const WorkCard = styled(Carousel)`
  width: 630px;
  height: 325px;
  .carousel-indicators li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .carousel-control-prev {
    height: 70%;
    top: 40px;
  }
  .carousel-control-next {
    height: 70%;
    top: 40px;
  }

  @media screen and (max-width: 690px) {
    transition: 0.2s ease;
    width: 450px;
    height: 235px;
  }
`
const WorkImg = styled(Img)`
  min-width: 100%;
  min-height: 100%;
  border-radius: 6px;
`

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  height: 100%;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
const WorkTitle = styled.h1`
  font-size: 20px;
  color: #000;
  font-weight: 500;
  text-align: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const WorkInfo = styled.h1`
  font-size: 16px;
  color: #111;
  font-weight: 400;
  paddin-left: 5px;
  text-align: center;
`
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconGithub = styled(FaGithub)`
  color: #111;
  width: 25px;
  height: 25px;
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
    transition: 0.2 ease;
    color: #dfe0d4;
  }
`
const IconLink = styled(FaLink)`
  color: #111;
  width: 20px;
  height: 20px;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    transition: 0.2 ease;
    color: #dfe0d4;
  }
`
const Video = styled.video`
  width: 630px;
  height: 320px;
  border-radius: 6px;
  @media screen and (max-width: 690px) {
    transition: 0.2s ease;
    width: 450px;
    height: 235px;
  }
  &:focus {
    outline: none;
  }
`
