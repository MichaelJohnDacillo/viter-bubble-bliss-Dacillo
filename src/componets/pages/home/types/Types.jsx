import React from 'react'
import TypesCard from '../../../partials/TypesCard';

const Types = () => {
  return (
    <>
      <section className="w-full pt-16 pb-10
      xl:pt-14 xl:pb-9">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className='font-bold text-3xl text-center mb-12
          xl:text-2xl xl:mb-10'>Popular <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text'>Milk Tea</span> Types
          </h2>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'> 
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