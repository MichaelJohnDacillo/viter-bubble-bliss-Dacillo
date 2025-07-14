import React from 'react'

const Banner = () => {
  return (
    <>
        {/* Banner */}
        <section id="home" className="w-full py-20 bg-gradient-to-br from-pink-100 to-purple-100
        xl:pt-24 xl:pb-16">
            <div className="max-w-[98.5rem] mx-auto px-4 flex flex-col md:flex-row justify-items-center
            xl:gap-[15.6rem] md:items-center">
                <div className="grid justify-items-center mb-10
                md:justify-items-start ">
                  <h1 className='text-center font-bold text-4xl mb-5
                  xl:text-5xl
                  '>Discover the <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Joy</span> of Milk Tea</h1>
                  <p className='text-lg text-center text-gray-600 mb-6
                  md:text-left '>Creamy, sweet, and refreshing - our milk tea will transport you to flavor paradise with every sip.</p>
                  <a className='text-center text-white bg-pink-500 rounded-full font-semibold shadow-md hover:shadow-xl w-40 h-10 py-2 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transform transition-all duration-200 active:scale-105
                  ' href="#">Explore Flavors</a>
                </div>
                
                
                
                <div className='group grid justify-items-center'>
                  <div className='relative text-6xl bg-pink-200 size-64 blur-xl rounded-full group-hover:bg-purple-200 transition-all duration-300
                  xl:size-80'></div>
                  <p className='absolute text-8xl
                  xl:text-9xl'>🧋</p>
                </div>
                
            </div>

        </section>

    </>
  );
};

export default Banner;