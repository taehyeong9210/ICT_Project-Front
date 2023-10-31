import React, { useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import TodoItems from './TodoItems';

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

const TodolistContainer = styled.div`
  width: 730px;
  margin-left: 10px;
  max-height: 370px;
  height: 370px;
  display: flex;
  border: 2px solid SlateGrey;
  border-radius: 5px;
  flex-direction: column;
  overflow-y: scroll;

  align-items: center;
  position: relative;
  margin-top: 10px;
`;

const TodolistComponent = () => {
  const [todos, setTodos] = useState([]);
  const [inputvalue, setInputvalue] = useState('');

  const nextId = useRef(0);

  const onToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  };

  const onChangeInput = useCallback((e) => {
    setInputvalue(e.target.value);
  }, []);

  const onAddTodo = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((prevTodos) => prevTodos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    onAddTodo(inputvalue);
    setInputvalue('');
  });

  const onRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
        <InputContainer>
          <InputTag
            type="text"
            placeholder="할 일을 입력하세요"
            value={inputvalue}
            onChange={onChangeInput}
          />
          <ButtonTag type="submit">등록</ButtonTag>
        </InputContainer>
        <TodolistContainer>
          {todos.map((todo) => (
            <TodoItems
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          ))}
        </TodolistContainer>
      </form>
    </>
  );
};

export default TodolistComponent;
