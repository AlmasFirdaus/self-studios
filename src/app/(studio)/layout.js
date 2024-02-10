import CommonHeader from '@/components/common/common-header';
import React from 'react';

const HomeLayout = ({ children }) => {
  return (
    <>
      <CommonHeader />
      {children}
    </>
  );
};

export default HomeLayout;
