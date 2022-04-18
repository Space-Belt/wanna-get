import React from 'react';
import styled from 'styled-components';

function RegistForm() {
  return (
    <>
      <FormRegist>
        <InputContainer>
          <Labels for="presentName">선물 이름</Labels>
          <Inputs
            id="presentName"
            type="text"
            placeholder="상품이름을 입력해주세요"
          />
        </InputContainer>
        <InputContainer>
          <Labels for="presentPrice">가격대</Labels>
          <Inputs
            id="presentPrice"
            type="number"
            placeholder="가격대를 입력해주세요"
          />
        </InputContainer>
        <InputContainer>
          <Labels for="presentPrice">선물 사유</Labels>
          <TextBox></TextBox>
        </InputContainer>
      </FormRegist>
    </>
  );
}

const FormRegist = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Labels = styled.label`
  width: 100px;
  font-size: 1.3rem;
`;

const Inputs = styled.input`
  width: 400px;
  height: 2.8rem;
  padding-left: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const TextBox = styled.textarea`
  width: 400px;
  height: 200px;
  padding: 10px 10px 10px 13px;
  box-sizing: border-box;
  border: none;
  outline: none;
  resize: none;
  overflow: scroll;
  font-size: 1.2rem;
`;

export default RegistForm;
