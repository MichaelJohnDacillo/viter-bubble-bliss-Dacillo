import React from 'react';

const TypesCard = ({ bg, emoji, title, description }) => {
  return (
    <div className='group px-8 py-7 text-center justify-items-center w-full bg-gradient-to-br from-pink-50 to-purple-50 mb-4 shadow-md rounded-xl hover:from-purple-100 hover:to-pink-100
    xl:py-6 xl:px-5'>
        <div className={`flex justify-center items-center size-16 rounded-full ${bg} mb-5 group-hover:ring-1 group-hover:ring-gray-400 transition-all duration-800
        xl:mb-4`}>
          <p className='text-3xl
          '>{emoji}</p>
        </div>
        
      
      <h5 className="font-semibold text-xl mb-2
      xl:">{title}</h5>
      <p className="text-gray-600
      xl:text-md">{description}</p>
    </div>
  );
};

export default TypesCard;