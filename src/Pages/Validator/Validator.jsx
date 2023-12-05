import React, { useState } from 'react';
import { Box, Typography, Button, Select, MenuItem } from '@mui/material'
import { useTheme } from '@emotion/react'


const validators = [
  { rank: 1, name: 'Validator 1', votingPower: 100, cumulativeShare: 50, commission: 5, uptime: '90%' },
  { rank: 2, name: 'Validator 2', votingPower: 95, cumulativeShare: 48, commission: 4, uptime: '88%' },
  { rank: 3, name: 'Validator 3', votingPower: 92, cumulativeShare: 45, commission: 3.5, uptime: '87%' },
  { rank: 4, name: 'Validator 4', votingPower: 89, cumulativeShare: 42, commission: 3, uptime: '85%' },
  { rank: 5, name: 'Validator 5', votingPower: 85, cumulativeShare: 40, commission: 2.5, uptime: '82%' },
  { rank: 6, name: 'Validator 6', votingPower: 80, cumulativeShare: 38, commission: 2, uptime: '80%' },
  { rank: 7, name: 'Validator 7', votingPower: 78, cumulativeShare: 35, commission: 1.5, uptime: '78%' },
  { rank: 8, name: 'Validator 8', votingPower: 75, cumulativeShare: 32, commission: 1, uptime: '75%' },
  { rank: 9, name: 'Validator 9', votingPower: 70, cumulativeShare: 30, commission: 0.5, uptime: '73%' },
  { rank: 10, name: 'Validator 10', votingPower: 65, cumulativeShare: 28, commission: 0.3, uptime: '70%' },
  { rank: 21, name: 'Validator 21', votingPower: 50, cumulativeShare: 15, commission: 0.2, uptime: '50%' },
  { rank: 22, name: 'Validator 22', votingPower: 48, cumulativeShare: 14, commission: 0.1, uptime: '48%' },
  { rank: 23, name: 'Validator 23', votingPower: 45, cumulativeShare: 12, commission: 0.09, uptime: '45%' },
  { rank: 24, name: 'Validator 24', votingPower: 42, cumulativeShare: 10, commission: 0.08, uptime: '42%' },
  { rank: 25, name: 'Validator 25', votingPower: 40, cumulativeShare: 9, commission: 0.07, uptime: '40%' },
  { rank: 26, name: 'Validator 26', votingPower: 38, cumulativeShare: 8, commission: 0.06, uptime: '38%' },
  { rank: 27, name: 'Validator 27', votingPower: 35, cumulativeShare: 7, commission: 0.05, uptime: '35%' },
  { rank: 28, name: 'Validator 28', votingPower: 32, cumulativeShare: 6, commission: 0.04, uptime: '32%' },
  { rank: 29, name: 'Validator 29', votingPower: 30, cumulativeShare: 5, commission: 0.03, uptime: '30%' },
  { rank: 30, name: 'Validator 30', votingPower: 28, cumulativeShare: 4, commission: 0.02, uptime: '28%' },
];


const Validator = () => {
  const theme = useTheme();
  const [isActive, setIsActive] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>Validator</Typography>
      <Box sx={{
        width: "100%",
        backgroundColor: theme.palette.white[900],
        boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
        borderRadius: "10px",
        margin: "10px 0",
        padding: { xs: "20px 10px 50px 10px", md: "20px 10px 10px 10px" },
        height: { xs: "calc(100vh - 300px)", md: 'calc(100vh - 152px)' }
      }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ p: 1, background: theme.palette.gray[400], borderRadius: '8px', display: "inline-block", width: "auto", display:'flex', justifyContent:'space-between', alignItems:'center' }}>
            <Typography variant="h6" color="initial">Category</Typography>
            <Select
              value={selectedFilter}
              onChange={handleFilterChange}
              sx={{ color: theme.palette.text.primary,height:'40px', width:'130px',ml:'30px'}}
            >
              <MenuItem value="All" sx={{ m:1,borderRadius:1, }}>All</MenuItem>
              <MenuItem value="Active" sx={{ m:1,borderRadius:1, }}>Active</MenuItem>
              <MenuItem value="Inactive" sx={{ m:1,borderRadius:1, }}>Inactive</MenuItem>
            </Select>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, marginRight: { xs: '-30px', lg: '0px' }, position: 'relative' }}>
            <input type="text" className="navbar_input" placeholder="Find here..." />
            <Button sx={{ position: 'absolute', right: "5px", top: '5px', color: '#fff', borderRadius: '8px' }}>Search</Button>
          </Box>
        </Box>

        <Box sx={{ mt: 3, height: "calc(100vh - 260px)", px: 1, }}>
          <Box sx={{ display: 'flex', alignItems:'center', background: theme.palette.primary.main, px:1, borderRadius:'10px 10px 0 0'}}>
            <Typography sx={{ width: '10%', py: 1, color:"#fff"}}>Rank</Typography>
            <Typography sx={{ width: '20%', py: 1, color:"#fff"}}>Validator</Typography>
            <Typography sx={{ width: '10%', py: 1, color:"#fff"}}>Voting Power</Typography>
            <Typography sx={{ width: '30%', py: 1, color:"#fff"}}>Cumulative Share</Typography>
            <Typography sx={{ width: '10%', py: 1, color:"#fff"}}>Commission</Typography>
            <Typography sx={{ width: '10%', py: 1, color:"#fff"}}>Uptime</Typography>
          </Box>
          <Box sx={{ height: "calc(100vh - 290px)", p: 0.5, overflowY: 'scroll', boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.2)',}}>
            {validators.map((validator, index) => (
              <Box
                className="table-row"
                key={validator.rank}
                sx={{
                  display: 'flex',
                  background: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  borderRadius: '8px',
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                  transition: 'box-shadow 0.3s ease',
                  "&:hover": {
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                  },
                  margin: '5px 0',
                }}
              >
                <Box sx={{ width: '10%', p: 1 }}>{validator.rank}</Box>
                <Box sx={{ width: '20%', p: 1 }}>{validator.name}</Box>
                <Box sx={{ width: '10%', p: 1 }}>{validator.votingPower}</Box>
                <Box sx={{ width: '30.5%', p: 1 }}>{validator.cumulativeShare}</Box>
                <Box sx={{ width: '10%', p: 1 }}>{validator.commission}</Box>
                <Box sx={{ width: '10%', p: 1 }}>{validator.uptime}</Box>
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Validator
