import {
  Box,
  Container,
  Fade,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
} from '@mui/material';
import Poll from '@mui/icons-material/Poll';
import Develop from '@mui/icons-material/Devices';
import Empresas from '@mui/icons-material/Groups';
import Jovenes from '@mui/icons-material/SettingsAccessibility';
import Diseno from '@mui/icons-material/AppShortcut';
import Marketing from '@mui/icons-material/SystemSecurityUpdateGood';
import CabezaFondo from '../assets/images/services-hero-bg.jpg';
import Layaout from '../containers/Layout';
import BannerStart from '../components/BannerStart';
import '../styles/_vars.scss';

const cardHelpYouList = [
  {
    title: 'Desarollo',
    description:
      'Creación de sitios web, Apps, Ecommerce y sistemas personalizados para satisfacer las necesidades específicas de cada cliente.',
    icon: <Develop sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Diseño Creativo',
    description:
      'Retoque de fotos, diseño de logos, creación de feeds de Instagram, banners de Facebook, videos simples en After Effects, y más.',
    icon: <Diseno sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Marketing Digital',
    description:
      'Estrategias personalizadas, creación de buyer personas, diseño de feeds de Instagram, publicaciones y contenido, para mejorar la visibilidad en línea.',
    icon: <Marketing sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Business Analytics',
    description:
      'Análisis minucioso de datos para informar decisiones estratégicas, optimizar el rendimiento comercial y facilitar la toma de decisiones informadas.',
    icon: <Poll sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Potencial Juvenil',
    description:
      'Facilitamos el desarrollo profesional y ofrecemos oportunidades laborales y experiencia valiosa a jóvenes prometedores en el campo de la tecnología.',
    icon: <Jovenes sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Partner Estratégico',
    description:
      'Trabajamos como partners estratégicos con grandes empresas de marketing para ofrecer soluciones conjuntas y proyectos de alto impacto.',
    icon: <Empresas sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
];

const Services = () => {
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
                  Servicios
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
                  Brindamos una amplia gamma de servicios
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
                  Explora nuestra amplia gama de servicios, desde desarrollo web
                  y diseño creativo hasta marketing digital y análisis
                  empresarial, destacando tu presencia en línea.
                </Typography>
              </Stack>
            </Container>
          </Box>
        </Box>
      </Fade>
      <Box
        component="section"
        sx={{
          width: '100%',
          backgroundColor: '#f3f5f5',
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
            <Box>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    textAlign: 'center',
                  }}
                  color="primary"
                >
                  ¿Cómo podemos ayudarte?
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
                    textWrap: 'pretty',
                  }}
                >
                  Ofrecemos soluciones integrales de desarrollo de sitos web,
                  landing pages, y aplicaciones, marketing digital, publicidad,
                  diseño de logos, edición de videos, Business Intelligence y
                  tiendas virtuales.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Grid container spacing={2} justifyContent="center">
                {cardHelpYouList.map((item) => (
                  <Grid
                    item
                    key={item.title}
                    sx={{
                      width: { xs: '95%', md: '48%', lg: '30%' },
                    }}
                  >
                    <Card
                      sx={{
                        minHeight: { xs: 240, md: 280, lg: 300 },
                        width: '100%',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ textWrap: 'pretty' }}>
                          {item.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          width: '100%',
          minHeight: '30vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          backgroundImage: 'linear-gradient(180deg, #f3f5f5 0%, #ffffff 100%)',
          py:10
        }}
      >
        <BannerStart />
      </Box>
    </Layaout>
  );
};

export default Services;
