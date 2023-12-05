import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import { useTheme } from '@emotion/react'
import { FaCaretDown } from "react-icons/fa";
// import Lines from '../../Data/ChartsData/TokenomicsData.json'
// import TokenomicsChart from '../TokenomicsChart';
import MyResponsiveRadialBar from './RadialBar';
import data from '../../Data/ChartsData/RadialChartData.json'
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const TokenomicsCard = () => {
    const theme = useTheme();


    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.white[900],
            boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
            borderRadius: "10px",
            margin: "10px 0",
            padding: "20px 10px 10px 10px",
            height: '240px'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography color="initial" sx={{ fontSize: '16px' }}>Tokenomics</Typography>
                        </Box>
                        <Button sx={{ color: "#fff", borderRadius: "30px", fontSize: "10px", padding: '0 20px' }}>See More</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{  display: 'flex', flexDirection:'column', gap:2,}}>
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ width: "20px", height: '20px', borderRadius: '50%', backgroundColor: "#8da0cb",boxShadow:`0 0 10px 6px ${theme.palette.ShadowColor.main}` }}></Typography>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>Total</Typography>
                            <Typography variant="body1" color="initial" sx={{ fontWeight: 800, mt: "-5px" }}>500M</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ width: "20px", height: '20px', borderRadius: '50%', backgroundColor: "#66c2a5",boxShadow:`0 0 10px 6px ${theme.palette.ShadowColor.main}` }}></Typography>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>Supply <HiTrendingUp color='#17b73a' /></Typography>
                            <Typography variant="body1" color="initial" sx={{ fontWeight: 800, mt: "-5px" }}>234.78M</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ width: "20px", height: '20px', borderRadius: '50%', backgroundColor: "#fc8d62",boxShadow:`0 0 10px 6px ${theme.palette.ShadowColor.main}` }}></Typography>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>Bonded <span style={{ fontSize:"12px" }}>(33%)</span> <HiTrendingDown color='#d80340' /></Typography>
                            <Typography variant="body1" color="initial" sx={{ fontWeight: 800, mt: "-5px" }}>78.6M</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <MyResponsiveRadialBar data={data} h={"210px"}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenomicsCard
