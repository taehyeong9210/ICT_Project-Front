import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  bottom: 226px;
`;

const TabButton = styled.div`
  width: 50%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  position: relative;
  font-weight: 600;
  color: ${(props) => (props.active ? 'white' : 'black')};
  background-color: ${(props) => (props.active ? '#4682b4' : '#ffdead')};
  transition: background-color 1s ease, color 0.3s ease;

  &::before {
    content: '';
    width: 100%;
    height: 3px; /* 선의 높이를 조절할 수 있습니다. */
    background-color: #4682b4; /* 선의 색상 설정 */
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0); /* 초기에는 선이 안 보이도록 설정합니다. */
    transform-origin: 0 50%;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1); /* 호버 시 선이 나타나도록 확장합니다. */
  }
`;

const Tab = () => {
  const [activeTab, setActiveTab] = useState('Diary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <TabButton
        active={activeTab === 'Diary'}
        onClick={() => handleTabClick('Diary')}
      >
        Diary
      </TabButton>
      <TabButton
        active={activeTab === 'Todo-List'}
        onClick={() => handleTabClick('Todo-List')}
      >
        Todo-List
      </TabButton>
    </Container>
  );
};

export default Tab;
