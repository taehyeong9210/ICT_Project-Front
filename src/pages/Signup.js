import LayoutComponent from '../component/LayoutComponent';
import React, { useState, useEffect } from 'react';
import { Button, Input, Form } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const InputTag = styled(Input)`
  width: 80%;
  margin-right: 5px;
  border-color: black;
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
  border-color: black;
`;

const StepIndicator = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10%;
  margin-bottom: 20px;
  width: 80%;
`;

const StepText = styled.span`
  margin-top: 10px;
  font-weight: bolder;
  font-size: 1rem;
`;

const Line = styled.div`
  width: ${({ step }) => step * 33.33}%;
  height: 5px;
  background-color: ${({ step }) => {
    switch (step) {
      case 1:
        return '#00CED1';
      case 2:
        return '#008B8B';
      case 3:
        return '#1E90FF';
      default:
    }
  }};
  transition: width 0.5s, background-color 0.5s;
`;

const SignupComponent = () => {
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
    email: '',
  });

  const [step, setStep] = useState(0);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (
      inputValues.id.length > 0 &&
      inputValues.pw.length === 0 &&
      inputValues.email.length === 0
    ) {
      setStep(1);
    } else if (
      inputValues.id.length > 0 &&
      inputValues.pw.length > 0 &&
      inputValues.email.length === 0
    ) {
      setStep(2);
    } else if (
      inputValues.id.length > 0 &&
      inputValues.pw.length > 0 &&
      inputValues.email.length > 0
    ) {
      setStep(3);
    }
  }, [inputValues]);

  return (
    <>
      <FormCustom>
        <StepIndicator>
          <Line step={step} />
          <StepText>
            {step === 1 ? `${step}단계: ID 입력` : ''}
            {step === 2 ? `${step}단계: Password 입력` : ''}
            {step === 3 ? `${step}단계: E-mail 입력` : ''}
          </StepText>
        </StepIndicator>
        <InputContainer>
          <span>ID</span>
          <InputTag
            name="id"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={onChangeInput}
          />
        </InputContainer>
        <InputContainer>
          <span>PW</span>
          <InputTag
            name="pw"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangeInput}
          />
        </InputContainer>
        <InputContainer>
          <span>E-Mail</span>
          <InputTag
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요."
            onChange={onChangeInput}
          />
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
