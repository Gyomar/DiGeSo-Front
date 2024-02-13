import { useState, useEffect } from 'react';
import { BrowserRouter} from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  alpha,
} from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CssBaseline from '@mui/material/CssBaseline';
import { esES as pickersEsES } from '@mui/x-date-pickers/locales';
import { esES as coreEsES } from '@mui/material/locale';

import Dosis300woff2 from './src/assets/fonts/dosis-v32-latin-300.woff2';
import Dosis400woff2 from './src/assets/fonts/dosis-v32-latin-regular.woff2';
import Dosis500woff2 from './src/assets/fonts/dosis-v32-latin-500.woff2';
import Dosis600woff2 from './src/assets/fonts/dosis-v32-latin-600.woff2';
import CookieMessage from './src/components/CookieMessage';
import MyRoutes from './src/components/MyRoutes';

const primaryMain = '#20447B';
const secondaryMain = '#20727b'
const greyMain = '#f3f5f5';
const whiteMain = '#ffffff';
const balackMain = '#101218';
const greenMain = '#25d366';

const theme =
  createTheme({
    typography: {
      fontFamily: ['Dosis'],
      h1 : {
        fontSize : '1.6rem',  
        '@media (min-width:600px)': {
          fontSize: '2.2rem',
        },
        '@media (min-width:1200px)': {
          fontSize: '2.8rem',
        },
      },
      h2 : {
        fontSize : '1.4rem',  
        '@media (min-width:600px)': {
          fontSize: '1.6rem',
        },
        '@media (min-width:1200px)': {
          fontSize: '2rem',
        },
      },
      h3 : {
        fontSize : '1.3rem',  
        '@media (min-width:600px)': {
          fontSize: '1.4rem',
        },
        '@media (min-width:1200px)': {
          fontSize: '1.5rem',
        },
      },
      h4 : {
        fontSize : '1.2rem',  
        '@media (min-width:1200px)': {
          fontSize: '1.4rem',
        },
      },
      h5 : {
        fontSize : '1.1rem',  
        '@media (min-width:1200px)': {
          fontSize: '1.3rem',
        },
      },
      h6 : {
        fontSize : '1rem',  
        '@media (min-width:1200px)': {
          fontSize: '1.2rem',
        },
      }
    },
    palette: {
      contrastThreshold: 4.5,
      primary: {
        main: primaryMain,
        light: alpha(primaryMain, 0.7),
        dark: '#1b3966',
        contrastText: '#fff',
      },
      secondary: {
        main: secondaryMain,
        light: alpha(secondaryMain, 0.7),
        dark: '#3a6ab2',
        contrastText: '#000',
      },
      grey: {
        main: greyMain,
      },
      white: {
        main: whiteMain,
      },
      black: {
        main: balackMain,
      },
      green: {
        main: greenMain,
        light: alpha(greenMain, 0.7),
        dark: '#21b758',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
			@font-face {
        font-display: swap; 
        font-family: 'Dosis';
        font-style: very-ligth;
        font-weight: 300;
        src: url(${Dosis300woff2}) format('woff2');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Dosis';
        font-style: light;
        font-weight: 400;
        src: url(${Dosis400woff2}) format('woff2');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Dosis';
        font-style: normal;
        font-weight: 500;
        src: url(${Dosis500woff2}) format('woff2');
      }
      @font-face {
        font-display: swap; 
        font-family: 'Dosis';
        font-style: bold;
        font-weight: 600;
        src: url(${Dosis600woff2}) format('woff2');
      }
      `,
      },
      MuiTypography: {
        defaultProps: {
          fontWeight: 500,
        },
      },
      MuiTextField: {
        defaultProps: {
          fontWeight: 500,
          fontSize: '16px',
        },
      },
      MuiSelect: {
        defaultProps: {
          fontWeight: 500,
          fontSize: '16px',
        },
      },
      MuiInputLabel: {
        defaultProps: {
          fontWeight: 500,
          fontSize: '16px',
        },
      },
      MuiFormControlLabel: {
        defaultProps: {
          fontWeight: 500,
          fontSize: '16px',
        },
      },
    },
    pickersEsES,
    coreEsES,
  });

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(true);

  // Inicializar Google Tag Manager
  const initializeGoogleTagManager = () => {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = document.getElementsByTagName('script')[0];
      const j = document.createElement('script');
      // eslint-disable-next-line no-constant-condition
      const dl = 'dataLayer' !== 'dataLayer' ? '&l=' + 'dataLayer' : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KGP3T7MQ' + dl;
      f.parentNode.insertBefore(j, f);
      window.dataLayer.push({ 'event': 'gtm.js' });
    } catch (error) {
      console.error('Error al inicializar Google Tag Manager:', error);
      // Manejar el error de manera adecuada (p. ej., mostrar un mensaje de error al usuario)
    }
  };

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
    initializeGoogleTagManager();
    setSnackbarOpen(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setCookiesAccepted(false);
    setSnackbarOpen(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  useEffect(() => {
    const isAccepted = localStorage.getItem('cookiesAccepted');
    if (isAccepted === 'true') {
      setCookiesAccepted(true);
      initializeGoogleTagManager();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {!cookiesAccepted && (
        <CookieMessage
          open={snackbarOpen}
          onClose={handleClose}
          onAccept={handleAcceptCookies}
          onReject={handleRejectCookies}
        />
      )}
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <BrowserRouter>
            <MyRoutes/>
          </BrowserRouter>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
