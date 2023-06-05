import React, { useContext } from "react";
import { BiUserPlus, BiCameraMovie, BiDotsHorizontalRounded } from "react-icons/bi";
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from "../../hooks/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className='flex-[3] h-screen flex flex-col'>
      {/* Navbar */}
      <div className='h-50px py-3 bg-slate-50 flex items-center justify-between px-2'>

        <div className='text-lg gap-4 flex justify-center container font-bold capitalize'>        <img src={data.user?.photoURL} alt="" className=" h-10 w-10 rounded-lg" />
          {data.user?.displayName}</div>
        <div className='flex gap-4'>
          <BiUserPlus className='w-6 h-6' />
          <BiCameraMovie className='w-6 h-6' />
          <BiDotsHorizontalRounded className='w-6 h-6' />
        </div>
      </div>

      {/* Messages */}
      <div className='flex flex-col h-full justify-between overflow-y-scroll'>
        <Messages />
      </div>
      <Input />
    </div>
  )
}

export default Chat