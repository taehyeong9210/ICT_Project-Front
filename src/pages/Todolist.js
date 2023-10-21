import React from 'react';
import LayoutComponent from '../component/LayoutComponent';

const TodolistComponent = () => {
  return <>Todo-list</>;
};

const Todolist = () => {
  return (
    <div>
      <LayoutComponent component={<TodolistComponent />} />
    </div>
  );
};

export default Todolist;
