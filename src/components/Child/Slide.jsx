import Navbar from './Navbar.jsx';
import Search from './Search.jsx';
import Chats from './Chats.jsx';
import React, { useState } from 'react';

const Slide = () => {
  const [showComponents, setShowComponents] = useState(false);

  const handleButtonClick = () => {
    setShowComponents(!showComponents);
  };

  return (
    <div className='w-96 h-screen bg-slate-50'>
      <button className='fixed top-0 right-0 m-4 p-2 bg-gray-800 text-white rounded' onClick={handleButtonClick}>
        {showComponents ? 'Hide' : 'Show'}
      </button>
      {showComponents && (
        <>
          <Navbar />
          <Search />
          <Chats />
        </>
      )}
    </div>
  );
};

export default Slide;
