import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Container = styled.div`
  margin: auto;
  border: 2px solid black;
  width: 750px;
  margin-top: 50px;
`;

const Head = styled.div`
  height: 60px;
  background-color: #34568b;
  text-align: center;
  line-height: 60px;
  font-size: 2.5rem;
  color: #f0f8ff;
  font-weight: 800;
  position: relative;
  border-bottom: 1px dotted lightgrey;
`;

const Content = styled.div`
  height: 500px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;

  position: relative;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #f5f5f5;
  z-index: 1;
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

  const handleClickSignup = () => {
    navigate('/signup');
  };

  const backClickButton = () => {
    navigate(-1);
  };

  return (
    <>
      {pathname === '/' && (
        <Container>
          <Head>APP 이름</Head>
          <Content>
            <ButtonContainer>
              <Button
                style={{ borderColor: 'black' }}
                onClick={handleClickLogin}
              >
                로그인
              </Button>
              <Button
                style={{ margin: '0.3rem 0.5rem', borderColor: 'black' }}
                onClick={handleClickSignup}
              >
                회원 가입
              </Button>
            </ButtonContainer>
            {component}
          </Content>
        </Container>
      )}
      {pathname !== '/' && (
        <Container>
          <Head>
            <BackButton onClick={backClickButton}>
              <Icon />
            </BackButton>
            APP 이름
          </Head>
          <Content>{component}</Content>
        </Container>
      )}
    </>
  );
};

export default LayoutComponent;
