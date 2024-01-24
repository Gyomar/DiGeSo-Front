import { Box, Container, Fade, Stack, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkIcon from '@mui/icons-material/Work';
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
            width: '100%',
            height: '60vh',
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
              height: '60vh',
              position: 'absolute',
              backgroundColor: '#101218',
              opacity: 0.8,
              transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}
          />
          <Box component="main" sx={{ width: '100vw', zIndex: 1  }}>
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
                    color: '#ffffff',
                    textAlign: 'center'
                  }}
                >
                  Contáctanos
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    color: '#ffffff',
                    textAlign: 'center',
                    textWrap: 'balance'
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
                    textAlign: 'center',
                    textWrap: 'pretty'
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
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={8}
          >
            <Box sx={{minWidth: 270, maxWidth: 300, p: 2, alignSelf: 'center'}}>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={4}
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
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
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
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
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
                  <Typography variant="subtitle1" gutterBottom fontWeight="bold">
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
            </Box>
            <BannerStart />
          </Stack>
        </Container>
      </Box>
    </Layaout>
  );
};

export default ContactUs;
