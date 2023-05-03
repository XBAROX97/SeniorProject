import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className="flex items-center bg-gray-50 p-2">
      <div className="relative flex items-center flex-grow">
        <span className="absolute left-0 text-gray-400">
          <AiOutlineSearch className="h-5 w-5" />
        </span>
        <input type="text" placeholder="Find a user" className="bg-transparent border-b border-gray-300 text-gray-600 px-8 py-2 w-full focus:outline-none focus:border-blue-500" />
      </div>
    </div>
  );
};


export default Search