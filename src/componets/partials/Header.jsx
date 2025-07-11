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
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                       <h1 className="text-xl font-bold bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text">
                          Bubble Bliss
                        </h1>
                        <p>🧋</p>
                        
                    </div>
                    <div className="hidden md:flex space-x-8 text-gray-500">
                        <a href="#home" className=' font-medium hover:text-purple-500'>Home</a>
                        <a href="#services" className=' font-medium hover:text-purple-500'>Types</a>
                        <a href="#doctors" className=' font-medium hover:text-purple-500'>Toppings</a>
                        <a href="#emergency" className='font-medium hover:text-purple-500'>Benifits</a>
                        <a href="#pharmacy" className=' font-medium hover:text-purple-500'>Contact</a>
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
          <a href="#home" className='font-medium hover:text-pink-500'>Home</a>
            <a href="#services" className='font-medium hover:text-pink-500' onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#doctors" className='font-medium hover:text-pink-500' onClick={() => setIsMenuOpen(false)}>Doctors</a>
            <a href="#emergency" className='font-medium hover:text-pink-500' onClick={() => setIsMenuOpen(false)}>Emergency</a>
            <a href="#pharmacy" className='font-medium hover:text-pink-500' onClick={() => setIsMenuOpen(false)}>Pharmacy</a>
      </div>
    </div>
    </>
  );
};

export default Header;