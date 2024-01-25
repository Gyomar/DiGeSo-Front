import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  alpha,
} from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Home from '/src/pages/Home';
import AboutUs from '/src/pages/AboutUs';
import Services from '/src/pages/Services';
import ContactUs from '/src/pages/ContactUs';
import NotFound from '/src/pages/NotFound';
import CssBaseline from '@mui/material/CssBaseline';
import Dosis300woff2 from '/src/assets/fonts/dosis-v32-latin-300.woff2';
import Dosis400woff2 from '/src/assets/fonts/dosis-v32-latin-regular.woff2';
import Dosis500woff2 from '/src/assets/fonts/dosis-v32-latin-500.woff2';
import Dosis600woff2 from '/src/assets/fonts/dosis-v32-latin-600.woff2';
import { esES as pickersEsES } from '@mui/x-date-pickers/locales';
import { esES as coreEsES } from '@mui/material/locale';

const primaryMain = '#20447B';
const greyMain = '#f3f5f5';
const whiteMain = '#ffffff';
const balackMain = '#101218';
const greenMain = '#25d366';

const theme = responsiveFontSizes(
  createTheme({
    typography: {
      fontFamily: ['Dosis'],
    },
    palette: {
      primary: {
        main: primaryMain,
        light: alpha(primaryMain, 0.7),
        dark: '#1b3966',
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
  }),
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default App;
