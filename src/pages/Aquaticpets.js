import React from 'react';
import PetsCard from '../components/ui/PetsCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fish1 from '../assets/fish1 (1).png';
import fish2 from '../assets/fish1 (2).png';
import fish3 from '../assets/fish1 (3).png';
import fish4 from '../assets/fish1 (4).png';
import fish5 from '../assets/fish1 (5).png';
import fish6 from '../assets/fish1 (6).png';
import fish7 from '../assets/fish1 (7).png';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const AquaticPets = (props) => {
    return (
        <section className='h-min w-full bg-blue-950 flex justify-center items-center overflow-hidden relative' id='pets'>
            <div className='w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                <div className='w-full h-full flex items-center justify-center my-20 max-lg:my-12'>
                    <div className="flex flex-col items-center justify-center w-full max-lg:w-full max-lg:p-5 h-max text-center">
                        <h1 className="text-2xl font-bold text-blue-400 mb-4">
                            Our Shop
                        </h1>
                        <div className="text-7xl max-lg:text-6xl text-white font-bold">
                            Aquatic Pets
                        </div>
                        <div className="text-base text-white text-center mt-5 w-4/5 max-lg:w-full">
                            Hundreds of beautiful aquatic pets of different types are available in our shop with a wide range of aquariums of your choice. Aquatic plants, vines, corals and other decorations are also available. We also provide fish food, other suppliments, medicines and other various aquarium needs.
                        </div>
                        <div className="w-full px-5 sm:px-14 lg:px-24 z-[1001] mt-10">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                responsive={responsive}
                                ssr={true} // means to render carousel on server-side.
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={5000}
                                keyBoardControl={true}
                                customTransition="all .5"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                // removeArrowOnDeviceType={["tablet", "mobile"]}
                                deviceType={props.deviceType}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div><PetsCard img={fish1} title="Fish" /></div>
                                <div><PetsCard img={fish3} title="Fish" /></div>
                                <div><PetsCard img={fish4} title="Fish" /></div>
                                <div><PetsCard img={fish2} title="Fish" /></div>
                                <div><PetsCard img={fish5} title="Fish" /></div>
                                <div><PetsCard img={fish6} title="Fish" /></div>
                                <div><PetsCard img={fish7} title="Fish" /></div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AquaticPets
