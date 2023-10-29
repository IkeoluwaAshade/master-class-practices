import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
        <h1> This is the home page</h1>
    </Container>
  )
}

export default Home
const Container = styled.div`
    height: 300px;
    background-color: green;
    color: #fff;
`