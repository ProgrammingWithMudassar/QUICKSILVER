import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import { useTheme } from '@emotion/react'
import { FaCaretDown } from "react-icons/fa";
import Lines from '../../Data/ChartsData/TokenomicsData.json'
import TokenomicsChart from '../TokenomicsChart';
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
                            <Typography color="initial" sx={{ fontSize: '12px' }}>Tokenomics</Typography>
                            <Typography color="initial" sx={{ fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>Last One Month<FaCaretDown /></Typography>
                        </Box>
                        <Button sx={{ color: "#fff", borderRadius: "30px", fontSize: "10px", padding: '0 20px' }}>See More</Button>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{  display: 'flex', flexDirection:'column', gap:3,mt:5}}>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ width: "20px", height: '20px', borderRadius: '50%', backgroundColor: "#f47560",boxShadow:`0 0 10px 6px ${theme.palette.ShadowColor.main}` }}></Typography>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>Supply <HiTrendingUp color='#17b73a' /></Typography>
                            <Typography variant="body1" color="initial" sx={{ fontWeight: 800, mt: "-5px" }}>234.78M</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography sx={{ width: "20px", height: '20px', borderRadius: '50%', backgroundColor: "#e8c1a0",boxShadow:`0 0 10px 6px ${theme.palette.ShadowColor.main}` }}></Typography>
                        <Box>
                            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>Bonded <span style={{ fontSize:"12px" }}>(33%)</span> <HiTrendingDown color='#d80340' /></Typography>
                            <Typography variant="body1" color="initial" sx={{ fontWeight: 800, mt: "-5px" }}>78.6M</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8}>
                    <TokenomicsChart data={Lines} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenomicsCard
