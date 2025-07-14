import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='py-8 bg-gray-800'>
          <div className=' max-w-[98.5rem] mx-auto px-4'>
            <div className='justify-items-center border-b border-white/10
            md:flex xl:items-center md:justify-between'>
              <div className="flex flex-col mb-4
              md:mb-8">
                <div className='flex gap-2 items-center mb-2'>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to bg-pink-400 text-transparent bg-clip-text">
                    Bubble Bliss
                  </h3>
                  <p>🧋</p>
                </div>
                <p className='text-white/50'>Sip Happenies in every cup</p>
              </div>

              <div className='flex gap-6 text-xl mb-8'>
                <p>📱</p>
                <p>📷</p>
                <p>🐦</p>
                <p>📘</p>
              </div>

            </div>
            
            <p className='text-white/50 text-center mt-5
            xl:text-md xl:mt-6'>&copy; 2025 Bubble Bliss. All rights reserved.</p>
          </div>
           
        </footer>
    </>
  );
};

export default Footer;