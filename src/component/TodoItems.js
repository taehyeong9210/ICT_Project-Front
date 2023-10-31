import React from 'react';
import styled from 'styled-components';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const ItemContainer = styled.div`
  width: 650px;
  height: 40px;
  min-height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 2px solid #4682b4;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

const Checkbox = styled(MdCheckBox)`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  color: ${({ checked }) => (checked ? '#B0E0E6' : 'black')};
  cursor: pointer;
`;

const Xbox = styled(MdCheckBoxOutlineBlank)`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  color: ${({ checked }) => (checked ? '#B0E0E6' : 'black')};
  cursor: pointer;
`;

const Text = styled.span`
  flex: 1; /* 텍스트가 컨테이너의 남은 공간을 차지하도록 설정합니다. */
  text-decoration: ${({ checked }) =>
    checked
      ? 'line-through'
      : 'none'}; /* 체크 여부에 따라 가로줄을 추가합니다. */
  overflow: hidden; /* 텍스트 넘침 시 가로줄이 보이도록 합니다. */
`;

const RemoveIcon = styled(MdRemoveCircleOutline)`
  width: 30px;
  margin-right: 20px;
  height: 30px;
  color: #e74c3c;
  cursor: pointer;
  margin-left: auto;
`;

const TodoItems = ({ todo, onToggle, onRemove }) => {
  const { id, text, checked } = todo;
  const onClickCheckbox = () => {
    onToggle(todo.id);
  };
  const onClickRemove = () => {
    onRemove(todo.id);
  };

  return (
    <ItemContainer>
      {checked ? (
        <Checkbox checked={checked} onClick={onClickCheckbox} />
      ) : (
        <Xbox checked={checked} onClick={onClickCheckbox} />
      )}
      <Text checked={checked}>{todo.text}</Text>
      <RemoveIcon onClick={onClickRemove} />
    </ItemContainer>
  );
};

export default TodoItems;
