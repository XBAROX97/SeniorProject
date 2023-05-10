import React, { useContext, useState } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../../FireBase';
import { AuthContext } from '../../hooks/AuthContext';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser } = useContext(AuthContext)

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-50 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-slate-800 font-bold text-lg">ChateMate</h1>
      </div>
      <h1 className="text-slate-800 font-bold text-lg">{currentUser.displayName}</h1>
      <div className="relative flex items-center gap-3">

        <img
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
          src={currentUser.photoURL}
          alt="User avatar"
          onClick={handleMenuOpen}
        />
        {isMenuOpen && (
          <div className="absolute right-0 top-10 z-10 bg-white rounded-md shadow-lg py-2">
            <Link to="/login">
            <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-200"
              onClick={() => signOut(auth)}>
              Logout
            </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar