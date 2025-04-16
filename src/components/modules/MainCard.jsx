import React from 'react'

const MainCard = ({ children }) => {
    return (
      <div className=" lg:w-[1150px] h-auto py-7 m-auto bg-white rounded-2xl border border-gray-300 mt-7 px-10">
        {children}
      </div>
    );
  };

export default MainCard