import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import useAuth from '../../hooks/useAuth'
import backgroundImage from './../../assets/backgroundImage.jpg'
import { BiImageAdd } from 'react-icons/bi';

const Register = () => {
  const { register, loading } = useAuth();
  const [image, setImage] = useState(null);

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    email: '',
    password: '',
    password2: ''
  })

  function handleImageChange(event) {
    console.log(event.target.files[0]);
    setImage(event.target.files[0]);
  }
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

    register(registerForm, image);
  };

  return (
  
      <div className='h-screen relative flex '>
      <div className="absolute inset-0 z-0">
        <img className="w-full max-h-max object-cover" src={backgroundImage} alt="Background" />
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
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="image"
          >
            Upload an Image
          </label>
          <div className="flex flex-col gap-2">
            <div className="relative ">
              
              <input
                className="opacity-0 w-full h-full absolute top-0 left-0"
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                aria-label="Upload Image"
              />
              <div
                className="flex justify-center items-center w-full h-20 border-dashed border-4 border-gray-400 rounded-md p-4"
                role="button"
                tabIndex={0}
              >
                <div className="text-center flex">
                  <BiImageAdd className="h-10 w-10" />
                  <p className="text-gray-500 mt-2">Drag and drop or click to select an image</p>
                </div>
              </div>
            </div>
            {image && (
              <div className="flex flex-col items-center">
                <img
                  className="h-40 w-40 object-cover rounded-md mt-4"
                  src={URL.createObjectURL(image )}
                  alt="Selected image"
                />
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                  type="button"
                  onClick={() => setImage(null)}
                >
                  Remove Image
                </button>
              </div>
            )}
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
            </button>}
        </div>
        <div>
          Already have an account? <Link to="/login" className="text-blue-500">Log in</Link>
        </div>
      </form>
      </div>
    
  );
};

export default Register;