import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const InnerContent = styled.div`
  width: 700px;
  height: 450px;
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

const LayoutComponent = ({ component }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate("/login");
  };
  return (
    <Container>
      <Head>APP 이름</Head>
      {pathname === "/" && (
        <ButtonContainer>
          <LoginButton onClick={handleClickLogin}>로그인</LoginButton>
          <RegisterButton>회원 가입</RegisterButton>
        </ButtonContainer>
      )}
      <Content>
        <InnerContent className="innerContent">{component}</InnerContent>
      </Content>
    </Container>
  );
};

export default LayoutComponent;
