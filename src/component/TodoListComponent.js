import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  width: 750px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const InputTag = styled.input`
  width: 500px;
  height: 34px;
  padding: 0 10px;
  border: 2px solid #4682b4;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
`;

const ButtonTag = styled.button`
  margin-left: 10px;
  width: 100px;
  height: 38px;
  background-color: #4682b4;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: #356b9d;
  }
`;

const TodolistComponent = () => {
  return (
    <InputContainer>
      <InputTag type="text" placeholder="할 일을 입력하세요" />
      <ButtonTag>등록</ButtonTag>
    </InputContainer>
  );
};

export default TodolistComponent;
