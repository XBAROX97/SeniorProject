import React, { useContext, useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../FireBase';
import { AuthContext } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 px-4 py-3 flex flex-col items-center">
     
      <div className="flex justify-between items-center">
        <h1 className="text-slate-800 font-bold text-lg capitalize">{currentUser.displayName}</h1>
        <div className="relative ml-3">
          <img
            className="w-8 h-8 rounded-full object-cover cursor-pointer"
            src={currentUser.photoURL}
            alt="User avatar"
            onClick={handleMenuOpen}
          />
          {isMenuOpen && (
            <div className="absolute right-0 top-10 z-10 bg-white rounded-md shadow-lg py-2">
              <Link to="/login">
                <button
  className="block py-2 px-5 text-base font-semibold text-body-color hover:bg-primary    text-black hover:bg-red-300 hover:rounded-lg  hover:border-transparent hover:border-4
  hover:border-red-500 hover:shadow-xl hover:text-white hover:transition-all hover:ease-in-out hover:duration-300 hover:transform hover:scale-110 hover:rotate-12 hover:translate-x-2 
  hover:translate-y-2 transition-all ease-in-out duration-700 
"                  onClick={() => signOut(auth)}
                >
                  Logout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
