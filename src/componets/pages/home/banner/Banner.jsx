import React from 'react'

const Banner = () => {
  return (
    <>
        {/* Banner */}
        <section id="home" className="w-full py-20 bg-gradient-to-br from-pink-100 to-purple-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-items-center
            xl:gap-40 xl:items-center">
                <div className="grid justify-items-center mb-10
                xl:justify-items-start ">
                  <h1 className='text-center font-bold text-4xl mb-5
                  xl:text-[2.33rem] 
                  '>Discover the <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Joy</span> of Milk Tea</h1>
                  <p className='text-lg text-center text-gray-600 mb-6
                  xl:text-sm '>Creamy, sweet, and refreshing - our milk tea will transport you to flavor paradise with every sip.</p>
                  <a className='text-center text-white bg-pink-500 rounded-full font-semibold shadow-md hover:shadow-xl w-40 h-10 py-2 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transform transition-all duration-200 active:scale-105
                  ' href="#">Explore Flavors</a>
                </div>
                
                
                
                <div className='group grid justify-items-center'>
                  <div className='relative text-6xl bg-pink-200 p-32 blur-xl rounded-full group-hover:bg-purple-200 transition-all duration-300'></div>
                  <p className='absolute text-8xl'>🧋</p>
                </div>
                
            </div>

        </section>

    </>
  );
};

export default Banner;