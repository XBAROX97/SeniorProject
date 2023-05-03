const message = "Hello sd sa ds dsa das ad adsa das dsa dsa a dsa dsa da asd asd adsa dsa dsa dsa dsa ada dsa dsa"

const Chats = () => {
  return (
    <div className='overflow-hidden hover:overflow-y-scroll w-full' tabIndex={1}>
      {/* Load chats */}
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <div key={item} className={'flex gap-2 border-t border-gray-300 transition-all duration-100 cursor-pointer select-none px-4 py-2 ' + (item === 1 ? 'bg-slate-300' : "bg-slate-50 hover:bg-slate-300")} >
          <div className="flex py-3">
            <img draggable={false} height={10} width={10} className='w-10 h-10 rounded-full' src='https://i1.sndcdn.com/artworks-000056204179-01cxkp-t240x240.jpg' alt='User avatar' />
          </div>
          <div className='w-full p-2 flex flex-col gap-2'>
            {/* Chat name */}
            <p className='text-lg font-bold'>Name</p>
            {/* Chat message, limit it to 230 characters */}
            <p className='text-slate-500 leading-5'>{message.length > 75 ? message.substring(0, 70) + "..." : message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Chats;