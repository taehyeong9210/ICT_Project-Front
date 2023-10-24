import styled from 'styled-components';
import DiaryComponent from '../component/DiaryComponent';
import LayoutComponent from '../component/LayoutComponent';

import TabComponent from '../component/TabComponent';

const ContentsComponent = () => {
  return (
    <>
      <TabComponent />
    </>
  );
};

const Contents = () => {
  return (
    <div>
      <LayoutComponent component={<ContentsComponent />} />
    </div>
  );
};
export default Contents;
