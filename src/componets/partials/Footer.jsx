import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='py-8 bg-gray-800'>
          <div className=' max-w-6xl mx-auto px-4'>
            <div className='justify-items-center border-b border-white/10'>
              <div className="flex flex-col mb-4">
                <div className='flex gap-2 items-center mb-2'>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
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
            
            <p className='text-white/50 text-center mt-5'>&copy; Bubble Bliss. All rights reserved.</p>
          </div>
           
        </footer>
    </>
  );
};

export default Footer;