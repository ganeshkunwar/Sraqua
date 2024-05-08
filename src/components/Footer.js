import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className='h-min w-full bg-blue-950 flex justify-center items-center overflow-x-hidden relative bottom-0' id='products'>
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex flex-wrap flex-col justify-center items-center text-white p-4'>
                <div className="absolute bottom-0 left-0 w-full h-28 wave-w wave2"></div>
                <div className="absolute bottom-0 left-0 w-full h-28 wave-w wave1"></div>
                <div className="absolute bottom-0 left-0 w-full h-28 wave-w wave3"></div>
                <div className="absolute bottom-0 left-0 w-full h-28 wave-w wave4"></div>

                <div className='flex flex-wrap justify-between items-start text-white mb-28'>
                    <div className='flex flex-col justify-center items-center m-10'>
                        <div className='font-bold mb-5'>
                            S.R Aqua
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <Link to="/" className='hover:text-blue-400 mt-1'>Home</Link>
                            <a href="#about" className='hover:text-blue-400 mt-1'>About</a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center m-10'>
                        <div className='font-bold mb-5'>
                            Inquiry
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a href="#contact" className='hover:text-blue-400 mt-1'>Contact</a>
                            <a href='https://www.facebook.com/InfoFish' target='_blank' rel='noreferrer' className="hover:text-blue-400 mt-1">Facebook</a>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center m-10'>
                        <div className='font-bold mb-5'>
                            Pictures from
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <a href='https://www.unsplash.com/' target='_blank' rel='noreferrer' className="hover:text-blue-400 mt-1">Unsplash</a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center z-[1001] text-blue-950">Copyrights Reserved &copy; SRAqua</div>
            </div>
        </section>
    )
}

export default Footer
