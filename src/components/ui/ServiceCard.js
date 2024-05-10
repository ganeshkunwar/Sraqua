import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    return (
        <Link to={props.link} className="w-full h-full aspect-square bg-blue-950 flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm p-2 rounded-md scale-transition">
            <div className="rounded-md bg-blue-950 w-full h-[90%] text-white hover:text-blue-950 hover:bg-white transition-all duration-300 overflow-hidden">
                <img src={props.img} alt="services" className='h-full w-full object-cover transition-all duration-500' />
            </div>
            <div className="text-base font-bold text-blue-400 mt-4 colr">
                {props.title}
            </div>
        </Link>
    )
}

export default ServiceCard
