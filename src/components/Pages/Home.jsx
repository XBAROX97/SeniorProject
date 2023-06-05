import React from 'react';
import Slide from '../Child/Slide';
import Chat from '../Child/Chat';

const Home = () => {
  return (
    <div className="check h-screen flex items-center justify-center">
      {window.innerWidth <= 640 && (
        <button className="fixed top-0 right-0 m-4 bg-[red]">Button</button>
      )}
      <div className="h-full w-full sm:w-[90vw] flex flex-col sm:flex-row border-r-2 border-slate-50">
        <Slide className="sm:w-1/2" />
        <Chat className="sm:w-1/2" />
      </div>
    </div>
  );
};

export default Home;
