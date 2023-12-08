import React from 'react'
import { useTheme } from '@emotion/react'
import { Box, Typography, Grid, Button, Tooltip } from '@mui/material'
import { GiCrossedChains } from "react-icons/gi";
import { CiClock2 } from "react-icons/ci";
import { PiArticleNyTimes } from "react-icons/pi";

const BlockCard = ({ height }) => {
  const theme = useTheme();
  return (
    <Box sx={{
      width: "100%",
      backgroundColor: theme.palette.white[900],
      boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
      borderRadius: "10px", mt:1,
      padding: {xs:"10px 8px", md:"0 8px"},
      height: {xs:"auto", md:'130px'}
    }}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: `1px solid ${theme.palette.gray[400]}`, borderRadius: '8px', px: 1, py: 1, height: '110px', boxShadow: `0 0 2px 1px ${theme.palette.ShadowColor.main}`, textAlign: 'center' }}>
            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Latest Block <PiArticleNyTimes /></Typography>
            <Typography variant="body1" color="initial" sx={{ mt: 2, fontSize: '20px', fontWeight: "600", letterSpacing:"5px" }}>{height}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: `1px solid ${theme.palette.gray[400]}`, borderRadius: '8px', px: 1, py: 1, height: '110px', boxShadow: `0 0 2px 1px ${theme.palette.ShadowColor.main}`, textAlign: 'center' }}>
            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Block Time <CiClock2 /></Typography>
            <Typography variant="body1" color="initial" sx={{ mt: 2, fontSize: '20px', fontWeight: "600" }}>5.92s</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ border: `1px solid ${theme.palette.gray[400]}`, borderRadius: '8px', px: 1, py: 1, height: '110px', boxShadow: `0 0 2px 1px ${theme.palette.ShadowColor.main}`, textAlign: 'center' }}>
            <Typography variant="body1" color="initial" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>Chain <GiCrossedChains /></Typography>
            <Typography variant="body1" color="initial" sx={{ mt: 2, fontSize: '20px', fontWeight: "600" }}>quicksilver-2</Typography>
          </Box>
        </Grid>
      </Grid>

    </Box>
  )
}

export default BlockCard