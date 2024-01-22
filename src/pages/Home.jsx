import { useState } from 'react';
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
  Collapse,
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
    icon: <BrushIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Desarrollo',
    description: `Desde sitios web corporativos hasta aplicaciones
  interactivas, nuestro equipo de desarrolladores trabaja
  con las últimas tecnologías para garantizar soluciones
  robustas y escalables que se adaptan a tus necesidades
  específicas.`,
    icon: <CodeIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Marketing',
    description: `Aumenta tu visibilidad y atrae a tu audiencia objetivo
  con estrategias de marketing efectivas. Desde SEO hasta
  campañas publicitarias, te ayudamos a alcanzar y superar
  tus metas de marketing.`,
    icon: <AppShortcutIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Social Media',
    description: `Construye una comunidad activa y comprometida en las
    redes sociales. Nuestro equipo crea estrategias de
    contenido que resuenan, fomentando la lealtad de la
    audiencia y aumentando la presencia en línea.`,
    icon: <InterestsIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'eCommerce',
    description: `Potencia tu presencia en línea con soluciones de
    comercio electrónico personalizado. Desde la
    configuración hasta la optimización continua, estamos
    comprometidos a impulsar tu éxito en el mundo del
    comercio digital.`,
    icon: <ShoppingCartIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
  {
    title: 'Ayuda y Soporte',
    description: `Estamos aquí para ti en cada paso del camino. Nuestro
  equipo de soporte técnico está listo para abordar
  cualquier pregunta o problema, asegurando un
  funcionamiento sin problemas de tus soluciones
  digitales.`,
    icon: <SupportAgentIcon sx={{ fontSize: '2.5rem' }} color="primary" />,
  },
];

const cardsTecnologyList = [
  { title: 'Figma', description: 'Edicion y diseño', image: LogoFigma },
  {
    title: 'Illustrator',
    description: 'Edición  de ilustraciones',
    image: LogoIllustrator,
  },
  {
    title: 'Photoshop',
    description: 'Edición de imágenes',
    image: LogoPhotoshop,
  },
  { title: 'NodeJs', description: 'Libreria para backend', image: LogoNodejs },
  {
    title: 'Power BI',
    description: 'Business intelligence',
    image: LogoPowerbi,
  },
  {
    title: 'Power BI Report',
    description: 'Informes paginados',
    image: LogoPowerbireport,
  },
  { title: 'React', description: 'Frontend Framework', image: LogoReact },
  {
    title: 'Material UI',
    description: 'Componentes en React',
    image: LogoMaterialui,
  },
  { title: 'Vite', description: 'Compilador de proyectos', image: LogoVite },
  {
    title: 'Wordpress',
    description: 'Creador de sitios',
    image: LogoWordpress,
  },
  {
    title: 'Meta Business',
    description: 'Marketing y publicidad',
    image: LogoMetabusiness,
  },
  {
    title: 'Prestashop',
    description: 'Tiendas virtuales',
    image: LogoPrestashop,
  },
];

const cardsTeamList = [
  {
    index: 1,
    title: 'Gyomar Pacheco',
    description: 'Desarrollador Web y BI',
    review: `Soy Gyomar, un profesional apasionado, experto en Business Analytics, desarrollo y emprendimiento. Mi enfoque se centra en colaborar estrechamente con emprendedores y empresas para alcanzar sus metas en marketing digital, desarrollo de aplicaciones y crecimiento empresarial.`,
    image: FotoGyomar,
  },
  {
    index: 2,
    title: 'Dayana Perez',
    description: 'Desarrolladora Web y Marketing Digital',
    review: `¡Hola! Soy Dayana, Ingeniera en informática con más de 8 años de experiencia como programadora web frontend y cofundadora de Digital Genius, una empresa digital donde convergen pasión y profesionalismo para impulsar el éxito de empresas y emprendedores mediante desarrollos de aplicaciones y estrategias de marketing digital.`,
    image: FotoDayana,
  },
  {
    index: 3,
    title: 'Manuel Buitrago',
    description: 'Diseñador Gráfico y UI/UX',
    review: `Soy Manuel, un joven diseñador gráfico recién graduado de bachiller. Digital Genius me ha brindado la emocionante oportunidad de aplicar mi talento y ejercer mi primer trabajo profesional, mientras continúo mis estudios universitarios.`,
    image: FotoManuel,
  },
];

function Home() {
  const [expandedCardIndex, setExpandedCardIndex] = useState(0);

  const handleMouseOver = (cardIndex) => (event) => {
    setExpandedCardIndex(cardIndex);
  };

  const handleMouseOut = () => {
    setExpandedCardIndex(0);
  };

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
            position: 'absolute',
            backgroundColor: '#101218',
            opacity: 0.8,
            transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
          }}
        />
        <Box component="main" sx={{ width: '100vw', zIndex: 1 }}>
          <Container maxWidth="xl">
            <Grid container spacing={2} sx={{ height: '100vh', px: 4 }}>
              <Grid item xs={12} md={5}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={4}
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
                        textWrap: 'balance',
                      }}
                    >
                      Crea asombrosas webs, has crecer tu negocio con DiGeSo
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
                      sx={{
                        color: '#ffffff',
                        textWrap: 'pretty',
                      }}
                    >
                      Soluciones de desarrollo web, landing pages, desarrollo de
                      apps, marketing digital, publicidad, diseño de logos,
                      sesiones de fotografía, edición de videos, business
                      intelligence, tiendas virtuales y más...
                    </Typography>
                  </Grow>

                  <Button variant="contained" color="primary">
                    Empecemos
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
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
                  variant="h2"
                  gutterBottom
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
                  }}
                >
                  Bienvenido a Digital Genius Solutions, tu socio integral para
                  el éxito en línea. Nos especializamos en ofrecer servicios de
                  diseño, desarrollo, eCommerce, marketing, social media, y
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
                        minWidth: 270,
                        maxWidth: 380,
                        p: 2,
                      }}
                    >
                      <CardContent>
                        {item.icon}
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
                  variant="h2"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                  }}
                  color="primary"
                >
                  Tecnologías que utilizamos
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
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
                        <Typography
                          variant="h6"
                          gutterBottom
                          textAlign="center"
                        >
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
                  variant="h2"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                  }}
                  color="primary"
                >
                  Conoce nuestro liderazgo
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{
                    textAlign: 'center',
                    maxWidth: 540,
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
                    <Card
                      sx={{
                        minWidth: 270,
                        maxWidth: 300,
                        minHeight: 400,
                        position: 'relative',
                      }}
                      elevation={1}
                      onMouseOver={handleMouseOver(item.index)}
                      onMouseOut={handleMouseOut}
                    >
                      <CardMedia
                        sx={{
                          height: 300,
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: 'cover',
                          backgroundPosition: 'top center',
                        }}
                        image={item.image}
                        title={item.title}
                      />
                      <CardContent
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          backgroundColor: '#ffffff',
                        }}
                      >
                        <Typography variant="h6" gutterBottom color="primary">
                          {item.title}
                        </Typography>
                        <Typography variant="subtitle1">
                          {item.description}
                        </Typography>
                        <Collapse in={expandedCardIndex === item.index} {...{ timeout: 1000 }}>
                          <Typography
                            variant="body1"
                            sx={{ height: 294, textWrap: 'pretty', pt: 2 }}
                          >
                            {item.review}
                          </Typography>
                        </Collapse>
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
