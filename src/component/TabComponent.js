import React, { useState } from 'react';
import styled from 'styled-components';
import DiaryComponent from './DiaryComponent';
import TodoListComponent from './TodoListComponent';

const Container = styled.div.withConfig({ displayName: 'Container' })`
  display: flex;
  position: relative;
  width: 100%;
`;

const TabButton = styled.div.withConfig({ displayName: 'TabButton' })`
  text-decoration: none;
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
    height: 2px;
    background-color: #4682b4;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ContentContainer = styled.div.withConfig({
  displayName: 'ContentContainer',
})`
  position: relative;
  width: 100px;
  height: 100px;
`;

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('Diary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container>
        <TabButton
          onClick={() => handleTabClick('Diary')}
          active={activeTab === 'Diary'}
        >
          Diary
        </TabButton>
        <TabButton
          onClick={() => handleTabClick('Todo-List')}
          active={activeTab === 'Todo-List'}
        >
          Todo-List
        </TabButton>
      </Container>
      <ContentContainer>
        {activeTab === 'Diary' && <DiaryComponent />}
        {activeTab === 'Todo-List' && <TodoListComponent />}
      </ContentContainer>
    </>
  );
};

export default TabComponent;
