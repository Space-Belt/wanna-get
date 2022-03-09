import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <PageName>엄빠사주세요!</PageName>
      <NavBar></NavBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;

  border: 1px solid red;
`;

const PageName = styled.h1`
  width: 13vw;
  height: 10vh;
  line-height: 10vh;
  text-align: center;
  font-size: 1.5rem;
  @media screen and (max-width: 1308px) {
    font-size: 1.25rem;
  }
  @media screen and (max-width: 839px) {
    font-size: 1.15rem;
  }
  @media screen and (max-width: 772px) {
    font-size: 1.05rem;
  }
  @media screen and (max-width: 706px) {
    font-size: 1.02rem;
  }
  @media screen and (max-width: 685px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 685px) {
    font-size: 1rem;
  }
`;

const NavBar = styled.div`
  width: 87vw;
  height: 10vh;
`;

export default Header;
