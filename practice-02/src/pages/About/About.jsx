import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>

        <HeroSection>
            <h1>
                Trade Gift <span>Cards</span> <br />
                with ease <br />
            </h1>
        

            <p>
                Enjoy a seamless and hassle free experience, <br/>
                trading your gift cards with <br />
                The Shawn Business Empire. <br />
                        
            </p>

            <GetStarted>Get Started</GetStarted>
        </HeroSection>

        
    </Container>
  )
}

export default About

const Container = styled.div`
    /* background-color: #00235b; */
    color: #000;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const HeroSection = styled.div`
    /* background-color: aqua; */
    width: 85%;
`

const GetStarted = styled.button`
    background-color: gold;
    color: #fff;
    padding: 12px;
    border-radius: 10px;
    width: 12rem;

    font-size: 21px;
    font-weight: 700;
`

