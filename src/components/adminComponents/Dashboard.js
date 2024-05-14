import { React, useState, useEffect } from 'react';
import axios from '../../api/axios';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const PRODUCTS_URL = '/products';

const Dashboard = () => {
    const axiosPrivate = useAxiosPrivate();

    const [products, setProducts] = useState();
    const [query, setQuery] = useState("");

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getProducts = async () => {
            try {
                const response = await axios.get(PRODUCTS_URL, {
                    signal: controller.signal
                });
                isMounted && setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, []);

    const handleDelete = async (id) => {
        console.log(id);
        try {
            const response = await axiosPrivate.delete(`/editProducts/${id}`);
            setSuccess(true);
            setSuccessMsg('Product Deleted Successfully');
            setInterval(() => {
                setSuccess(false);
            }, 2000);
        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMsg("Missing Product Id");
                console.log(err.response);
            } else if (err.response?.status === 401) {
                setErrorMsg('Unauthorized');
            } else {
                setErrorMsg("Failed to delete product");
            }
            setError(true);
            setInterval(() => {
                setError(false);
            }, 2000);
        }
    }


    return (
        <div className='relative flex flex-col justify-center items-center w-full bg-white'>
            <div className={error ? 'absolute top-5 -right-60 p-4 rounded-lg text-white bg-red-700 transition-all duration-300' : 'absolute -top-96 -right-96 p-4 rounded-lg text-white bg-red-700 transition-all duration-300'}>
                {errorMsg}
            </div>
            <div className={success ? 'absolute top-5 -right-60 p-4 rounded-lg text-white bg-green-700 transition-all duration-300' : 'absolute -top-96 -right-96 p-4 rounded-lg text-white bg-green-700 transition-all duration-300'}>
                {successMsg}
            </div>
            <div className="p-2 w-full flex justify-center items-center">
                <input
                    type="text"
                    id="search-navbar"
                    className="w-full p-2 px-4 text-base text-black border border-blue-950 rounded-sm bg-gray-100"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-white uppercase bg-blue-950">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 max-sm:hidden">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.length
                                ? (
                                    products.filter((product) =>
                                        product.productName.toLowerCase().includes(query)
                                    ).map((product) => <tr className="bg-white border-b text-black hover:bg-gray-200" key={product.id}>
                                        <th scope="row" className="px-6 py-4 font-medium text-ellipsis">
                                            {product.productName}
                                        </th>
                                        <td className="px-6 py-4 max-sm:hidden">
                                            {product.category}
                                        </td>
                                        <td className="px-6 py-4 max-sm:hidden">
                                            Rs.{product.price}
                                        </td>
                                        <td className="px-6 py-4 text-right flex justify-center items-center">
                                            <Link to={`editProduct/${product.id}`} className="font-medium bg-blue-950 hover:bg-blue-500 p-1 rounded-md text-white"><AiFillEdit /></Link>
                                            <button className="ml-4 font-medium bg-red-600 hover:bg-red-700 text-white p-1 rounded-md" onClick={e => handleDelete(product.id)}><AiFillDelete /></button>
                                        </td>
                                    </tr>)
                                ) : <tr className='text-black'>
                                    <td>No data found</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard
