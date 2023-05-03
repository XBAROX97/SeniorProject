import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Slide = () => {
  return (
    <div className='flex-1 max-h-full flex flex-col overflow-hidden bg-slate-50 h-screen border-l border-r'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Slide