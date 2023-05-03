import React from 'react'
import { BiUserPlus, BiCameraMovie, BiDotsHorizontalRounded } from "react-icons/bi";
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='flex-[3] h-screen flex flex-col borde'>
      {/* Navbar */}
      <div className='h-50px py-3 bg-slate-50 flex items-center justify-between px-2'>
        <span className='text-lg font-bold'>Name</span>
        <div className='flex gap-4'>
          <BiUserPlus className='w-6 h-6' />
          <BiCameraMovie className='w-6 h-6' />
          <BiDotsHorizontalRounded className='w-6 h-6' />
        </div>
      </div>

      {/* Messages */}
      <div className='flex flex-col h-full justify-between'>
        <Messages />
        <Input />
      </div>
    </div>
  )
}

export default Chat