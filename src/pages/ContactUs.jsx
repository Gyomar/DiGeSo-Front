import { useState, useEffect, forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Container,
  Fade,
  Stack,
  Typography,
  Grid,
  TextField,
  Backdrop,
  CircularProgress,
  Snackbar,
  Button,
  Paper,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkIcon from '@mui/icons-material/Work';
import SendIcon from '@mui/icons-material/Send';

import Layaout from '../containers/Layout';
import CabezaFondo from '../assets/images/contactus-hero-bg.jpg';
import BannerStart from '../components/BannerStart';
import { setSnackbar } from '../services/reducers/ui.slice';
import {
  setEmail,
  setMessage,
  setName,
  postMessage,
} from '../services/reducers/contact_us.slice';
import '../styles/_vars.scss';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ContactUs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.loading);
  const snackbar = useSelector((state) => state.ui.snackbar);
  const message = useSelector((state) => state.contacUs.message);
  const name = useSelector((state) => state.contacUs.name);
  const email = useSelector((state) => state.contacUs.email);

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  useEffect(() => {
    const isNameValid = name !== '' ? name.length >= 2 && /^[a-zA-Z\s]+$/.test(name): true;
    const isEmailValid =
      email !== ''
        ? email.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        : true;
    const isMessageValid =
      message !== ''
  ? message.length >= 2 && /^[a-zA-Z0-9\s!?.(),:"'@%$#*;-]+$/.test(message)
        : true;
    setIsValidName(isNameValid);
    setIsValidEmail(isEmailValid);
    setIsValidMessage(isMessageValid);
  }, [email, name, message]);

  const handleCloseSnackbar = () => dispatch(setSnackbar(null));

  const handleSend = async () => {
    const errorMessages = {
      isNameValid: 'Nombre no válido',
      isEmailValid: 'Correo electrónico no válido',
      isMessageValid: 'Mensaje no válido',
    };

    const invalidFields = [];

    if (!isValidName) invalidFields.push('isNameValid');
    if (!isValidEmail) invalidFields.push('isEmailValid');
    if (!isValidMessage) invalidFields.push('isMessageValid');

    if (invalidFields.length === 0) {
      await dispatch(
        postMessage({
          newMessage: {
            message: message === '' ? null : message,
            name: name === '' ? null : name,
            email: email === '' ? null : email,
          },
        }),
      );
    } else {
      const errorMessage = invalidFields
        .map((field) => errorMessages[field])
        .join(', ');
      dispatch(setSnackbar({ children: errorMessage, severity: 'error' }));
    }
  };

  const handleChangeMessage = (event) => {
      dispatch(setMessage(event.target.value));
  };

  const handleChangeName = (event) => {
      dispatch(setName(event.target.value));
  };

  const handleChangeEmail = (event) => {
    dispatch(setEmail(event.target.value));
  };

  return (
    <Layaout>
      <Fade
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 3000 }}
      >
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            height: '70vh',
            backgroundImage: `url(${CabezaFondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '70vh',
              position: 'absolute',
              backgroundColor: '#101218',
              opacity: 0.8,
              transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}
          />
          <Box component="main" sx={{ width: '100vw', zIndex: 1 }}>
            <Container maxWidth="lg">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{ height: '60vh' }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    color: 'var(--white)',
                    textAlign: 'center',
                  }}
                >
                  Contáctanos
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    color: 'var(--white)',
                    textAlign: 'center',
                    textWrap: 'balance',
                  }}
                >
                  Contacto para servicios empresariales premium
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    color: 'var(--white)',
                    maxWidth: 540,
                    textAlign: 'center',
                    textWrap: 'pretty',
                  }}
                >
                  Bienvenido a nuestro centro de contacto exclusivo para
                  servicios empresariales premium. Estamos aquí para brindarte
                  una experiencia personalizada y responder a todas tus
                  consultas relacionadas con nuestros servicios de élite.
                </Typography>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Fade>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(180deg, #f3f5f5 0%, #ffffff 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            justifyContent="space-evenly"
            alignItems="flex-start"
            sx={{ pb: 8 }}
          >
            <Grid
              container
              item
              justifyContent="center"
              sx={{
                width: { xs: '100%', md: '45%', lg: '40%' },
                p: 4,
              }}
            >
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
                sx={{ width: '100%' }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  color="primary"
                  fontWeight="bold"
                >
                  Solicitar consulta gratuita
                </Typography>
                <Box>
                  <Paper elevation={16}>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                      sx={{ p: 4 }}
                    >
                      <TextField
                        required
                        fullWidth
                        label="Nombre"
                        variant="filled"
                        color={isValidName ? 'primary' : 'warning'}
                        type="text"
                        autoComplete="name"
                        value={name}
                        onChange={handleChangeName}
                        inputProps={{
                          maxLength: 40,
                        }}
                      />
                      <TextField
                        required
                        fullWidth
                        label="Correo electrónico"
                        variant="filled"
                        color={isValidEmail ? 'primary' : 'warning'}
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={handleChangeEmail}
                        inputProps={{
                          maxLength: 50,
                        }}
                      />
                      <TextField
                        required
                        fullWidth
                        label="Mensaje"
                        variant="filled"
                        color={isValidMessage ? 'primary' : 'warning'}
                        multiline
                        rows={4}
                        value={message}
                        onChange={handleChangeMessage}
                        inputProps={{
                          maxLength: 400,
                        }}
                      />
                      <Button
                        onClick={handleSend}
                        variant="contained"
                        size="large"
                        endIcon={<SendIcon />}
                      >
                        Enviar
                      </Button>
                    </Stack>
                  </Paper>
                </Box>
              </Stack>
            </Grid>
            <Grid
              container
              item
              justifyContent="center"
              sx={{
                width: { xs: '100%', md: '45%', lg: '40%' },
                p: 4,
              }}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
                sx={{ width: '100%' }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    textAlign: 'left',
                    width: '100%',
                  }}
                  color="primary"
                >
                  Ponerse en contacto
                </Typography>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Contáctanos
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <EmailIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      info@digesolutions.com
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <WhatsAppIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      +57 317 227 06 45
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <FacebookIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      @digesolutions
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <InstagramIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      @digesolutions
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Ventas
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <WorkIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      sales@digesolutions.com
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    fontWeight="bold"
                  >
                    Soporte
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                  >
                    <SupportAgentIcon color="primary" />
                    <Typography variant="body2" gutterBottom>
                      support@digesolutions.com
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <BannerStart />
        </Container>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </Layaout>
  );
};

export default ContactUs;
