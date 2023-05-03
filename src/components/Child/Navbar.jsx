import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-slate-800 font-bold text-lg">ChateMate</h1>
      </div>
      <div className="relative flex items-center">
        <img
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          src="https://i1.sndcdn.com/artworks-000056204179-01cxkp-t240x240.jpg"
          alt="User avatar"
          onClick={handleMenuOpen}
        />
        {isMenuOpen && (
          <div className="absolute right-0 top-10 z-10 bg-white rounded-md shadow-lg py-2">
            <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar