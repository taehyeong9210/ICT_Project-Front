import LayoutComponent from '../component/LayoutComponent';
import React from 'react';
import { Button, Input, Form } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputTag = styled(Input)`
  width: 80%;
  margin-right: 5px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
`;

const FormCustom = styled(Form)`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

const ButtonCustom = styled(Button)`
  margin-right: 5px;
`;

const SignupComponent = () => {
  return (
    <>
      <FormCustom>
        <InputContainer>
          <span>ID</span>
          <InputTag type="text" placeholder="아이디를 입력해주세요." />
        </InputContainer>
        <InputContainer>
          <span>PW</span>
          <InputTag type="password" placeholder="비밀번호를 입력해주세요." />
        </InputContainer>
        <InputContainer>
          <span>E-Mail</span>
          <InputTag type="email" placeholder="이메일을 입력해주세요." />
        </InputContainer>
        <ButtonContainer>
          <ButtonCustom>회원가입</ButtonCustom>
          <ButtonCustom>
            <Link to="/">취소</Link>
          </ButtonCustom>
        </ButtonContainer>
      </FormCustom>
    </>
  );
};

const Signup = () => {
  return (
    <div>
      <LayoutComponent component={<SignupComponent />} />
    </div>
  );
};

export default Signup;
