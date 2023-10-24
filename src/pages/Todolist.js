import React from 'react';
import LayoutComponent from '../component/LayoutComponent';
import Tab from '../component/TabComponent';
import styled from 'styled-components';

const TodolistComponent = () => {
  return (
    <>
      <Tab />
    </>
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
