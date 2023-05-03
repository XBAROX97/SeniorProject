import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './../../assets/backgroundImage.jpg';

const Register = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(displayName);
    console.log(email);
  };
  return (
    <div
      className="flex h-screen bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }} >
      <div className="m-auto container">
        <div className="flex justify-center">
          <div className="w-full lg:w-3/4 xl:w-1/2 bg-white rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-center">Register</h3>
            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div className='flex'>
                <div className="flex-1 mr-4">
                  <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="firstName" >
                    First Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}

                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="lastName" >
                    Last Name
                  </label>
                  <input
                    className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="displayName" >
                  Display Name
                </label>
                <input
                  className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="displayName"
                  type="text"
                  placeholder="Display Name"
                  value={displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="email" >
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Email Address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="password" >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold text-gray-700" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 text-lg leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                > Create Account
                </button>
                <div className="text-center">
                  <h1 className="inline-block text-blue-500 align-baseline text-lg">
                    Already have an account?{' '}
                    <span className='text-2xl text-red-400 hover:text-red-800 focus:outline-none'>
                      <Link to="/">Login!</Link>
                    </span>
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
