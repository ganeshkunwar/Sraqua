import React from 'react';
import ServiceCard from '../components/ui/ServiceCard';
import aquarium from '../assets/aquarium3.jpg';
import aquaticPets from '../assets/aq.jpg';
import decorations from '../assets/decorations.jpg';
import equipments from '../assets/originalAquarium.jpg';

const Services = () => {
    return (
        <section className='h-min w-full bg-white flex justify-center items-center overflow-hidden relative' id='services'>
            {/* for wave effect only */}
            <div className="absolute bottom-0 left-0 w-full h-36 wave wave2"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave wave1"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave wave3"></div>
            <div className="absolute bottom-0 left-0 w-full h-36 wave wave4"></div>

            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                <div className='w-full h-full flex items-center justify-center my-20 max-lg:my-12'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Services
                        </h1>
                        <div className="text-7xl max-lg:text-6xl text-blue-950 font-bold">
                            What Are You Looking For ?
                        </div>
                        <div className="text-base text-blue-950 text-center mt-5 w-4/5 max-lg:w-full">
                            We offer beautiful aquatic pets and aquariums at very reasonable price. Not only that we also have beautiful decorations and equipments to make your aquatic pet happy and healthy in his new aquarium. We also provide healthy fish food for your aquatic friend.
                        </div>
                        <div className="grid w-full px-5 sm:px-14 lg:px-24 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5 xl:gap-10 z-[1001] mt-10">
                            <ServiceCard img={aquarium} title="Aquarium" link='/shop/'/>
                            <ServiceCard img={decorations} title="Decorations" link='/shop/decoration item'/>
                            <ServiceCard img={equipments} title="Equipments" link='/shop/'/>
                            <ServiceCard img={aquaticPets} title="Pets and foods" link='/shop/fish food'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
