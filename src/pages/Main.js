import React from 'react';
import Calendar from 'react-calendar';
import '../css/calendar.css';
import LayoutComponent from '../component/LayoutComponent';

const Main = () => {
  return (
    <div>
      <LayoutComponent component={<Calendar />} />
    </div>
  );
};

export default Main;
