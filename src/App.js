import React from 'react'
import Layout from './Layout';
import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage';
import CategoryProducts from './pages/CategoryProducts';
import LoginPage from './pages/admin/LoginPage';
import AdminPannel from './pages/admin/AdminPannel';
import RequireAuth from './components/RequireAuth';
import PresistLogin from './components/PresistLogin';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/adminComponents/Dashboard';
import AddProducts from './components/adminComponents/AddProducts';
import EditProduct from './components/adminComponents/EditProduct';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* Public routes */}
                <Route path='/' element={<Home />} />
                <Route path='/sraqua' element={<Home />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='shop' element={<ProductsPage />} />
                <Route path='shop/:pCategory' element={<CategoryProducts />} />
                {/* <Route path='admin-pannel' element={<AdminPannel />} /> */}

                {/* Protected routes */}
                <Route element={<PresistLogin />}>
                    <Route element={<RequireAuth />}>
                        <Route path='admin-pannel' element={<AdminPannel />} >
                            <Route path='dashboard' element={<Dashboard />} />
                            <Route path='addProduct' element={<AddProducts />} />
                            <Route path='dashboard/editProduct/:pId' element={<EditProduct />} />
                        </Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default App


