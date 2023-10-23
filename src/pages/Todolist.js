import React from 'react';
import LayoutComponent from '../component/LayoutComponent';
import TodoBtn from '../component/TodoBtn';
import DiaryBtn from '../component/DiaryBtn';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  bottom: 225px;

  & > * {
    margin: 0;
  }

  & > *:not(:last-child) {
    border-right: 2px dotted lightgrey; /* 수직 구분선 스타일 및 색상 설정 */
  }
`;

const TodolistComponent = () => {
  return (
    <Container>
      <DiaryBtn />
      <TodoBtn />
    </Container>
  );
};

const Todolist = () => {
  return (
    <div>
      <LayoutComponent component={<TodolistComponent />} />
    </div>
  );
};

export default Todolist;
