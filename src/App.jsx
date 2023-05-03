import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div >
      <Outlet />
      <Toaster
        position='top right'
      />
    </div>
  )
}

export default App