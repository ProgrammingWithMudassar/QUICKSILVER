import React from 'react'
import { Box, Typography, Grid, Button, Tooltip } from '@mui/material'
import { FaDiscord, FaGithub, FaChrome, FaTelegram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import BarChart from '../BarChart.jsx'
import Bar from '../../Data/ChartsData/BarChartData.json'
import { FaCaretDown } from "react-icons/fa";
import { useTheme } from '@emotion/react'

const AnalysisCard = () => {
    const theme = useTheme();

    const iconStyles = {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        padding: '2px',
        boxShadow: `0 0 6px 2px ${theme.palette.ShadowColor.main}`,
        cursor: 'pointer',
    };

    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.white[900],
            boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
            borderRadius: "10px",
            margin: "10px 0",
            padding: {xs:"20px 10px 50px 10px", md:"20px 10px 10px 10px"},
            height: { xs: "auto", md: '240px' }
        }}>
            <Grid container spacing={3}>
                <Grid item xs={10.7} md={5}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between', }}>
                        <Typography variant="h5" color="initial">Logo</Typography>
                        <Typography variant="h5" color="initial" sx={{ fontWeight: 600 }}>Not Trading Yet</Typography>
                    </Box>
                    <Box sx={{
                        width: '100%',
                        borderRadius: '8px',
                        backgroundColor: theme.palette.gray[400],
                        px: 2, py: 1, mt: 5, display: 'flex', flexDirection: 'column', gap: 1
                    }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="initial">Market Cap</Typography>
                            <Typography variant="body2" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>-- %<HiTrendingUp color='#17b73a' /></Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="initial">24h Vol</Typography>
                            <Typography variant="body2" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>-- %<HiTrendingDown color='#d80340' /></Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="initial">Fully Diluted Valuation </Typography>
                            <Typography variant="body2" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>-- %<HiTrendingUp color='#17b73a' /></Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="initial">Total Supply </Typography>
                            <Typography variant="body2" color="initial" sx={{ display: 'flex', alignItems: 'center' }}>-- %<HiTrendingUp color='#17b73a' /></Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={0.5} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    flexDirection: 'column',
                    height: '200px', gap: 0.3, mt: 1
                }}>
                    <Tooltip title="Discord" placement="right" arrow>
                        <Typography>
                            <FaDiscord size={22} color={theme.palette.iconColors.discord} style={iconStyles} />
                        </Typography>
                    </Tooltip>
                    <Tooltip title="GitHub" placement="right" arrow>
                        <Typography>
                            <FaGithub size={20} color={theme.palette.iconColors.github} style={iconStyles} />
                        </Typography>
                    </Tooltip>
                    <Tooltip title="Telegram" placement="right" arrow>
                        <Typography>
                            <FaTelegram size={20} color={theme.palette.iconColors.telegram} style={iconStyles} />
                        </Typography>
                    </Tooltip>
                    <Tooltip title="Chrome" placement="right" arrow>
                        <Typography>
                            <FaChrome size={20} color={theme.palette.iconColors.chrome} style={iconStyles} />
                        </Typography>
                    </Tooltip>
                    <Tooltip title="Twitter" placement="right" arrow>
                        <Typography>
                            <AiFillTwitterCircle size={26} color={theme.palette.iconColors.twitter} style={iconStyles} />
                        </Typography>
                    </Tooltip>

                </Grid>
                <Grid item xs={12} md={6.5} sx={{ width: '100%', height: '200px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box>
                            <Typography color="initial" sx={{ fontSize: '16px' }}>Analysis</Typography>
                        </Box>
                        <Button sx={{ color: "#fff", borderRadius: "30px", fontSize: "10px", padding: '0 20px' }}>See More</Button>
                    </Box>
                    <Box sx={{width:{xs:"100%", md:"auto"}}}>
                        <BarChart data={Bar} />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default AnalysisCard
