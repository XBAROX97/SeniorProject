const Message = () => {
  return (
    <div className="px-4 py-2 flex gap-3 justify-end items-center">
      <div className="bg-green-700 text-white font-semibold py-2 px-4 max-w-[300px] rounded-l-lg rounded-br-lg">
        Message asdsa dsa dsa dsa dsa sad asd asdsa asd sa dsa sa dsa
        <span className="text-slate-300 select-none justify-end font-normal text-sm flex items-center">
          12:34 PM
        </span>
      </div>
      <div className="flex">
        <img
          draggable={false}
          src="https://img.freepik.com/free-icon/user_318-159711.jpg"
          alt="User avatar"
          className="w-8 h-8 select-none cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default Message