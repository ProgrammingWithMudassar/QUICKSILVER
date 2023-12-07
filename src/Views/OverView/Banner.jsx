import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import BannerLogo from '../../Assets/png/bannerLogo.png'

const Banner = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
            borderRadius: "10px",
            margin: "10px 0", px:4, py:2,
            height: { xs: "auto", md: '120px' },
            display:'flex', justifyContent:'center', alignItems:'center', gap:'300px',
        }}>
            <img src={BannerLogo} alt="" style={{ width: '80px' }} />
            <Typography sx={{  textAlign:'center', color: theme.palette.white[900], mr:-12 }}>Secure Non-Custodial Staking for PoS Blockchain Projects" refers to a system or platform that allows users to participate in the staking process of manner.</Typography>
            <Typography variant='h4' sx={{ textAlign:'center', color: theme.palette.white[900] }}>Pathrocknetwork</Typography>
        </Box>
    )
}

export default Banner
