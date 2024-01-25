import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
  Fade,
  Stack,
} from '@mui/material';

import WhyChooseAccordion from '../components/WhyChooseAccordion';
import BannerStart from '../components/BannerStart';
import Layaout from '../containers/Layout';
import CabezaFondo from '../assets/images/pages-hero-bg.jpg';
import aboutus from '../assets/images/why-choose-us.jpg';
import '../styles/_vars.scss';

const cardsAboutList = [
  {
    title: '¿Quiénes Somos?',
    description: `Digital Genius Solutions impulsa el crecimiento de
    emprendedores y PYMEs con soluciones digitales
    integrales: desarrollo, diseño, marketing digital y
    business analytics. Nuestro enfoque se basa en la
    colaboración, dedicación y pasión para alcanzar el
    éxito compartido.`,
  },
  {
    title: 'Nuestra Misión',
    description: `Facilitar el crecimiento de emprendedores y PYMEs a
    través de soluciones digitales integrales. Nos
    comprometemos a brindar servicios de desarrollo web,
    diseño creativo, marketing digital y análisis de
    negocios que impulsen la presencia en línea de
    nuestros clientes.`,
  },
  {
    title: 'Nuestra Filosofía.',
    description: `Creemos en el poder del trabajo en equipo, la
    dedicación y la pasión. Fomentamos un entorno
    colaborativo donde cada miembro contribuye al éxito
    colectivo. Valoramos la innovación, la transparencia y
    la responsabilidad en cada proyecto.`,
  },
];

const cardsUsProcess = [
  {
    title: 'Desarrollo',
    description:
      'Fomentamos la colaboración entre equipos para crear soluciones digitales innovadoras y eficientes, impulsando proyectos de desarrollo.',
    numero: '01.',
  },
  {
    title: 'Cultivo de Talento',
    description:
      'Identificamos y nutrimos jóvenes talentosos, proporcionándoles oportunidades de crecimiento en un entorno laboral donde prosperan.',
    numero: '02.',
  },
  {
    title: 'Estrategias Digitales',
    description:
      'Diseñamos y ejecutamos estrategias de marketing digital personalizadas, maximizando la visibilidad y el impacto de marcas y emprendimientos.',
    numero: '03.',
  },
  {
    title: 'Social Media',
    description:
      'Desarrollamos e implementamos estrategias de contenido efectivas en redes sociales, maximizando la visibilidad de la marca.',
    numero: '04.',
  },
  {
    title: 'E-commerce',
    description:
      'Creamos plataformas de comercio electrónico intuitivas, atractivas y optimizadas diseñadas para impulsar las conversiones.',
    numero: '05.',
  },
  {
    title: 'Ayuda y soporte',
    description:
      'Brindamos asistencia a clientes, asegurando respuestas rápidas y soluciones efectivas para sus preguntas y preocupaciones.',
    numero: '06.',
  },
];

const AboutUs = () => {
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
          <Box component="section" sx={{ width: '100%', zIndex: 0 }}>
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
                  Nosotros
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
                  Bienvenido a Digital Genius Solutions
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
                  Nuestra filosofía fusiona innovación y colaboración.
                  Trabajamos incansablemente para posicionar tu éxito en el
                  mundo digital. ¡Te invitamos a conocer más sobre nosotros!
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
          pb: 2,
          mt: 2,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ top: -80, position: 'relative' }}>
            <Grid container spacing={2} justifyContent="center">
              {cardsAboutList.map((item) => (
                <Grid
                  item
                  key={item.title}
                  sx={{
                    width: { xs: '95%', md: '48%', lg: '30%' },
                  }}
                >
                  <Card
                    sx={{
                      minHeight: { xs: 240, md: 280, lg: 320 },
                      width: '100%',
                      p: 2,
                      display: 'flex',
                      alignItems: 'flex-start',
                    }}
                  >
                    <CardContent>
                      <Divider
                        sx={{
                          height: '8px',
                          width: '50px',
                          backgroundColor: '#20447B',
                          mb: 3,
                        }}
                      />
                      <Typography variant="h4" gutterBottom>
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
        </Container>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          width: '100%',
          backgroundImage: 'linear-gradient(180deg, #f3f5f5 0%, #ffffff 100%)',
          alignItems: 'center',
          justifyContent: 'center',
          pb: 10,
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
              <Typography
                variant="h2"
                gutterBottom
                color="primary"
                fontWeight="bold"
                textAlign="center"
              >
                Nuestros Procesos
              </Typography>
            </Box>
            <Box>
              <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
              >
                {cardsUsProcess.map((item) => (
                  <Grid
                    item
                    key={item.title}
                    sx={{
                      width: { xs: '95%', md: '48%', lg: '30%' },
                    }}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        minHeight: { xs: 240, md: 280, lg: 300 },
                        width: '100%',
                        p: 2,
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h1"
                          gutterBottom
                          lineHeight={0}
                          fontWeight="bold"
                          sx={{
                            color: 'var(--greyDark)',
                            position: 'relative',
                            bottom: -2,
                          }}
                        >
                          {item.numero}
                        </Typography>
                        <Typography variant="h5" gutterBottom fontWeight="bold">
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
          backgroundColor: '#f3f5f5',
          alignItems: 'center',
          justifyContent: 'center',
          pb: 10,
        }}
      >
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={8}
          sx={{width: '100%'}}
        >
          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid
              item
              sx={{
                width: { xs: '100%', lg: '50%' },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: { xs: '10vh', lg: 600 },
                  backgroundImage: `url(${aboutus})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: '10vh', lg: 600 },
                    position: 'absolute',
                    backgroundColor: '#20447B',
                    opacity: 0.7,
                    transition:
                      'background 0.3s, border-radius 0.3s, opacity 0.3s',
                  }}
                />
              </Box>
            </Grid>
            <Grid
              item
              sx={{
                width: { xs: '100%', lg: '50%' },
              }}
            >
              <Box sx={{ width: '100%', height: { xs: 'auto', lg: 600 }}}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="stretch"
                  spacing={4}
                  sx={{ px: { xs: 2, sm: 6, md: 8 }, pt: 5 }}
                >
                  <Typography
                    variant="h3"
                    gutterBottom
                    color="primary"
                    fontWeight="bold"
                  >
                    ¿Por qué elegirnos?
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Al elegir Digital Genius Solutions, elige una asociación
                    estratégica que no solo impulsa tu presencia en línea, sino
                    que también contribuye al crecimiento sostenible de tu
                    negocio. ¡Trabajemos juntos para alcanzar nuevos niveles de
                    éxito digital!
                  </Typography>
                  <WhyChooseAccordion />
                </Stack>
              </Box>
            </Grid>
          </Grid>
          <BannerStart />
        </Stack>
      </Box>
    </Layaout>
  );
};
export default AboutUs;
