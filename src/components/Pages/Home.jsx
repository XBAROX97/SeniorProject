import React from 'react'
import Slide from '../Child/Slide'
import Chat from '../Child/Chat'

const Home = () => {
  return (
    <div className='check flex items-center justify-center'>
      <div className='h-full w-[90vw] flex border-r-2 border-slate-50'>
        <Slide />
        <Chat />
      </div>
    </div >
  )
}

export default Home