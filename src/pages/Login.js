import React from 'react';
import styled from 'styled-components';
import LayoutComponent from '../component/LayoutComponent';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ffe4b5;
  border-radius: 10px;
  height: 200px;
  width: 80%;
  margin: 0 auto;
`;

const InputTag = styled(Input)`
  width: 300px;
  margin: 10px 5px 0;
  padding-top: 5px;
`;

const Form = styled.form`
  width: 70%;
  height: 50%;
`;

const CustomButton = styled(Button)`
  width: 300px;
  margin: 15px 0 0;
`;

const Span = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  margin-top: 10px;
`;

const handleLoginSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector('.inputID');
  console.log(input.value);
  input.value = '';
};

const LoginComponent = () => {
  return (
    <Form onSubmit={handleLoginSubmit}>
      <Container>
        <InputTag
          className="inputID"
          type="text"
          placeholder="아이디를 입력하세요"
        ></InputTag>
        <InputTag
          className="inputPW"
          type="password"
          placeholder="비밀번호를 입력하세요"
        ></InputTag>
        <CustomButton type="primary">로그인</CustomButton>
        <Span to="/signup">회원가입</Span>
      </Container>
    </Form>
  );
};

const Login = () => {
  return (
    <div>
      <LayoutComponent component={<LoginComponent />} />
    </div>
  );
};

export default Login;
