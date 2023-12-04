import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "rgba(247,248,249,255)",
    },
    mode: 'light',
    primary: {
      main: '#16113a',
      400:"#00d1ff"
    },
    secondary: {
      main: "#0fd354"
    },
    tirtionary: {
      main: "#5e607f"
    },
    black: {
      main: '#000000'
    },
    white:{
      900:"#ffffff",
    },
    gray:{
      400:"#f5f5f5"
    },
    red:{
      400: "#FE6B8B"
    },
    ShadowColor:{
      main: "rgba(240,240,240,0.8)"
    },
    iconColors: {
      discord: "#ff00b1",
      github: "#ff7c00",
      chrome: "#f55275",
      telegram: "#0056d6",
      twitter: "#3386ff",
    },
  },
  typography: {
    fontFamily: font,
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: '#fff',
      height: 30,
      fontSize: '16px',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      borderRadius:"8px",
      textTransform: 'none',
      '&': {
        color: red
      }
    }
  },
});

export default theme;