import React from 'react';

const Card = (props) => {
    return (
        <>
            <div className="w-full max-h-40 aspect-square gap-4 rounded overflow-hidden shadow-lg glassmo cursor-pointer glassmo">
                <div className="px-6 py-4">
                    <div className="font-bold text-golden text-center text-xl mb-2">
                        {props.title}
                    </div>
                    <p className="text-white text-base text-center">
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card
