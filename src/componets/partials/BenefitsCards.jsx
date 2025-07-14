import React from 'react'

const BenefitsCards = ({bg, check_color, title, description}) => {
  return (
    <>
        <div className='flex flex-col text-center items-center mb-4
        md:flex-row md:text-left md:gap-4'>
            <div className={`${bg} flex items-center justify-center w-6 h-9 rounded-full
            xl:w-7 xl:h-10`}>
              <p className={`${check_color}`}>✓</p>
            </div>
            <div className='flex flex-col text-gray-600'>
              <p className='font-bold'>{title}</p>
              <p className='w-[27rem]
              md:w-[28rem]'>{description}</p>
            </div>
        </div>
    </>
  );
};

export default BenefitsCards;