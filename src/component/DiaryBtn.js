import styled from 'styled-components';
import React, { useState } from 'react';

const DiaryButton = styled.div`
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

const DiaryBtn = () => {
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
    <DiaryButton
      onClick={changeBackgroundColor}
      style={{
        backgroundColor: backgroundColor.backgroundColor,
        color: backgroundColor.color,
      }}
    >
      Diary
    </DiaryButton>
  );
};

export default DiaryBtn;
