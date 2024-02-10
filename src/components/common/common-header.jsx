import React from 'react';
import DesktopNav from '../navbar/desktop-nav';

const CommonHeader = () => {
  return (
    <header className="fixed top-0 z-50 bg-white w-full py-10 border-b-2">
      <nav className="flex">
        <DesktopNav />
      </nav>
    </header>
  );
};

export default CommonHeader;
