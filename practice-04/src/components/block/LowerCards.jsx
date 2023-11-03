import React from 'react'
import style, { styled } from 'styled-components'
import Card from './Card'


const LowerCards = () => {
  return (
    
    <Container>

        <Overview><h2>Overview-Today</h2></Overview>
        
        <Wrapper>

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </Wrapper>
    </Container>
  )
}

export default LowerCards

const Overview = styled.div`
    margin: 15px 0;
`

const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`
    background-color: aqua;
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

