import styled from 'styled-components';
import LayoutComponent from '../component/LayoutComponent';
import Tab from '../component/Tab';

const DiaryComponent = () => {
  return <Tab></Tab>;
};

const Diary = () => {
  return (
    <div>
      <LayoutComponent component={<DiaryComponent />} />
    </div>
  );
};

export default Diary;
