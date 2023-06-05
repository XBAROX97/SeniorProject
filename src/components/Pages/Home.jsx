import React, { useState, useEffect } from 'react';
import Slide from '../Child/Slide';
import Chat from '../Child/Chat';
import { RxDropdownMenu } from "react-icons/rx";
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 740);
  const [isSlideVisible, setIsSlideVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 740);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSlideVisibility = () => {
    setIsSlideVisible(!isSlideVisible);
  };

  return (
    <div className="check h-screen flex items-center justify-center">
      {isSmallScreen && (
      <button className="fixed top-0 left-0 m-2 bg-blue-500 text-white rounded-full p-3" onClick={toggleSlideVisibility}>
      <FaBars size={10} />
    </button>
      )}
      <div className="h-full w-full sm:w-[90vw] flex flex-col sm:flex-row border-r-2 border-slate-50">
        {isSlideVisible && <Slide className="sm:w-1/2" />}
        <Chat className="sm:w-1/2" />
      </div>
    </div>
  );
};

export default Home;
