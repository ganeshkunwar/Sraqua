import React from 'react';
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.jpg';
import axios from '../../api/axios';
import useAtuh from '../../hooks/useAuth';

const LOGIN_URL = '/auth';

const LoginPage = () => {
    const navigate = useNavigate();
    const from = '/admin-pannel/dashboard';

    const { setAuth } = useAtuh();

    const [user, setUser] = useState('');
    const [psw, setPsw] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [eror, setEror] = useState(false);
    const [showPass, setShowPass] = useState(false);

    useEffect(() => {
        setErrMsg('');
    }, [user, psw]);

    const handleShowPass = () => {
        setShowPass(!showPass);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, psw }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, psw, roles, accessToken })
            setUser('');
            setPsw('');
            navigate(from, { replace: true })
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing username or password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            setEror(true);
            setInterval(() => {
                setEror(false);
            }, 2000);
        }

    }

    return (
        <section className='h-screen w-full bg-white flex justify-center items-center overflow-x-hidden relative' id='products'>
            <div className='relative w-[90%] max-lg:w-full max-w-7xl h-full flex justify-center items-center text-white'>
                <div className={eror ? 'absolute top-5 right-5 p-4 rounded-lg text-white bg-red-700 transition-all duration-300' : 'absolute -top-96 -right-96 p-4 rounded-lg text-white bg-red-700 transition-all duration-300'}>
                    {errMsg}
                </div>
                <div className=' w-max h-max flex flex-col items-center justify-center my-5 max-lg:my-5 shadow-xl p-5'>
                    <div className="h-20 w-20">
                        <img src={logo} alt="" className='h-full w-full bg-cover rounded-xl' />
                    </div>
                    <div className="text-5xl max-lg:text-3xl text-blue-950 font-bold mb-5 ">
                        Login
                    </div>
                    <div className="form">
                        <form action="POST" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                            <div className="flex flex-col justify-center items-start m-3">
                                <label htmlFor="username" className="text-base text-black my-2">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='eg: John Doe'
                                    className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                                    value={user}
                                    onChange={e => setUser(e.target.value)}
                                    autoComplete='off'
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start m-3 relative">
                                <label htmlFor="password" className="text-base text-black my-2">
                                    Password
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    id='password'
                                    placeholder='Password'
                                    className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                                    value={psw}
                                    onChange={(e) => setPsw(e.target.value)}
                                    required
                                />
                                {showPass ? <FaEyeSlash className='absolute -right-5 text-black bottom-4 cursor-pointer' onClick={handleShowPass} /> : <FaEye className='absolute -right-5 text-black bottom-4 cursor-pointer' onClick={handleShowPass} />}
                            </div>
                            <input type='submit' className={"w-60 mt-7 bg-blue-950 text-white transition-all duration-500 p-3 cursor-pointer"} value={"Login"} />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
