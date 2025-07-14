import React from 'react'

const ToppingsCard = ({bg, emoji, name}) => {
  return (
    <>
        <div className="group py-4 w-32 text-center justify-items-center bg-white rounded-lg shadow-sm hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 duration-300
        xl:w">
          <div className={`flex justify-center items-center size-20 rounded-full ${bg} mb-2 group-hover:ring-1 group-hover:ring-gray-400 transition-all duration-300
          xl:size`}>
            <p className={`text-3xl
              xl:`}>{emoji}</p>
          </div>
          <p className='font-semibold text-black/80
          xl:text-md'>{name}</p>
        </div>
    </>
  );
};

export default ToppingsCard;