import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import backgroundImage from './../../assets/backgroundImage.jpg'
const Register = () => {
  const { register, loading } = useAuth();

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    password2: ''
  })

  const handleChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if password == password2
    if (registerForm.password !== registerForm.password2) {
      toast.error((t) => (
        <div className='flex items-center gap-2 cursor-pointer select-none' onClick={() => toast.dismiss(t.id)}>
          <p className='text-semibold text-md'>Passowrd doesn't match!</p>
        </div>
      ));
      return;
    }
    register(registerForm);
  };

  return (
    <div className="relative flex h-screen">
      <div className="absolute inset-0 z-0">
        <img className="w-full h-full object-cover" src={backgroundImage} alt="Background" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-10 m-auto bg-white bg-opacity-90 container p-8 max-w-[800px] shadow rounded-lg flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <div className="flex flex-wrap gap-2">
          <div className="flex-1">
            <label className="block text-gray-700 font-bold" htmlFor="firstName">
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your first name"
              value={registerForm.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your last name"
              value={registerForm.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="displayName">
            Display Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="displayName"
            name="displayName"
            type="text"
            placeholder="Enter your display name"
            value={registerForm.displayName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={registerForm.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={registerForm.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password2"
            name="password2"
            type="password"
            placeholder="Confirm your password"
            value={registerForm.password2}
            onChange={handleChange}
          />
        </div>

        <div className='mt-3'>
          {loading
            ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center gap-2" type="button" disabled>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Registering...
            </button>
            : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Register
            </button>
          }
        </div>

        <div>
          Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;