import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <h1>Coded by Ikeoluwa</h1>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background-color: #000;
    color: #fff;
    width: 100%;
    font-size: 8px;
    font-weight: 700;

    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
`