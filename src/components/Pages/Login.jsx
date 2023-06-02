import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from './../../assets/backgroundImage.jpg';
import { signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../FireBase';
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(false);
    console.log(email, password)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home")
      console.log(email,password)
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="min-h-screen bg-cover flex items-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="mx-auto w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-4">Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-lg text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link to="/home" className="font-medium text-blue-500 hover:text-blue-700">
              Forgot your password?
            </Link>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
          {err && <span>Something went wrong</span>}
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-lg text-gray-600">Don't have an account yet?</span>{' '}
        <Link to="/register" className="font-medium text-blue-500 hover:text-blue-700">
          Sign up
        </Link>
      </div>
    </div>
  </div>
  
  );
  }
export default Login;
