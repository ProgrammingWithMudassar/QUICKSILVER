import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from '../../Routes/Routes.js'
import Private__Routes from '../../Utils/Private__Routes.jsx'
import Layout from '../../Pages/Setups/Layout.jsx'
import { Login } from '../../Pages/index.js'


const Handling__Route = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div >
    )
}

export default Handling__Route