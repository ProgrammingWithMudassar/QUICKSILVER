import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material'
import { AnalysisCard, TokenomicsCard, ProgressCard } from '../../Components'
import { useTheme } from '@emotion/react'
import BlockCard from '../../Views/OverView/BlockCard'
import APRCard from '../../Views/OverView/APRCard'
import InflationCard from '../../Views/OverView/Inflation'
import ValidatorsData from '../../Data/ChartsData/ValidatorsData.json'
import VotingData from '../../Data/ChartsData/VotingData.json'
import Banner from '../../Views/OverView/Banner'
import { useBlockHeightQuery } from '../../Features/API/API'



const Overview = () => {
  const theme = useTheme();
  const [blockHeight, setBlockHeight] = useState(null);

  const { data, refetch } = useBlockHeightQuery();

 useEffect(() => {
    if (data && data.result && data.result.block && data.result.block.header) {
      const height = data.result.block.header.height;
      setBlockHeight(height);
      console.log('Block Height:', height);
    } else {
      console.log('Unable to retrieve block height');
    }
  }, [data]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [refetch]);



  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>Overview</Typography>
      <Grid container spacing={3} sx={{ mt: "-20px" }}>
        <Grid item xs={12} lg={8}>
          <AnalysisCard title={"APR"} />
          <Grid container spacing={1} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6}><ProgressCard title="Online Voting Power" percentage="100" desc="78.60m from 78.60m" progress={100} dataa={VotingData} /></Grid>
            <Grid item xs={12} md={6}><ProgressCard title="Validators" percentage="40" desc="125 out of 224" progress={40} dataa={ValidatorsData} /></Grid>
            <Grid item xs={12} md={6}><ProgressCard title="Supply" percentage="50" desc="234.78M QCK" progress={50} dataa={VotingData} /></Grid>
            <Grid item xs={12} md={6}><ProgressCard title="Community Pool" percentage="80" desc="1.75M QCK" progress={80} dataa={VotingData} /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <TokenomicsCard />
          <Grid container spacing={1} sx={{ mt: 0.9 }}>
            <Grid item xs={12}><BlockCard height={blockHeight}/></Grid>
            <Grid item xs={6}><APRCard /></Grid>
            <Grid item xs={6}><InflationCard /></Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={-2}>
          <Banner />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Overview
