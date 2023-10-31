import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Logo>Shawn Exchange</Logo>
            <Navigations>

              <Link to="/" >
                <Nav>About Us</Nav>                
              </Link>

              <Link to="/Service">
                <Nav>
                  Services
                </Nav>
              </Link>

              <Link to="/Faq">
                <Nav>
                  FAQ
                </Nav>
              </Link> 
            </Navigations>

            <Kyc>

              <Link to="/Login" >
                <Login-button>Login</Login-button>
              </Link>

              <Link to="/Signup">
                <Create-Acc>Create Account</Create-Acc>
              </Link> 
            </Kyc>
        </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: gold;
    height: 70px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.div`
    /* background-color: brown; */
    color: #fff;
    width: 85%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.div`
    font-size: 21px;
    font-weight: 700;
`

const Navigations = styled.div`
    display: flex;
`

const Nav = styled.div`
  margin: 0 8px;
  font-weight: 700;
  cursor: pointer;
`

const Kyc = styled.div`
  /* background-color: orange; */
  margin: 0 12px;
  width: 11rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`