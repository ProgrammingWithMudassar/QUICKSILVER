import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { HiOutlineRefresh } from "react-icons/hi";
import Modal from '@mui/material/Modal';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { SlideBarData } from "../../Data/SideBar.js";
import { Link } from 'react-router-dom'
import '../Styles.css'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '10px',
    padding: '20px 0'
};


const Navbar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [showMenu, setShowmenu] = useState(0);
    const handleMenuOpen = () => setShowmenu(1);
    const handleMenuClose = () => setShowmenu(0);


    return (
        <>
            <Box
                sx={{
                    width: "98%", height: '60px',
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "10px",
                    margin: "10px auto",
                    boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: { xs: "0 10px", lg: "0 30px" },
                }}>
                <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>Logo</Typography>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: "30px" }}>
                    <Box>
                        <Button sx={{ color: '#fff', display: 'flex', alignItems: 'center', gap: { xs: "10px", md: "20px", lg: "30px" }, height: '38px', borderRadius: '8px', padding: { xs: "0 4px", md: "0 10px", lg: "0 20px" }, mr: { xs: "-40px", lg: "0" } }} onClick={handleOpen}>QuickSilver<HiOutlineRefresh color="#fff" /></Button>
                    </Box>
                    <Box sx={{ display: { xs: "none", lg: "flex" }, marginRight: { xs: '-30px', lg: '0px' } }}>
                        <input type="text" className="navbar_input" placeholder="Find here..." />
                        <Button sx={{ position: 'absolute', right: "5px", top: '5px', color: '#fff', borderRadius: '8px' }}>Search</Button>
                    </Box>
                    <Box sx={{ display: { xs: "flex", lg: "none" }, marginLeft: '20px', cursor: 'pointer' }}>
                        <IoIosMenu color="#fff" size={40} onClick={handleMenuOpen} />
                    </Box>
                </Box>

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontWeight: 600, textAlign: 'center' }}>Company Name</Typography>
                        <Divider sx={{ margin: "10px 0", backgroundColor: theme.palette.primary.main }} />
                        <Box sx={{ padding: '10px 20px' }}>
                            <Typography variant="body1" >Contant Come from Api</Typography>
                        </Box>
                    </Box>
                </Modal>
            </Box>
            {/* right sidebar */}
            {
                showMenu === 1 &&
                <Box
                    sx={{
                        height: '100vh',
                        width: showMenu ? {xs: "60%", md:"40%", lg:"20%"} : "0",
                        boxShadow: `0 0 40px 6px #E6E6E6`,
                        position: "absolute",
                        top: '0px',
                        right: '0px',
                        zIndex: '1000',
                        backgroundColor: '#fff',
                        transform: `translateX(${showMenu === 1 ? 0 : '100%'})`,
                    }}>
                    <Box sx={{
                        width: "100%", padding: "10px 20px", display: 'flex', justifyContent: 'space-between'
                    }}>
                        <Typography variant="h6" color="initial">Logo</Typography>
                        <RxCross2 onClick={handleMenuClose} size="30px" />
                    </Box>
                    <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <input type="text" className="navbar_input_Mobile" placeholder="Find here..." />
                        <Button sx={{ color: '#fff', borderRadius: '8px', width: '90%', py: 2.3, mt: 1 }}>Search</Button>
                    </Box>
                    <Box sx={{ width: "100%",marginTop:"30px" }}>
                        <Box sx={{ width:"90%",m:'auto',  }}>
                            {SlideBarData.map((item) => (
                                <Link to={`${item.route}`} key={item.key}>
                                    <Box
                                        sx={{
                                            width: "100%",
                                            borderRadius: "10px", display: 'flex', alignItems:'center', gap:1,
                                            mt:2, padding:"6px 10px 5px 10px",
                                            border:"1px solid black",
                                            color:"#000",
                                            '&:hover': {
                                                boxShadow: `0 0 6px 2px ${theme.palette.ShadowColor.main}`,
                                                backgroundColor: theme.palette.primary.main,
                                                cursor: 'pointer',
                                                transform: 'scale(1.05)',
                                                color:"#fff",
                                            },
                                        }}
                                    >
                                        {item.icon && <item.icon size={26}  />}
                                        <Typography variant="h6">{item.text}</Typography>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>
            }
        </>
    );
};

export default Navbar;
