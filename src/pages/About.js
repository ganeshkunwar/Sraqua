import React from 'react';
import { BiSolidMedal } from 'react-icons/bi';
import { BsBox2HeartFill } from 'react-icons/bs';
import { GiMoneyStack, GiCirclingFish } from 'react-icons/gi';
import { TiTick } from 'react-icons/ti';
import { RiEmotionHappyFill } from 'react-icons/ri';
import aquarium from '../assets/aquarium2.jpg';

const About = () => {
    return (
        <>
            <section className='h-min w-full bg-white flex justify-center items-center overflow-hidden relative' id='about'>
                {/* for wave effect only */}
                <div className="absolute bottom-0 left-0 w-full h-36 wave wave2"></div>
                <div className="absolute bottom-0 left-0 w-full h-36 wave wave1"></div>
                <div className="absolute bottom-0 left-0 w-full h-36 wave wave3"></div>
                <div className="absolute bottom-0 left-0 w-full h-36 wave wave4"></div>

                <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                    <div className='w-full h-full flex items-center justify-center my-20 max-lg:my-12'>
                        <div className="flex flex-col items-center justify-center w-3/5 max-lg:w-full max-lg:p-5 h-max text-center">
                            <h1 className="text-2xl font-bold text-blue-400 mb-4">
                                Hello there, Welcome!!
                            </h1>
                            <div className="text-7xl max-lg:text-6xl text-blue-950 font-bold">
                                Everything Your Aquatic Pet Needs
                            </div>
                            <div className="text-base text-black text-justify mt-5 w-4/5 max-lg:w-full">
                                SR Aqua and Pet House is a professional aquatic pet shop unlike any other. We provide you with everything your aquatic pet needs from aquarium to decorations. Not only that we also have some beautiful aquatic pets for you that you are sure to like.
                            </div>
                            <div className="w-full flex justify-between items-center font-bold mt-12 z-[1001]">
                                <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                                    <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                        <BiSolidMedal className='w-full h-full' />
                                    </div>
                                    Experience
                                </div>
                                <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                                    <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                        <TiTick className='w-full h-full' />
                                    </div>
                                    Authenticity
                                </div>
                                <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                                    <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                        <GiMoneyStack className='w-full h-full' />
                                    </div>
                                    Cost Friendly
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='h-min w-full bg-blue-950 flex justify-center items-center overflow-hidden relative'>
                <div className='relative w-[90%] max-w-7xl h-full flex flex-col justify-center items-center text-white overflow-hidden'>
                    <div className="absolute top-1/2 -translate-y-1/2 right-10 w-1/3 h-[90%] max-lg:hidden">
                        <img src={aquarium} alt="girl" className='h-full w-full' />
                    </div>
                    <div className='w-full h-full flex flex-col items-start max-lg:items-center justify-center mt-20 max-lg:mt-12 z-10'>
                        <div className="flex flex-col items-center justify-center w-3/5 max-lg:w-full h-max text-center">
                            <h1 className="text-2xl font-bold text-blue-400 mb-4">
                                Why Choose Us
                            </h1>
                            <div className="text-7xl max-lg:text-6xl text-white font-bold">
                                Leading The Market
                            </div>
                            <div className="text-base text-blue-200 text-justify mt-5 w-4/5 max-lg:w-full">
                                Because of our long run in the market we have the capability and experience to go beyond your expectations. From aquatic pets to aquariums, decorations and necessary equipments.
                            </div>
                        </div>
                    </div>
                    <div className="w-3/5 max-lg:w-full flex bg-white justify-around items-center font-bold my-12 z-10 p-5 text-center">
                        <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                            <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                <GiCirclingFish className='w-full h-full' />
                            </div>
                            <div className="flex flex-col">
                                <p>100+</p> Aquatic Pets
                            </div>
                        </div>
                        <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                            <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                <RiEmotionHappyFill className='w-full h-full' />
                            </div>
                            <div className="flex flex-col">
                                <p>500+</p> Happy Customers
                            </div>
                        </div>
                        <div className="flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm">
                            <div className="rounded-full bg-blue-950 w-16 max-lg:w-10 h-16 max-lg:h-10 p-2 text-white hover:text-blue-950 hover:bg-white transition-all duration-300">
                                <BsBox2HeartFill className='w-full h-full' />
                            </div>
                            <div className="flex flex-col">
                                <p>200+</p> Products
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
