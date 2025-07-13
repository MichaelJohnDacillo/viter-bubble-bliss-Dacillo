import React from 'react'
import ToppingsCard from '../../../partials/ToppingsCard';

const Toppings = () => {
  return (
    <>
        {/* Toppings Section */}
        <section className="w-full py-16 bg-purple-50
        xl:py-12">
          <div className="max-w-6xl mx-auto px-4 justify-items-center">
            <div className='text-center mb-14
            xl:mb-10'>
              <h2 className='font-bold text-3xl mb-4
              xl:text-2xl xl:mb'>Delicous <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text'>Toppings</span></h2>
              <p className='text-gray-600
              xl:text-xs'>Customize your milk tea with these tasty additions that add texture and flavor.</p>
            </div>
          <div className='grid grid-cols-2 gap-6 md:flex'>
            <ToppingsCard
            bg={"bg-pink-100"}
            emoji={"🟤"}
            name={"Boba Pearls"}/>
            <ToppingsCard
            bg={"bg-yellow-100"}
            emoji={"🍮"}
            name={"Pudding"}/>
            <ToppingsCard
            bg={"bg-red-100"}
            emoji={"🧊"}
            name={"Jelly"}/>
            <ToppingsCard
            bg={"bg-green-100"}
            emoji={"🥥"}
            name={"Coconut"}/>
            <ToppingsCard
            bg={"bg-blue-100"}
            emoji={"🧈"}
            name={"Cheese Foam"}/>
            
          </div>
          </div>
          
        </section>
    </>
  );
};

export default Toppings;