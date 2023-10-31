import React from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <Container>
        <h2>Create an Account with us today</h2>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Enter your email here..." />
        <Input type="password" placeholder="Password" />
        <Button>Create Account</Button>
    </Container>
  )
}

export default Signup

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`

const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
`

const Button = styled.button`
    background-color: #ccae01be;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-weight: 800;
    font-size: 21px;
`