import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography, Grid, Button, Tooltip } from '@mui/material'
import { FaCaretDown } from "react-icons/fa";


const progressCard = ({title,percentage,desc,progress}) => {
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
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',mb:2 }}>
                <Box>
                    <Typography color="initial" sx={{ fontSize: '12px' }}>{title}</Typography>
                    <Typography color="initial" sx={{ fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center' }}>Last One Month<FaCaretDown /></Typography>
                </Box>
                <Typography variant="h6" sx={{ fontWeight:800 }} >{percentage}%</Typography>
            </Box>
            <Typography variant="h6" fontWeight={600}>{desc}</Typography>
            <Box sx={{ width:'100%', height:"10px", backgroundColor: theme.palette.gray[400],borderRadius:'30px' }}>
                <Box sx={{ width:`${progress}%`, height:"10px", background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',borderRadius:'30px' }}></Box>
            </Box>
        </Box>
    )
}

export default progressCard
