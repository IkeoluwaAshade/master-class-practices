import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <LoginContainer>
        <h2>Login</h2>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button>Login</Button>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
`

const Input = styled.input`
    padding: 10px;
    margin: 5px 0;
`

const Button =styled.button`
    background-color: gold;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
    font-size: 21px;
    font-weight: 700;
`