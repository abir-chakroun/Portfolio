import React from "react"

export default function Contact() {
  return (
    <Container id="contact">
      <ContactHeading>
        <h1> Work </h1>
      </ContactHeading>
      <ContactWrapper></ContactWrapper>
    </Container>
  )
}
const Container = styled.div`
  height: 730px;
  padding-top: 150px;
  background-color: #313131; ;
`
const ContactHeading = styled.div`
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
const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`
  return <div></div>

