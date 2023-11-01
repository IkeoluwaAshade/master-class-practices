import React from 'react'
import styled from 'styled-components'

const Seervice = () => {
  return (
    <Container>
        <Wrapper>
            <h1>
                Trade <br />
                Cryptocurrency <br />
                effortlessly <br />
            </h1>

            <p>
                With a few taps on your <br />
                smartphone, you can securely <br /> and efficiently trade a variety of digital assets.
                <br />
                <br />
                <br />
                We buy
            </p>
        </Wrapper>
    </Container>
  )
}

export default Seervice

const Container = styled.div`
  /* background-color: purple; */
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
    /* background-color: red; */
    width: 85%;

    
`
