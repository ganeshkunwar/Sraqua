import React from 'react';
import { TbMail } from 'react-icons/tb';
import { TbMapPinFilled } from 'react-icons/tb';
import { SlScreenSmartphone } from 'react-icons/sl';
import { BsFacebook, BsYoutube } from 'react-icons/bs';

const Contact = () => {
    return (
        <section className='relative h-screen w-full flex justify-center items-center flex-col bg-white' id='contact'>
            <div className="absolute top-4 z-10 py-3">
                <h1 className='text-center text-3xl bg-blue-950 text-white p-2 rounded font-bold mt-4'>CONTACT US</h1>
            </div>
            <div className="absolute left-5 bottom-5 z-10 text-blue-400 bg-blue-950">
                <h1 className='text-center text-xl text-white bg- p-2 font-bold'>Contact Info</h1>
                <div className="text-base p-3 flex items-center">
                    <div className="text-blue-400 items-center">
                        <TbMail className='mr-4 text-3xl' />
                    </div>
                    <div className="mail text-white">
                        <p className="text-blue-400">E-mail</p>
                        <p className='text-white '>sraqua@gmail.com</p>
                    </div>
                </div>
                <div className="text-base p-3 flex items-center">
                    <div className="text-blue-400 items-center">
                        <SlScreenSmartphone className='mr-4 text-3xl' />
                    </div>
                    <div className="mail text-white">
                        <p className="text-blue-400">Phone no.</p>
                        <p className='text-white'>9860679848</p>
                        <p className='text-white'>9818607539</p>
                    </div>
                </div>
                <div className="text-base p-3 flex items-center">
                    <div className="text-blue-400 items-center">
                        <TbMapPinFilled className='mr-4 text-3xl' />
                    </div>
                    <div className="mail">
                        <p className="text-blue-400">Location</p>
                        <p className='text-white'>Tenzing Chowk, Kapan</p>
                    </div>
                </div>
                <a href='https://www.facebook.com/InfoFish' target='_blank' rel='noreferrer' className="text-base p-3 flex items-center cursor-pointer">
                    <div className="text-blue-400 items-center">
                        <BsFacebook className='mr-4 text-3xl' />
                    </div>
                    <div className="mail">
                        <p className="text-blue-400">Facebook</p>
                        <p className='text-white'>Sr Aqua and Pet House</p>
                    </div>
                </a>
                <a href='https://www.youtube.com/@GoldfishNepal' target='_blank' rel='noreferrer' className="text-base p-3 flex items-center cursor-pointer">
                    <div className="text-blue-400 items-center">
                        <BsYoutube className='mr-4 text-3xl' />
                    </div>
                    <div className="mail">
                        <p className="text-blue-400">Youtube</p>
                        <p className='text-white'>Goldfish Nepal</p>
                    </div>
                </a>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.648093281081!2d85.35362577936608!3d27.72814962760981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1bf6cbcdabf1%3A0xfed1d268b3e8ecb0!2sS.R%20Aqua%20and%20Pet%20House!5e0!3m2!1sen!2snp!4v1697608613667!5m2!1sen!2snp" className='absolute h-full w-full grayscale invert' loading="lazy" title='google-maps'></iframe>
        </section>
    )
}

export default Contact
