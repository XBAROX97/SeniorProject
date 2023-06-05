import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Slide = () => {
  return (
    <div className='w-96 h-screen bg-slate-50'>
      <Navbar />
      <Search />
        <Chats />
    </div>

  )
}

export default Slide  