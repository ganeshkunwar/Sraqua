import React from 'react';
import { useState } from 'react';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const ADDPRODUCTS_URL = '/editProducts';

const AddProducts = () => {

    const axiosPrivate = useAxiosPrivate();

    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const [productName, setProductName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPrivate.post(ADDPRODUCTS_URL,
                JSON.stringify({ productName, image, category, price, stock }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response?.data));
            setProductName('');
            setImage('');
            setCategory('');
            setPrice('');
            setStock('');
            setSuccess(true);
            setSuccessMsg('Product Added Successfully');
            setInterval(() => {
                setSuccess(false);
            }, 2000);
        } catch (err) {
            if (!err?.response) {
                setErrorMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrorMsg('Missing Product Name, image, category, price or stock');
            } else if (err.response?.status === 401) {
                setErrorMsg('Unauthorized');
            } else {
                setErrorMsg("Failed to add product");
            }
            setError(true);
            setInterval(() => {
                setError(false);
            }, 2000);
        }
    }

    return (
        <div className=' w-max h-max flex flex-col items-center justify-center my-5 max-lg:my-5 shadow-xl p-5'>
            <div className={error ? 'absolute top-5 right-5 p-4 rounded-lg text-white bg-red-700 transition-all duration-300' : 'absolute -top-96 -right-96 p-4 rounded-lg text-white bg-red-700 transition-all duration-300'}>
                {errorMsg}
            </div>
            <div className={success ? 'absolute top-5 right-5 p-4 rounded-lg text-white bg-green-700 transition-all duration-300' : 'absolute -top-96 -right-96 p-4 rounded-lg text-white bg-green-700 transition-all duration-300'}>
                {successMsg}
            </div>
            <div className="text-3xl max-lg:text-3xl text-blue-950 font-bold mb-5 ">
                Add Prodcut
            </div>

            <div className="form">
                <form action="POST" className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-center items-start m-3">
                        <label htmlFor="name" className="text-base text-black my-2">
                            Product name
                        </label>
                        <input
                            type="text"
                            placeholder='eg: Six Seven'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={productName}
                            onChange={e => setProductName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3">
                        <label htmlFor="image" className="text-base text-black my-2">
                            Product image
                        </label>
                        <input
                            type="text"
                            placeholder='eg: https://i.imgur.com/wzN7TJr.jpg'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="category" className="text-base text-black my-2">
                            Category
                        </label>
                        <input
                            type='text'
                            placeholder='eg: Fish Food'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="price" className="text-base text-black my-2">
                            Price
                        </label>
                        <input
                            type='text'
                            placeholder='eg: 600'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col justify-center items-start m-3 relative">
                        <label htmlFor="stock" className="text-base text-black my-2">
                            Stock
                        </label>
                        <input
                            type='text'
                            placeholder='eg: 4'
                            className="w-60 bg-white shadow-xl focus:outline-none active:outline-none focus:border-white transition-colors duration-500 p-2 text-black"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                            required
                        />
                    </div>
                    <input type='submit' className={"w-60 mt-7 bg-blue-950 text-white transition-all duration-500 p-3 cursor-pointer"} value={"Add Product"} onClick={handleSubmit} />
                </form>
            </div>
        </div>
    )
}

export default AddProducts;
