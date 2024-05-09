import React from 'react';
import { RiMenu3Line, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';
import logo from '../assets/logo.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsHeader = () => {
    const [show, setShow] = useState(false);
    const [dropP, setDropP] = useState(false);
    const [dropF, setDropF] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
        setDropF(false);
        setDropP(false);
    }
    const handleDropP = () => {
        setDropP(!dropP);
        setDropF(false);
    }
    const handleDropF = () => {
        setDropF(!dropF);
        setDropP(false);
    }

    return (
        <>
            <div className="max-md:hidden flex justify-center items-center h-max w-full bg-blue-950 py-6">
                <div className="h-20 w-20">
                    <img src={logo} alt="logo" className='h-full w-full bg-cover rounded-xl' />
                </div>
                <div className="max-w-7xl grid grid-cols-5 gap-5 text-lg">
                    <Link to="/shop" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>All</Link>
                    <div className="relative cursor-pointer flex flex-col justify-center items-center mx-5" onClick={handleDropF}>
                        <div className="flex justify-center text-white hover:text-blue-400 items-center">Filters
                            {!dropF ? <RiArrowDropDownLine className='font-bold text-5xl' /> : <RiArrowDropUpLine className='font-bold text-5xl' />}
                        </div>
                        <div className={dropF ? 'absolute top-12 w-max flex-col justify-center items-center flex rounded-md text-white bg-blue-400 px-5 z-10' : 'hidden'}>
                            <Link to="/shop/internal filter" className='hover:text-black my-2' onClick={handleHide}>Internal Filter</Link>
                            <Link to="/shop/spounge-filter" className='hover:text-black my-2' onClick={handleHide}>Spounge Filter</Link>
                            <Link to="/shop/top filter" className='hover:text-black my-2' onClick={handleHide}>Top Filter</Link>
                            <Link to="/shop/hanging back filter" className='hover:text-black my-2' onClick={handleHide}>Hanging Back Filter</Link>
                        </div>
                    </div>
                    <div className="relative cursor-pointer mx-5 flex flex-col justify-center items-center" onClick={handleDropP}>
                        <div className="flex justify-center text-white hover:text-blue-400 items-center">Pumps
                            {!dropP ? <RiArrowDropDownLine className='font-bold text-5xl' /> : <RiArrowDropUpLine className='font-bold text-5xl' />}
                        </div>
                        <div className={dropP ? 'absolute top-12 w-max flex-col justify-center items-center flex rounded-md text-white bg-blue-400 px-5 z-10' : 'hidden'}>
                            <Link to="/shop/water pump" className='hover:text-black my-2' onClick={handleHide}>Water Pump</Link>
                            <Link to="/shop/air pump" className='hover:text-black my-2' onClick={handleHide}>Air Pump</Link>
                            <Link to="/shop/wave maker" className='hover:text-black my-2' onClick={handleHide}>Wave Maker</Link>
                        </div>
                    </div>
                    <Link to="/shop/cleaning tools" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Cleaning tools</Link>
                    <Link to="/shop/filteration media" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Filteration Media</Link>
                    <Link to="/shop/heater" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Heater</Link>
                    <Link to="/shop/light" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Light</Link>
                    <Link to="/shop/thermometer" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Thermometer</Link>
                    <Link to="/shop/decoration item" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Decoration Item</Link>
                    <Link to="/shop/air pipe" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Air Pipe</Link>
                    <Link to="/shop/pot" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Pot</Link>
                    <Link to="/shop/salt" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Salt</Link>
                    <Link to="/shop/sand" className='hover:text-blue-400 mx-5 text-white' onClick={handleHide}>Sand</Link>
                </div>
            </div>

            {/* for mobile screeen */}
            <div className={show ? "absolute top-0 left-[0%] h-screen w-full bg-blue-950 flex items-center justify-center z-10 transition-all delay-150 duration-300" : "h-screen w-full absolute -left-[100%] top-0 bg-blue-950 flex flex-col items-center z-10 transtion-all delay-150 duration-300"}>
                <div className="absolute right-1/2 top-0 translate-x-1/2 h-20 w-20 mt-10">
                    <img src={logo} alt="logo" className='h-full w-full bg-cover rounded-xl' />
                </div>
                <div className='absolute right-32 max-sm:right-10 top-12 text-white cursor-pointer hover:text-blue-400' onClick={handleHide}>
                    <RxCross1 className='mr-2 text-2xl' />
                </div>
                <div className="absolute w-max top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center text-white text-2xl font-bold">
                    <Link to="/" className='hover:text-blue-400 mt-5' onClick={handleHide}>Home</Link>
                    <div className="relative cursor-pointer mt-2 flex flex-col justify-center items-center" onClick={handleDropF}>
                        <div className="flex justify-center items-center">Filters
                            {!dropF ? <RiArrowDropDownLine className='font-bold text-5xl' /> : <RiArrowDropUpLine className='font-bold text-5xl' />}
                        </div>
                        <div className={dropF ? 'absolute top-12 w-max flex-col justify-center items-center flex bg-white rounded-md text-black px-5 z-10' : 'hidden'}>
                            <Link to="/shop/internal filter" className='hover:text-blue-400 my-2' onClick={handleHide}>Internal Filter</Link>
                            <Link to="/shop/spounge-filter" className='hover:text-blue-400 my-2' onClick={handleHide}>Spounge Filter</Link>
                            <Link to="/shop/top filter" className='hover:text-blue-400 my-2' onClick={handleHide}>Top Filter</Link>
                            <Link to="/shop/hanging back filter" className='hover:text-blue-400 my-2' onClick={handleHide}>Hanging Back Filter</Link>
                        </div>
                    </div>
                    <div className="relative cursor-pointer mt-1 flex flex-col justify-center items-center" onClick={handleDropP}>
                        <div className="flex justify-center items-center">Pumps
                            {!dropP ? <RiArrowDropDownLine className='font-bold text-5xl' /> : <RiArrowDropUpLine className='font-bold text-5xl' />}
                        </div>
                        <div className={dropP ? 'absolute top-12 w-max flex-col justify-center items-center flex bg-white rounded-md text-black px-5 z-10' : 'hidden'}>
                            <Link to="/shop/water pump" className='hover:text-blue-400 my-2' onClick={handleHide}>Water Pump</Link>
                            <Link to="/shop/air pump" className='hover:text-blue-400 my-2' onClick={handleHide}>Air Pump</Link>
                            <Link to="/shop/wave maker" className='hover:text-blue-400 my-2' onClick={handleHide}>Wave Maker</Link>
                        </div>
                    </div>
                    <Link to="/shop/cleaning tools" className='hover:text-blue-400 my-2' onClick={handleHide}>Cleaning tools</Link>
                    <Link to="/shop/filteration media" className='hover:text-blue-400 my-2' onClick={handleHide}>Filteration Media</Link>
                    <Link to="/shop/heater" className='hover:text-blue-400 my-2' onClick={handleHide}>Heater</Link>
                    <Link to="/shop/light" className='hover:text-blue-400 my-2' onClick={handleHide}>Light</Link>
                    <Link to="/shop/thermometer" className='hover:text-blue-400 my-2' onClick={handleHide}>Thermometer</Link>
                </div>
            </div>
            <div className='relative w-[90%] max-w-7xl h-max flex justify-center items-center text-xl font-bold text-black md:hidden'>
                <div className="w-full flex justify-between items-center mt-10">
                    <div className="flex justify-center items-center text-xl font-bold cursor-pointer hover:text-blue-950" onClick={handleShow}>
                        Products<RiMenu3Line className='ml-2 text-2xl' />
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

export default ProductsHeader
