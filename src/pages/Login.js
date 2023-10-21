import React from 'react';
import styled from 'styled-components';
import LayoutComponent from '../component/LayoutComponent';
import { Link } from 'react-router-dom';
import { Button, Input } from 'antd';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const IDInputTag = styled(Input)`
  max-width: 70%;
  left: 54px;
`;

const PWInputTag = styled(Input)`
  max-width: 70%;
  margin-right: 0%;
`;

const Span = styled.span`
  white-space: nowrap;
  margin-right: 3rem;
  text-align: center;
`;

const Form = styled.form`
  width: 70%;
  height: 50%;
`;

const CkeckContainer = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: flex-end;
`;

const CustomButton = styled(Button)`
  margin-right: 10px; // 확인 버튼과 회원가입 버튼 사이의 간격 조절
`;

const CustomLinkButton = styled(Link)`
  text-decoration: none; // 링크 스타일 제거
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
      <InputContainer>
        <Span>ID</Span>
        <IDInputTag
          className="inputID"
          type="text"
          // value={id}
          placeholder="아이디를 입력하세요"
        ></IDInputTag>
      </InputContainer>
      <InputContainer>
        <Span>Password</Span>
        <PWInputTag
          className="inputPW"
          type="password"
          // value={pw}
          placeholder="비밀번호를 입력하세요"
        ></PWInputTag>
      </InputContainer>
      <CkeckContainer>
        <CustomButton>확인</CustomButton>
        <CustomLinkButton to="/signup">
          <CustomButton>회원가입</CustomButton>
        </CustomLinkButton>
      </CkeckContainer>
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
