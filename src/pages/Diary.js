import styled from 'styled-components';
import LayoutComponent from '../component/LayoutComponent';
import DiaryBtn from '../component/DiaryBtn';
import TodoBtn from '../component/TodoBtn';

const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  bottom: 225px;

  & > * {
    margin: 0;
  }

  & > *:not(:last-child) {
    border-right: 2px dotted lightgrey; /* 수직 구분선 스타일 및 색상 설정 */
  }
`;

const DiaryComponent = () => {
  return (
    <Container>
      <DiaryBtn />
      <TodoBtn />
    </Container>
  );
};

const Diary = () => {
  return (
    <div>
      <LayoutComponent component={<DiaryComponent />} />
    </div>
  );
};

export default Diary;
