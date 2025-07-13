import React from 'react'
import BenefitsCards from '../../../partials/BenefitsCards';

const Benifits = () => {
  return (
    <>
      {/* Benefits */}
      <section className='w-full py-16'>
        <div className="max-w-7xl mx-auto px-4 ">
            <div className='justify-items-center text-center
            xl:grid xl:grid-cols-[2fr_1fr] xl:justify-items-start'>
              <div className='wrapper '>
                <h2 className='font-bold text-3xl mb-6
                xl:text-2xl xl:text-left'>Why <span className='bg-gradient-to-r from-purple-500 to bg-pink-500 text-transparent bg-clip-text'>Milk Tea</span> is Good For You</h2>
                <BenefitsCards
                bg={"bg-pink-100"}
                check_color={"text-pink-500"}
                title={"Antioxidant Rich"}
                description={"Tea contains polyphenols that help fight free radicals."}/>
                <BenefitsCards
                bg={"bg-purple-100"}
                check_color={"text-purple-500"}
                title={"Energy Boost"}
                description={"Natural caffeince provides a gentle lift without coffee jitters."}/>
                <BenefitsCards
                bg={"bg-yellow-100"}
                check_color={"text-yellow-500"}
                title={"Mood Enhancer"}
                description={"The comforting warmth and sweetness can brighten your day."}/>

              </div>
              <div className='group px-10 py-16 bg-gradient-to-br from-pink-100 to-purple-100 shadow-md rounded-xl w-64 hover:from-purple-100 hover:to-pink-100 transition-all duration-300'>
                <p className='text-6xl mb-4 group-hover:animate-ping transition-all duration-300'>💖</p>
                <p>"A cup of milk tea a day keeps the stress away!"</p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Benifits;