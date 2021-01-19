import React, { useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { GoMail } from "react-icons/go"
import { FaPhone } from "react-icons/fa"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [alert, setAlert] = useState("")
  const [error, setError] = useState("")

  const sendEmail = e => {
    e.preventDefault()
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    )
      setError("Please fill in all the required fields")
    else {
      emailjs
        .sendForm(
          "service_ka7qglo",
          "template_v86qe8q",
          e.target,
          "user_YxvRoyJzs1qtjoB3f4Bqp"
        )
        .then(
          result => {
            console.log(result)
            if (result.status === 200) {
              setAlert("Your message is sent. Thank you!")
              setTimeout(function () {
                setAlert("")
                setName("")
                setEmail("")
                setMessage("")
                setSubject("")
              }, 2000)
            }
          },
          error => {
            console.log(error.text)
          }
        )
    }
  }

  const cancelEmail = () => {
    setError("")
    setName("")
    setEmail("")
    setMessage("")
    setSubject("")
  }
  return (
    <Container id="contact">
      <ContactHeading>
        <h1> CONTACT ME </h1>
        <Info>
          <p>
            {" "}
            <GoMail style={{ color: "#111", width: "30px" }} />{" "}
            abir.chakroun@ensi-uma.tn{" "}
          </p>{" "}
          <p>
            <FaPhone
              style={{ color: "#111", width: "30px", marginLeft: "50px" }}
            />{" "}
            +216 54341094
          </p>
        </Info>
        {alert.length > 0 && <Alert>{alert}</Alert>}
        {error.length > 0 && <Error>{error}</Error>}
      </ContactHeading>
      <ContactWrapper>
        <form onSubmit={sendEmail}>
          <MaxContactWrapper>
            <Input
              placeholder="Name *"
              maxLength={200}
              name="name"
              onChange={e => {
                setName(e.target.value)
                setError("")
              }}
              value={name}
            />
            <Input
              placeholder="Email *"
              maxLength={200}
              name="email"
              onChange={e => {
                setEmail(e.target.value)
                setError("")
              }}
              value={email}
            />
            <Input
              placeholder="Subject *"
              maxLength={500}
              name="subject"
              onChange={e => {
                setSubject(e.target.value)
                setError("")
              }}
              value={subject}
            />
          </MaxContactWrapper>
          <Textarea
            placeholder="Message *"
            multiple
            maxLength={3000}
            name="message"
            value={message}
            onChange={e => {
              setMessage(e.target.value)
              setError("")
            }}
          />
          <ButtonWrapper></ButtonWrapper>
          <Button type="submit" value="Send"></Button>
          <Button type="text" value="Cancel" onClick={cancelEmail}></Button>
        </form>
      </ContactWrapper>
      <Footer>
        <p>
          &copy;{new Date().getFullYear()} Designed & Developped by Abir
          Chakroun
        </p>
      </Footer>
    </Container>
  )
}
const Container = styled.div`
  min-height: 100vh;
  background-color: #dfe0d4;
  position: relative;
  padding-bottom: 90px;
`
const ContactHeading = styled.div`
  padding: 50px 0;
  text-align: center;
  margin-bottom: 10px;
  h1 {
    font-size: 3.6em;
    font-family: Roboto Slab, serif;
    color: #3e92a3;
  }
  @media all and (max-width: 388px) {
    h1 {
      font-size: 25px;
    }
  }
`
const ContactWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  min-height: 400px;
  background: none;
  border-radius: 10px;
  text-align: center;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Input = styled.input`
  background: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #797979;
  padding: 0 0 10px 0;
  font-size: 14px;
  font-weight: 400;
  margin: 0 10px;
  color: #000;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 850px) {
    margin: 10px 0;
  }
`

const MaxContactWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const Textarea = styled.textarea`
  background: none;
  border: none;
  border-bottom: 1px solid #797979;
  padding: 0 0 10px 0;
  margin: 30px 0;
  font-size: 14px;
  font-weight: 400;
  width: calc(100% - 20px);
  color: #000;
  &:focus {
    outline: none;
  }
  height: 165px;
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 140px;
  }
`
const Button = styled.input`
  border: 1px solid #3e92a3;
  background: none;
  color: #3e92a3;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  padding: 8px 0;
  width: 180px;
  border-radius: 10px;
  margin: 20px 10px;
  &:hover {
    border: none;
    background: #3e92a3;
    color: #dfe0d4;
    transition: 0.4s all-ease;
  }
  &:focus {
    outline: none;
  }
`

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  padding-top: 10px;
  height: 50px;
  width: 100%;
  background: #313131;
  text-align: center;
  color: #fff;
`
const Alert = styled.div`
  background-color: none;
  width: 100%;
  margin: auto;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #5bad6e;
  position: absolute;
  top: 165px;
`
const Error = styled.div`
  background-color: none;
  width: 100%;
  margin: auto;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: #f40e0e;
  position: absolute;
  top: 165px;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Info = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  @media all and (max-width: 480px) {
    display: block;
    text-align: center;
  }
`
