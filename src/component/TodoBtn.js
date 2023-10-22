import styled from 'styled-components';
import React, { useState } from 'react';

const TodoButton = styled.div`
  width: 50%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  color: black;
  font-weight: 600;

  &:hover {
    color: white;
  }
`;

const TodoBtn = () => {
  const [backgroundColor, setBackgroundColor] = useState({
    backgroundColor: '#ffdead',
    color: 'black',
  });

  const changeBackgroundColor = () => {
    setBackgroundColor({
      backgroundColor: '#6a5acd',
      color: 'white',
    });
  };

  return (
    <TodoButton
      onClick={changeBackgroundColor}
      style={{
        backgroundColor: backgroundColor.backgroundColor,
        color: backgroundColor.color,
      }}
    >
      Todo-List
    </TodoButton>
  );
};

export default TodoBtn;
