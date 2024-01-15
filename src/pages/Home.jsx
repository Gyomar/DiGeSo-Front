import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Grow,
  Stack,
  Typography,
} from '@mui/material';

import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import InterestsIcon from '@mui/icons-material/Interests';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

import Layaout from '../containers/Layout';
import BannerStart from '../components/BannerStart';

import CabezaFondo from '../assets/images/home-hero-bg.jpg';
import FotoGyomar from '../assets/images/profile-photo-gyomar.jpg';
import FotoDayana from '../assets/images/profile-photo-dayana.jpg';
import FotoManuel from '../assets/images/profile-photo-manuel.jpg';
import LogoIllustrator from '../assets/images/illustrator.svg';
import LogoPhotoshop from '../assets/images/photoshop.svg';
import LogoFigma from '../assets/images/figma.svg';
import LogoMaterialui from '../assets/images/material-ui.svg';
import LogoNodejs from '../assets/images/nodejs.svg';
import LogoPowerbi from '../assets/images/power-bi.svg';
import LogoPowerbireport from '../assets/images/power-bi-report.svg';
import LogoReact from '../assets/images/react.svg';
import LogoVite from '../assets/images/vitejs.svg';
import LogoWordpress from '../assets/images/wordpress.svg';
import LogoMetabusiness from '../assets/images/meta.svg';
import LogoPrestashop from '../assets/images/prestashop.svg';

const cardsServiceList = [
  {
    title: 'Diseño',
    description: `Convierte tu visión en una experiencia visual
  cautivadora con nuestro equipo de diseñadores creativos.
  Desde conceptos innovadores, te ayudamos a destacarte en
  la multitud.`,
    icon: <BrushIcon sx={{ fontSize: 40 }} color="primary" />,
  },
  {
    title: 'Desarrollo',
    description: `Desde sitios web corporativos hasta aplicaciones
  interactivas, nuestro equipo de desarrolladores trabaja
  con las últimas tecnologías para garantizar soluciones
  robustas y escalables que se adaptan a tus necesidades
  específicas.`,
    icon: <CodeIcon sx={{ fontSize: 40 }} color="primary" />,
  },
  {
    title: 'Marketing',
    description: `Aumenta tu visibilidad y atrae a tu audiencia objetivo
  con estrategias de marketing efectivas. Desde SEO hasta
  campañas publicitarias, te ayudamos a alcanzar y superar
  tus metas de marketing.`,
    icon: <AppShortcutIcon sx={{ fontSize: 40 }} color="primary" />,
  },
  {
    title: 'Social Media',
    description: `Construye una comunidad activa y comprometida en las
  redes sociales. Nuestro equipo crea estrategias de
  contenido que resonan, fomentando la lealtad de la
  audiencia y aumentando la presencia en línea.`,
    icon: <InterestsIcon sx={{ fontSize: 40 }} color="primary" />,
  },
  {
    title: 'eCommerce',
    description: `Potencia tu presencia en línea con soluciones de
  comercio electrónico personalizadas. Desde la
  configuración hasta la optimización continua, estamos
  comprometidos a impulsar tu éxito en el mundo del
  comercio digital.`,
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} color="primary" />,
  },
  {
    title: 'Ayuda y Soporte',
    description: `Estamos aquí para ti en cada paso del camino. Nuestro
  equipo de soporte técnico está listo para abordar
  cualquier pregunta o problema, asegurando un
  funcionamiento sin problemas de tus soluciones
  digitales.`,
    icon: <SupportAgentIcon sx={{ fontSize: 40 }} color="primary" />,
  },
];

const cardsTecnologyList = [
  { title: 'Figma', description: 'Edicion y diseño', image: LogoFigma },
  { title: 'Illustrator', description: 'Edicion de ilustraciones', image: LogoIllustrator },
  { title: 'Photoshop', description: 'Edicion de imagenes', image: LogoPhotoshop },
  { title: 'NodeJs', description: 'Libreria para backend', image: LogoNodejs },
  { title: 'Power BI', description: 'Business intelligence', image: LogoPowerbi },
  { title: 'Power BI Report', description: 'Informes paginados', image: LogoPowerbireport },
  { title: 'React', description: 'Frontend Framework', image: LogoReact },
  { title: 'Material UI', description: 'Componentes en react', image: LogoMaterialui },
  { title: 'Vite', description: 'Compilador de proyectos', image: LogoVite },
  { title: 'Wordpress', description: 'Creador de sitios', image: LogoWordpress },
  { title: 'Meta Business', description: 'Marketing y publicidad', image: LogoMetabusiness },
  { title: 'Prestashop', description: 'Tiendas virtuales', image: LogoPrestashop },
];

const cardsTeamList = [
  { title: 'Gyomar Pacheco', description: 'Desarrollador Web y Business Intelligence', image: FotoGyomar },
  { title: 'Dayana Perez', description: 'Desarrolladora Web y Marketing Digital', image: FotoDayana },
  { title: 'Manuel Buitrago', description: 'Diseñador Grafico y UI/UX', image: FotoManuel },
];

function Home() {
  return (
    <Layaout>
      <Box
        sx={{
          display: 'flex',
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
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
            height: '100vh',
            backgroundColor: '#101218',
            opacity: 0.8,
            transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
          }}
        >
          <Box component="main" sx={{ width: '100vw' }}>
            <Container maxWidth="xl">
              <Grid container spacing={2} sx={{ height: '100vh' }}>
                <Grid item xs={12} md={6}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={6}
                    sx={{ height: '100vh' }}
                  >
                    <Grow
                      in={true}
                      style={{ transformOrigin: '0 0 0' }}
                      {...{ timeout: 3000 }}
                    >
                      <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                          color: '#ffffff',
                        }}
                      >
                        Crea asombrosas web, has crecer tu negocio con DiGeSo
                      </Typography>
                    </Grow>
                    <Grow
                      in={true}
                      style={{ transformOrigin: '0 0 0' }}
                      {...{ timeout: 3000 }}
                    >
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ color: '#ffffff', fontSize: '1.2rem' }}
                      >
                        Soluciones de desarrollo web, ladings pages, desarrollo
                        de apps, marketing digital, publcidad, diseño de logos,
                        sesiones de fotografia, edicion de videos, business
                        intelligence, tiendas virtuales y mas...
                      </Typography>
                    </Grow>

                    <Button variant="contained">Empecemos</Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#f3f5f5',
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
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textAlign: 'center',
                  }}
                >
                  Como podemos ayudarte?
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
                    fontSize: '1.2rem',
                  }}
                >
                  Bienvenido a Digital Genius Solutions, tu socio integral para
                  el éxito en línea. Nos especializamos en ofrecer servicios de
                  diseño, desarrollo, ecommerce, marketing, social media, y
                  brindamos asistencia y soporte excepcionales.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Grid container spacing={2} justifyContent="center">
                {cardsServiceList.map((item) => (
                  <Grid item key={item.title}>
                    <Card
                      sx={{
                        minHeight: 325,
                        minWidth: 300,
                        maxWidth: 380,
                        p: 2,
                      }}
                    >
                      <CardContent>
                        {item.icon}
                        <Typography variant="h6" gutterBottom>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
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
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: '#ffffff',
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
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textAlign: 'center',
                  }}
                >
                  Tecnologias que utilizamos
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
                    fontSize: '1.2rem',
                  }}
                >
                  En DiGeSo, aprovechamos tecnologías de vanguardia, como React,
                  Figma, PrestaShop, Power BI, y más. Estamos comprometidos a
                  utilizar las herramientas más avanzadas para impulsar tu
                  presencia en línea.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {cardsTecnologyList.map((item) => (
                  <Grid item key={item.title}>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" textAlign="center">
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
                  variant="h1"
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    textAlign: 'center',
                  }}
                >
                  Conoce nuestro liderazgo
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
                    fontSize: '1.2rem',
                  }}
                >
                  Nuestro talentoso equipo incluye desarrolladores web
                  apasionados, expertos en marketing digital y profesionales de
                  business intelligence. Nos unimos con un objetivo común: hacer
                  que tu presencia en línea sea exitosa y sostenible.
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {cardsTeamList.map((item) => (
                  <Grid item key={item.title}>
                  <Card sx={{ minWidth: 300 }} elevation={1}>
                    <CardMedia
                      sx={{ height: 260 }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                      {item.title}
                      </Typography>
                      <Typography variant="body1">
                      {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                ))}
              </Grid>
            </Box>
            <BannerStart />
          </Stack>
        </Container>
      </Box>
    </Layaout>
  );
}

export default Home;
