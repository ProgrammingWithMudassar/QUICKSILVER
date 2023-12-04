import React, { useState } from 'react';
import { Box, Typography, Button, Table, TableContainer, TableHead, TableRow, TableCell, Paper, TableBody } from '@mui/material'
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
          <Box sx={{ p: 1, background: theme.palette.gray[400], borderRadius: '8px', display: "inline-block", width: "auto" }}>
            <Button
              sx={{
                color: isActive === 0 ? '#fff' : theme.palette.text.primary,
                background: isActive === 0 ? theme.palette.gray[500] : "none",
                boxShadow: 'none',
              }}
              onClick={() => setIsActive(0)}
            >
              Active
            </Button>
            <Button
              sx={{
                color: isActive === 1 ? '#fff' : theme.palette.text.primary,
                background: isActive === 1 ? theme.palette.gray[500] : "none",
                boxShadow: 'none',
                ml: 1,
              }}
              onClick={() => setIsActive(1)}
            >
              Inactive
            </Button>
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" }, marginRight: { xs: '-30px', lg: '0px' }, position: 'relative' }}>
            <input type="text" className="navbar_input" placeholder="Find here..." />
            <Button sx={{ position: 'absolute', right: "5px", top: '5px', color: '#fff', borderRadius: '8px' }}>Search</Button>
          </Box>
        </Box>

        <Box sx={{ mt: 3, height:"calc(100vh - 260px)" ,px:1, overflowY:'scroll' }}>
          <TableContainer component={Paper}>
            <Table >
              <TableHead sx={{ background:theme.palette.primary.main,  }}>
                <TableRow >
                  <TableCell sx={{ color: theme.palette.white[900] }}>Rank</TableCell>
                  <TableCell sx={{ color: theme.palette.white[900] }}>Validator</TableCell>
                  <TableCell sx={{ color: theme.palette.white[900] }}>Voting Power</TableCell>
                  <TableCell sx={{ color: theme.palette.white[900] }}>Cumulative Share</TableCell>
                  <TableCell sx={{ color: theme.palette.white[900] }}>Commission</TableCell>
                  <TableCell sx={{ color: theme.palette.white[900] }}>Uptime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {validators.map((validator, index) => (
                  <TableRow key={index}>
                    <TableCell>{validator.rank}</TableCell>
                    <TableCell>{validator.name}</TableCell>
                    <TableCell>{validator.votingPower}</TableCell>
                    <TableCell>{validator.cumulativeShare}</TableCell>
                    <TableCell>{validator.commission}</TableCell>
                    <TableCell>{validator.uptime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  )
}

export default Validator
