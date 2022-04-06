import React from 'react';
import styled from 'styled-components';

function Section() {
  return (
    <SectionContainer>
      <Regist></Regist>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Regist = styled.div`
  width: 600px;
  height: 700px;
  background-color: beige;
`;

export default Section;
