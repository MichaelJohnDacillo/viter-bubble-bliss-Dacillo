import React from 'react'

const Contact = () => {
  return (
    <>
        <section className="w-full py-20 bg-gradient-to-br from-pink-100 to-purple-100
        xl:py-16">
          <div className="max-w-[98.5rem] mx-auto px-4 justify-items-center">
            <h2 className='font-bold text-3xl text-center mb-2'>Get Your <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text'>Milk Tea</span> Fix</h2>

            <p className='text-center text-gray-600 mb-12 w-[27rem] xl:w-[36rem]'>Have questions or want to share your favorite flavor? We'd love to hear from you!</p>
            <form className=' bg-white px-4 py-4 shadow-lg w-full rounded-xl
            md:w-[46rem] lg:w-[56rem] '>
              <div className="p-4">
                <div className='flex flex-col text-gray-600 
                md:flex-row md:gap-6'>
                  <div className='flex flex-col mb-6 md:w-full'>
                    <span className='mb-2'>Your Name</span>
                    <input type="text" placeholder='Jane Doe' className='border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-pink-100 focus:outline focus:outline-pink-500 focus:ring-2 focus:ring-pink-200 focus:shadow-xl hover:shadow-md'/>
                  </div>
                  <div className='flex flex-col mb-6 md:w-full'>
                    <span className='mb-2'>Email Address</span>
                    <input type="text" placeholder='jane@example.com' className='border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-pink-100 focus:outline focus:outline-pink-500 focus:ring-2 focus:ring-pink-200 focus:shadow-xl hover:shadow-md'/>
                  </div>
                </div>
                <div className='flex flex-col mb-6 text-gray-600'>
                  <span className='mb-2'>Subject</span>
                  <input type="text" placeholder="What's this about?" className='border rounded-md px-4 py-2 focus:ring-offset-2 focus:border-pink-100 focus:outline focus:outline-pink-500 focus:ring-2 focus:ring-pink-200 focus:shadow-xl hover:shadow-md'/>
                </div>
                <div className='flex flex-col mb-6 text-gray-600
                xl:mb-8'>
                  <span className='mb-2'>Your Message</span>
                  <textarea name="" id="" placeholder='Tell us about your favorite milk tea...' className='border rounded-md px-4 pt-2 pb-14 focus:ring-offset-2 focus:border-pink-100 focus:outline focus:outline-pink-500 focus:ring-2 focus:ring-pink-200 focus:shadow-xl hover:shadow-md'></textarea>
                </div>
                <button className='text-white font-semibold w-full bg-pink-500 h-12 shadow-md rounded-md hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transform transition-transform duration-200 active:scale-105'>Send Message</button>
              </div>
            </form>
          </div>
        </section>
    </>
  );
};

export default Contact;