import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../images';

function Header() {
  return (
    <Container>
      <PageName>
        <img src={Logo} alt="" />
      </PageName>
      <NavBar></NavBar>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  min-width: 673px;
  background-color: aquamarine;
`;

const PageName = styled.div`
  width: 300px;
  height: 10vh;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  & img {
    width: 150px;
    object-fit: contain;
  }
  /* @media screen and (max-width: 1308px) {
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
  } */
`;

const NavBar = styled.div`
  width: 100%;
  height: 10vh;
`;

export default Header;
