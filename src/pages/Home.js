import React from 'react';
import Header from '../components/Header';
import Typewriter from 'typewriter-effect';
import About from './About';
import Services from "./Services";
import AquaticPets from "./AquaticPets";
import Contact from "./Contact";
import Shop from "./Shop";
import { FaStoreAlt } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Home = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
  return (
    <>
      <section className='bgimg w-full h-screen flex flex-col items-center overflow-x-hidden' id='home'>
        <Header />
        <div className='w-[90%] max-w-7xl h-screen mt-10 flex justify-center items-center text-white'>
          <div className='w-full h-full flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center w-3/5 h-max text-center">
              <h1 className="text-2xl font-bold text-blue-400 mb-4">
                S.R Aqua and Pet House
              </h1>
              <div className="text-7xl max-sm:text-6xl text-white font-bold">
                LOOKING FOR
                <Typewriter
                  onInit={(type) => {
                    type.typeString('AN AQUARIUM ?')
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString('AN AQUATIC PET ?')
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="button mt-20">
                <a href="#contact">
                  <button className='bg-blue-950 hover:bg-white hover:text-blue-950 text-xl font-bold py-5 px-10 transition duration-500'>Contact Us</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <About />
      <AquaticPets />
      <Shop />
      <Contact />
      <Link to='/shop/' className="fixed bottom-[18%] max-md:bottom-[15%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm" onClick={handleScroll}>
        <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1" >
          <FaStoreAlt className='w-full h-full' />
        </div>
        Shop
      </Link >
      <a href='https://www.facebook.com/InfoFish' target='_blank' rel='noreferrer' className="fixed bottom-[5%] right-[2%] z-[2000] w-max flex flex-col justify-center items-center text-blue-400 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
        <div className="rounded-full bg-white w-12 h-12 p-2 text-blue-950 hover:text-blue-950 hover:bg-blue-400 transition-all duration-300 mr-1">
          <AiFillMessage className='w-full h-full' />
        </div>
        Chat
      </a>
    </>
  )
}

export default Home
