import React from 'react'
import { FaClinicMedical, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
        {/* Navigation */}
        <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="max-w-[96.5rem] mx-auto px-4">
                <div className="flex justify-between items-center py-4
                xl:py-3">
                    <div className="flex items-center space-x-2">
                      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text
                      ">
                        Bubble Bliss
                      </h1>
                      <p>🧋</p>
                        
                    </div>
                    <div className="hidden md:flex space-x-8 text-gray-800
                    xl:text-md">
                        <a href="#home" className='hover:text-pink-300'>Home</a>
                        <a href="#types" className='hover:text-pink-300'>Types</a>
                        <a href="#toppings" className='hover:text-pink-300'>Toppings</a>
                        <a href="#benefits" className='hover:text-pink-300'>Benefits</a>
                        <a href="#contact" className=' hover:text-pink-300'>Contact</a>
                    </div>
                    <button
                    onClick={toggleMenu}
                    className="md:hidden text-xl text-gray-500 focus:outline-none">
                        {isMenuOpen ? <FaTimes /> : "☰"}
                    </button>
                </div>
            </div>
        </nav>

        {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col text-gray-500 items-center space-y-8 text-2xl">
            <a href="#home" className='font-medium hover:text-pink-300' onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#types" className='font-medium hover:text-pink-300' onClick={() => setIsMenuOpen(false)}>Types</a>
            <a href="#toppings" className='font-medium hover:text-pink-300' onClick={() => setIsMenuOpen(false)}>Toppings</a>
            <a href="#benefits" className='font-medium hover:text-pink-300' onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#contact" className='font-medium hover:text-pink-300' onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </div>
    </>
  );
};

export default Header;