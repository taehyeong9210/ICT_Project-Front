import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';

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
  position: relative;
`;

const Content = styled.div`
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const InnerContent = styled.div`
  width: 700px;
  height: 450px;
  background-color: Ivory;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: white;
`;

const LoginButton = styled.button`
  position: relative;
  top: 0;

  color: white;
  background-color: black;
`;

const RegisterButton = styled.button`
  position: relative;
  top: 0;

  color: white;
  background-color: black;
`;

const Icon = styled(ArrowLeftOutlined)`
  font-size: 24px;
  color: white;
  &:hover {
    color: red;
  }
`;

const BackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1, 1);
`;

const LayoutComponent = ({ component }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login');
  };
  return (
    <>
      {pathname === '/' && (
        <Container>
          <Head>APP 이름</Head>
          <Content>
            <ButtonContainer>
              <LoginButton onClick={handleClickLogin}>로그인</LoginButton>
              <RegisterButton>회원 가입</RegisterButton>
            </ButtonContainer>
            <InnerContent className="innerContent">{component}</InnerContent>
          </Content>
        </Container>
      )}
      {pathname !== '/' && (
        <Container>
          <Head>
            <BackButton>
              <Icon />
            </BackButton>
            App이름
          </Head>
          <Content>
            <InnerContent className="innerContent">{component}</InnerContent>
          </Content>
        </Container>
      )}
    </>
  );
};

export default LayoutComponent;
