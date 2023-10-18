import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Calendar from 'react-calendar';
import '../CSS/calendar.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: lightgrey;
    margin: 0; 
    padding: 0; 
  }
`;

const Container = styled.div`
  margin: auto;
  border: 1px solid black;
  width: 750px;
  margin-top: 50px;
`;

const Head = styled.div`
  height: 60px;
  background-color: #22b8cf;
  text-align: center;
  line-height: 60px;
  font-size: 2.5rem;
  color: white;
  font-weight: 800;
`;

const Content = styled.div`
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: white;
  position: relative;
`;

const LoginButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;

const RegisterButton = styled.button`
  position: absolute;
  top: 0;
  right: 50px; /* 버튼 사이의 간격 조절을 위해 오른쪽 위치 조정 */
`;
const InnerContent = styled.div`
  width: 700px;
  height: 450px;
  background-color: ivory;
  margin: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Head>APP 이름</Head>
        <ButtonContainer>
          <LoginButton>로그인</LoginButton>
          <RegisterButton>회원 가입</RegisterButton>
        </ButtonContainer>
        <Content>
          <InnerContent className="innerContent">
            <Calendar></Calendar>
          </InnerContent>
        </Content>
      </Container>
    </div>
  );
};

export default Main;
