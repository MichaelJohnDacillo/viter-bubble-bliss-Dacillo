import React from 'react'
import TypesCard from '../../../partials/TypesCard';

const Types = () => {
  return (
    <>
      <section id="types" className="w-full pt-16 pb-10
      xl:pt-16 xl:pb-12">
        <div className="max-w-[98.5rem] mx-auto px-4">
          <h2 className='font-bold text-3xl text-center mb-12
          xl: xl:mb-12'>Popular <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text'>Milk Tea</span> Types
          </h2>
          <div className='md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3'> 
            <TypesCard
            bg="bg-pink-100"
            emoji="🥛"
            title="Classic Milk Tea"
            description="The original blend of black tea, milk, and sweetness that started it all."/>

            <TypesCard
              bg="bg-purple-100"
              emoji="🍯"
              title="Honeydew Milk Tea"
              description="Refershing melon flavor combined with creamy milk for a summer favorite."/>

            <TypesCard
              bg="bg-yellow-100"
              emoji="🍵"
              title="Matcha Milk Tea"
              description="Earthy green tea powder blended with milk for an antioxidant boost."/>
          </div>
        </div>

      </section>
      
    </>
  );
};

export default Types;