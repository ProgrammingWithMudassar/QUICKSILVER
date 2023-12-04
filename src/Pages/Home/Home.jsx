import React from 'react';
import { Navbar, SideBar } from '../../Components/index.js';
import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Validator from '../Validator/Validator.jsx';
import Overview from '../Overview/Overview.jsx'

const Home = () => {

  return (
    <Box sx={{ width:"100%", overflowX:'hidden' }}>
      <Navbar />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 19px', gap: "30px" }}>
        <Box sx={{
          width: '70px',
          display: { xs: "none", lg: 'flex' }
        }}>
          <SideBar />
        </Box>
        <Box sx={{ width: { xs: '100%', lg: 'calc(100% - 60px)' }, height: "calc(100vh - 110px)"}}>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/validator' element={<Validator />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
