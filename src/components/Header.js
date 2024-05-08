import React from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
    }
    return (
        <>
            <div className={show ? "absolute top-0 left-[0%] h-screen w-full bg-blue-950 flex items-center justify-center z-10 transition-all delay-150 duration-300" : "h-screen w-full absolute -left-[100%] top-0 bg-blue-950 flex flex-col items-center z-10 transtion-all delay-150 duration-300"}>
                <div className="absolute right-1/2 top-0 translate-x-1/2 h-20 w-20 mt-10">
                    <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                </div>
                <div className='absolute right-32 max-sm:right-10 top-12 text-white cursor-pointer hover:text-blue-400' onClick={handleHide}>
                    <RxCross1 className='mr-2 text-2xl' />
                </div>
                <div className="absolute w-max top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center text-white text-2xl font-bold">
                    <Link to="/" className='hover:text-blue-400 mt-5' onClick={handleHide}>Home</Link>
                    <Link to="/shop" className='hover:text-blue-400 mt-5' onClick={handleHide}>Our Shop</Link>
                    <a href="#about" className='hover:text-blue-400 mt-5' onClick={handleHide}>About</a>
                    <a href="#services" className='hover:text-blue-400 mt-5' onClick={handleHide}>Services</a>
                    <a href="#pets" className='hover:text-blue-400 mt-5' onClick={handleHide}>Aquatic Pets</a>
                    <a href="#products" className='hover:text-blue-400 mt-5' onClick={handleHide}>Products</a>
                    <a href="#contact" className='hover:text-blue-400 mt-5' onClick={handleHide}>Contact</a>
                </div>
            </div>
            <div className='relative w-[90%] max-w-7xl h-max flex justify-center items-center text-xl font-bold text-white'>
                <div className="w-full flex justify-between items-center mt-10">
                    <div className="flex justify-center items-center text-xl font-bold cursor-pointer hover:text-blue-300" onClick={handleShow}>
                        Menu<RiMenu3Line className='ml-2 text-2xl' />
                    </div>
                    <div className='max-sm:hidden'>
                        +977 986-******
                    </div>
                </div>
                <div className="absolute right-1/2 top-0 translate-x-1/2 h-20 w-20 mt-10">
                    <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                </div>
            </div>
        </>
    )
}

export default Header
