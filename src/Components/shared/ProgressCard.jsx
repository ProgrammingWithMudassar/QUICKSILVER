import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography, Grid } from '@mui/material'
import MyResponsiveRadialBar from '../../Components/shared/RadialBar'


const progressCard = ({ title, desc, dataa }) => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.white[900],
            boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
            borderRadius: "10px",
            margin: "0",
            padding: "5px 10px",
            height: '110px'
        }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Typography color="initial" sx={{ fontSize: '16px', mt:2}}>{title}</Typography>
                    <Typography variant="h6" fontWeight={700}>{desc}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <MyResponsiveRadialBar data={dataa} h={"140px"}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default progressCard
