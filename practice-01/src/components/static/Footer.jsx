import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <h1>Coded by Ikeoluwa Ashade</h1>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #00235b;
    color: #fff;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: fixed;
`