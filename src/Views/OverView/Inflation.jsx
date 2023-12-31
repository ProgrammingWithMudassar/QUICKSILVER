import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography, Grid, Button, Tooltip } from '@mui/material'
import { GiProgression } from "react-icons/gi";



const Inflation = () => {
    const theme = useTheme();
    return (
        <Box sx={{
            width: "100%",
            backgroundColor: theme.palette.white[900],
            boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
            borderRadius: "10px",
            padding: "20px 10px 10px 10px",
            height: '130px'
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ width: '50%', borderRadius: "8px", p: 1, height: 'auto', }}>
                    <GiProgression size={30} color="#16113a" />
                    <Typography variant="h6" color="initial">Inflation</Typography>
                </Box>
                <Box>
                    <Typography variant="h6" color="initial" fontWeight={800}>78.3%</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Inflation
