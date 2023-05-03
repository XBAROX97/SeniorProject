const Input = () => {
  return (
    <div className="bg-slate-50 h-16 px-2 flex items-center justify-between">
      <input type="text" placeholder="Type something..." className="flex-grow mx-4 py-2 px-3 rounded border bg-transparent border-gray-400 focus:outline-none focus:ring focus:border-blue-300" />
      <div className="flex items-center space-x-3">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">Send</button>
        
        <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-2 2m0 0L6 19m2 2v-4" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Input