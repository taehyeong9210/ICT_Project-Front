import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

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
`;

const InnerContent = styled.div``;

const Login = () => {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Head>APP 이름</Head>
        <Content>
          <InnerContent className="innerContent">Inner Content</InnerContent>
        </Content>
      </Container>
    </div>
  );
};

export default Login;
