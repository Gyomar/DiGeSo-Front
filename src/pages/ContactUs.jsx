import {
  Box,
  Container,
  Fade,
  Stack,
  Typography,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';

import Layaout from '../containers/Layout';
import CabezaFondo from '../assets/images/pages-hero-bg.jpg';
import BannerStart from '../components/BannerStart';

const ContactUs = () => {
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
            objectFit: 'cover',
            width: '100%',
            height: '60vh',
            backgroundImage: `url(${CabezaFondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              height: '60vh',
              backgroundColor: '#101218',
              opacity: 0.8,
              transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}
          >
            <Box component="main" sx={{ width: '100vw' }}>
              <Container maxWidth="xl">
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
                    sx={{
                      color: '#ffffff',
                    }}
                  >
                    Contáctanos
                  </Typography>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      color: '#ffffff',
                    }}
                  >
                    Contacto para servicios empresariales premium
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: '#ffffff',
                      maxWidth: 540,
                      fontSize: '1.2rem',
                      textAlign: 'center',
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
        <Container maxWidth="xl">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={8}
          >
            <Box>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    textAlign: 'left',
                    minWidth: 300
                  }}
                >
                  Ponerse en contacto
                </Typography>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={3}
                  sx={{
                    minWidth: 300
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                  Contáctanos
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <EmailIcon color='primary'/>
                    <Typography variant="body2" gutterBottom>
                      info@example.com
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <PhoneInTalkIcon color='primary'/>
                    <Typography variant="body2" gutterBottom>
                      +001 987-654-3210
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <WhatsAppIcon color='primary'/>
                    <Typography variant="body2" gutterBottom>
                      +001 987-654-3210
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={3}
                  >
                    <FacebookIcon color='primary' />
                    <Typography variant="body2" gutterBottom>
                      @digeso
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <BannerStart />
          </Stack>
        </Container>
      </Box>
    </Layaout>
  );
};

export default ContactUs;
