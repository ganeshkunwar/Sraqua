import React from 'react';

const PetsCard = (props) => {
    return (
        <div className="w-full h-full aspect-square bg-white flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm p-2 rounded-md scale-transition border-4 border-blue-950">
            <div className="rounded-md bg-white hover:bg-white w-full h-full text-white hover:text-blue-950 transition-all duration-300 overflow-hidden">
                <img src={props.img} alt="aquatic pets" className='h-full w-full object-cover transition-all duration-500' />
            </div>
        </div>
    )
}

export default PetsCard
