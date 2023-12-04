import React from "react";
import { Box, Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";
import { SlideBarData } from "../../Data/SideBar";
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 110px)",
        backgroundColor: theme.palette.white[900],
        boxShadow: `0 0 10px 6px ${theme.palette.ShadowColor.main}`,
        borderRadius: "10px",
        margin: "10px auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "start",
        padding: "15px 0",
        gap: '14px'
      }}
    >
      {SlideBarData.map((item) => (
        <Tooltip key={item.key} title={item.text} placement="right" arrow>
          <Link to={`${item.route}`} className={location.pathname === item.route ? 'active-link' : ''}>
            <Box
              sx={{
                background: location.pathname === item.route ? "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)": theme.palette.gray[400] ,
                boxShadow: location.pathname === item.route ? `0 0 6px 2px ${theme.palette.ShadowColor.main}` : '' ,
                color: location.pathname === item.route ?  theme.palette.white[900] : theme.palette.black.main ,
                padding: "10px 12px 5px 12px",
                borderRadius: "10px",
                '&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.05)',
                },
              }}
            >
              {item.icon && <item.icon size={26}  />}
            </Box>
          </Link>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SideBar;
