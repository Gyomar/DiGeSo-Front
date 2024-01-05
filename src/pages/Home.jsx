import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Layaout from '../containers/Layout';
import CabezaFondo from '../assets/images/home-hero-bg.jpg';
import FotoGyomar from '../assets/images/profile-photo-gyomar.jpg';
import FotoDayana from '../assets/images/profile-photo-dayana.jpg';
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import InterestsIcon from '@mui/icons-material/Interests';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Grow from '@mui/material/Grow';
import BannerStart from '../components/BannerStart';

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
                  sx={{ textAlign: 'center', maxWidth: 540, fontSize: '1.2rem' }}
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
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <BrushIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        Diseño
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Convierte tu visión en una experiencia visual
                        cautivadora con nuestro equipo de diseñadores creativos.
                        Desde conceptos innovadores, te ayudamos a destacarte en
                        la multitud.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <CodeIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        Desarrollo
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Desde sitios web corporativos hasta aplicaciones
                        interactivas, nuestro equipo de desarrolladores trabaja
                        con las últimas tecnologías para garantizar soluciones
                        robustas y escalables que se adaptan a tus necesidades
                        específicas.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <AppShortcutIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        Marketing
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Aumenta tu visibilidad y atrae a tu audiencia objetivo
                        con estrategias de marketing efectivas. Desde SEO hasta
                        campañas publicitarias, te ayudamos a alcanzar y superar
                        tus metas de marketing.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <InterestsIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        Social Media
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Construye una comunidad activa y comprometida en las
                        redes sociales. Nuestro equipo crea estrategias de
                        contenido que resonan, fomentando la lealtad de la
                        audiencia y aumentando la presencia en línea.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <ShoppingCartIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        eCommerce
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Potencia tu presencia en línea con soluciones de
                        comercio electrónico personalizadas. Desde la
                        configuración hasta la optimización continua, estamos
                        comprometidos a impulsar tu éxito en el mundo del
                        comercio digital.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ minHeight: 325, minWidth: 300, maxWidth: 380, p: 2 }}
                  >
                    <CardContent>
                      <SupportAgentIcon sx={{ fontSize: 40 }} color="primary" />
                      <Typography variant="h6" gutterBottom>
                        Ayuda y Soporte
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.2rem' }}>
                        Estamos aquí para ti en cada paso del camino. Nuestro
                        equipo de soporte técnico está listo para abordar
                        cualquier pregunta o problema, asegurando un
                        funcionamiento sin problemas de tus soluciones
                        digitales.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
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
                  sx={{ textAlign: 'center', maxWidth: 540, fontSize: '1.2rem' }}
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
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoFigma}
                      title="Logo Figma"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Figma
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Edicion y diseño
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoIllustrator}
                      title="Logo Illustrator"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Illustrator
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Edicion de ilustraciones
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoPhotoshop}
                      title="Logo Photoshop"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Photoshop
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Edicion de imagenes
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoNodejs}
                      title="Logo Nodejs"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        NodeJs
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Libreria para backend
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoPowerbi}
                      title="Logo Power BI"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Power BI
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Business intelligence
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoPowerbireport}
                      title="Logo Power BI Report"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Power BI Report
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Informes paginados
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoReact}
                      title="Logo React"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        React
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Frontend Framework
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoMaterialui}
                      title="Logo Material UI"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Material UI
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Componentes en react
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoVite}
                      title="Logo Vite"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Vite
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Compilador de proyectos
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoWordpress}
                      title="Logo Wordpress"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Wordpress
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Creador de sitios
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoMetabusiness}
                      title="logo Meta"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Meta Business
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Marketing digital y publicidad
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ width: 240 }} elevation={0}>
                    <CardMedia
                      sx={{ height: 40, backgroundSize: 'contain' }}
                      image={LogoPrestashop}
                      title="Logo Prestashop"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom textAlign="center">
                        Prestashop
                      </Typography>
                      <Typography variant="body1" textAlign="center">
                        Tiendas virtuales
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
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
                  sx={{ textAlign: 'center', maxWidth: 540, fontSize: '1.2rem' }}
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
                <Grid item>
                  <Card sx={{ minWidth: 300 }} elevation={1}>
                    <CardMedia
                      sx={{ height: 260 }}
                      image={FotoGyomar}
                      title="Foto Gyomar"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Gyomar Pacheco
                      </Typography>
                      <Typography variant="body1">
                        Desarrolador web y Business Intelligence
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card sx={{ minWidth: 300 }} elevation={1}>
                    <CardMedia
                      sx={{ height: 260 }}
                      image={FotoDayana}
                      title="Foto Dayana"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Dayana Perez
                      </Typography>
                      <Typography variant="body1">
                        Desarrolladora Web y Marketing Digital
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
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
