import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import { AnalysisCard, TokenomicsCard, ProgressCard } from '../../Components'
import { useTheme } from '@emotion/react'
import BlockCard from '../../Views/OverView/BlockCard'
import APRCard from '../../Views/OverView/APRCard'
import InflationCard from '../../Views/OverView/Inflation'


const Overview = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>Overview</Typography>
      <Grid container spacing={3} sx={{ mt: "-20px" }}>
        <Grid item xs={12} lg={8}>
          <AnalysisCard title={"APR"} />
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={6}><ProgressCard title="Online Voting Power" percentage="100" desc="78.60m from 78.60m" progress={100} /></Grid>
            <Grid item xs={6}><ProgressCard title="Active Validators" percentage="40" desc="125 out of 224" progress={40} /></Grid>
            <Grid item xs={6}><ProgressCard title="Supply" percentage="50" desc="234.78M QCK" progress={50} /></Grid>
            <Grid item xs={6}><ProgressCard title="Community Pool" percentage="80" desc="1.75M QCK" progress={80} /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TokenomicsCard />
          <Grid container spacing={1} sx={{mt:0.9}}>
            <Grid item xs={12}><BlockCard /></Grid>
            <Grid item xs={6}><APRCard /></Grid>
            <Grid item xs={6}><InflationCard /></Grid>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  )
}

export default Overview
