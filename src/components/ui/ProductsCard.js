import React from 'react';

const ProductsCard = (props) => {
    return (
        <div className="w-full h-full aspect-square bg-white flex flex-col justifty-center items-center text-blue-950 transition-all duration-300 cursor-pointer text-base max-lg:text-sm p-1 rounded-md scale-transition hover:drop-shadow-lg">
            <div className="rounded-md bg-white w-full h-[90%] text-white hover:text-blue-950 hover:bg-white transition-all duration-300 overflow-hidden">
                <img src={props.img} alt="products" className='h-full w-full object-contain transition-all duration-500' />
            </div>
            <div className="text-base text-black mt-4 colr flex flex-col justify-center items-center">
                <p className='font-bold'>{props.title}</p>
                <p>Price: {props.price}</p>
            </div>
        </div>
    )
}

export default ProductsCard
