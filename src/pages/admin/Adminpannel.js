import React, { useState } from 'react';
import AddProducts from '../../components/adminComponents/AddProducts';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import useLogout from '../../hooks/useLogout';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDashboard, MdShoppingBag, MdLogout } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoBagAdd } from "react-icons/io5";
import logo from '../../assets/logo.jpg';

const AdminPannel = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
    }

    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section className='w-full h-full flex flex-col items-center overflow-x-hidden bg-gray-50'>
            <div className='relative w-full max-w-7xl h-full flex justify-center items-center'>
                <aside id="default-sidebar" className={show ? "absolute top-0 left-0 z-40 w-64 h-screen transition-transform" : "absolute top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"} aria-label="Sidebar">
                    <button className='absolute top-5 right-5 text-black flex sm:hidden hover:text-white hover:bg-blue-950 rounded-md' onClick={handleHide}>
                        <RxCross2 className='h-6 w-6' />
                    </button>
                    <div className="h-full px-3 py-4 overflow-y-auto bg-white shadow-md">
                        <div className="h-20 w-20 mb-10">
                            <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                        </div>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <Link to='/admin-pannel/dashboard' className="flex items-center p-2 text-black rounded-lg hover:bg-blue-950 hover:text-white">
                                    <MdDashboard />
                                    <span className="ms-3">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/admin-pannel/addProduct" className="flex items-center p-2 text-black rounded-lg hover:bg-blue-950 hover:text-white">
                                    <IoBagAdd />
                                    <span className="ms-3">Add Products</span>
                                </Link>
                            </li>
                            <li>
                                <button className="flex items-center p-2 text-black rounded-lg hover:bg-blue-950 hover:text-white" onClick={signOut}>
                                    <MdLogout />
                                    <span className="ms-3">Sign Out</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
                <button className='absolute top-2 left-2 z-39 flex items-center p-2 text-black rounded-lg hover:bg-blue-950 hover:text-white' onClick={handleShow}>
                    <RxHamburgerMenu />
                </button>
                <div className='w-[60%] bg-white min-h-screen flex flex-col items-center p-3'>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default AdminPannel
