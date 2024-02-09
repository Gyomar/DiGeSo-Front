import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Fade,
  Stack,
} from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';

import ImagenDesarrollo from '../assets/images/photo-desarrollo.jpg';
import ImagenBusiness from '../assets/images/photo-business.jpg';
import ImagenMarketing from '../assets/images/photo-marketing.jpg';
import ImagenDesign from '../assets/images/photo-design.jpg';
import WhyChooseAccordion from '../components/WhyChooseAccordion';
import BannerStart from '../components/BannerStart';
import Layaout from '../containers/Layout';
import CabezaFondo from '../assets/images/aboutus-hero-bg.jpg';
import ImagenWhyChooseUs from '../assets/images/why-choose-us.jpg';
import ImagenOurValues from '../assets/images/our-values.jpg';
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

const cardsOurValues = [
  {
    title: 'Lealtad',
    description: `La lealtad es la base de
      nuestras relaciones. Fomentamos un ambiente
      de confianza mutua y apoyo, cultivando
      conexiones duraderas entre nuestro equipo,
      clientes y asociados.`,
    icon: (
      <VerifiedUserOutlinedIcon sx={{ fontSize: '3.5rem' }} color="primary" />
    ),
  },
  {
    title: 'Honestidad',
    description: `La honestidad es nuestra brújula moral.
      Valoramos la transparencia y la integridad
      en todas nuestras interacciones,
      construyendo relaciones basadas en la
      confianza y el respeto mutuo.`,
    icon: <BalanceOutlinedIcon sx={{ fontSize: '3.5rem' }} color="primary" />,
  },
  {
    title: 'Compromiso',
    description: `Estamos comprometidos
      con la excelencia. Nos dedicamos
      completamente a cumplir nuestras
      promesas, superar desafíos con
      determinación y mantener un estándar
      elevado en cada proyecto. Este compromiso
      impulsa nuestra cultura y nos inspira a
      alcanzar la grandeza en todo lo que
      hacemos.`,
    icon: <HandshakeOutlinedIcon sx={{ fontSize: '3.5rem' }} color="primary" />,
  },
];

const cardsOurPilars = [
  {
    title: 'Diseño Gráfico',
    description: `Desde la creación de logos hasta el diseño de
    interfaces atractivas, nuestro equipo de diseñadores
    creativos colabora estrechamente para transmitir la
    identidad de marca de manera efectiva. En Digital
    Genius, convertimos conceptos innovadores en
    experiencias visuales cautivadoras.`,
    image: ImagenDesign,
  },
  {
    title: 'Inteligencia de Negocio',
    description: `Utilizando herramientas como Power BI,
    proporcionamos insights valiosos para
    informar decisiones estratégicas y optimizar el
    rendimiento comercial. Digital Genius se
    destaca por ofrecer análisis detallados que
    impulsan el éxito y el crecimiento sostenible de
    nuestros clientes.`,
    image: ImagenBusiness,
  },
  {
    title: 'Desarrollo',
    description: `Especializados en la creación de landings pages,
    sitios web, eCommerce y aplicaciones interactivas,
    nuestro equipo utiliza tecnologías avanzadas para
    ofrecer soluciones digitales a medida que se
    adaptan a las necesidades específicas de
    nuestros clientes.`,
    image: ImagenDesarrollo,
  },
  {
    title: 'Marketing Digital',
    description: `Desde SEO hasta campañas publicitarias, en
    este pilar nos sumergimos en estrategias
    efectivas para aumentar la visibilidad y llegar a
    la audiencia objetivo. En Digital Genius,
    potenciamos la presencia en línea de nuestros
    clientes, ayudándoles a alcanzar y superar sus
    metas de marketing.`,
    image: ImagenMarketing,
  },
];

const AboutUs = () => {
  return (
    <Layaout>
      <Fade
        in={true}
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: {xs: 500, sm: 3000} }}
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
              backgroundColor: 'var(--black)',
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
          backgroundColor: 'var(--grey)',
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
                          backgroundColor: 'var(--primary)',
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
          backgroundImage:
            'linear-gradient(180deg, var(--grey) 0%, var(--white) 100%)',
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
            spacing={2}
            sx={{ width: '100%' }}
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid
                item
                sx={{
                  width: { xs: '100%', md: '50%' },
                }}
              >
                <Box sx={{ p: 4 }}>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={4}
                  >
                    <Typography
                      variant="h3"
                      gutterBottom
                      color="primary"
                      fontWeight="bold"
                    >
                      Nuestros Valores
                    </Typography>
                    <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={4}
                    >
                      {cardsOurValues.map((item) => (
                        <Stack
                          key={item.title}
                          direction={{ xs: 'column', sm: 'row' }}
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                        >
                          {item.icon}
                          <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={0}
                          >
                            <Typography
                              variant="h6"
                              gutterBottom
                              color="primary"
                              fontWeight="bold"
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body1"
                              gutterBottom
                              sx={{ textWrap: 'pretty' }}
                            >
                              {item.description}
                            </Typography>
                          </Stack>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Box>
              </Grid>
              <Grid
                item
                sx={{
                  width: { xs: '100%', md: '50%' },
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    display: { xs: 'none', md: 'block' },
                    height: { xs: 700, lg: 600 },
                    backgroundImage: `url(${ImagenOurValues})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: { xs: 'none', md: 'block' },
                      height: { xs: 700, lg: 600 },
                      position: 'absolute',
                      backgroundColor: 'var(--primary)',
                      opacity: 0.3,
                      transition:
                        'background 0.3s, border-radius 0.3s, opacity 0.3s',
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{
          display: 'flex',
          width: '100%',
          backgroundColor: 'var(--grey)',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 10,
          pb: 12,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={6}
          >
            <Typography
              variant="h3"
              gutterBottom
              fontWeight="bold"
              sx={{
                textAlign: 'center',
              }}
              color="primary"
            >
              Nuestros Pilares
            </Typography>
            <Box>
            <Grid container spacing={2} justifyContent="center">
              {cardsOurPilars.map((item) => (
                <Grid
                  container
                  item
                  key={item.title}
                  sx={{
                    width: { xs: '98%', md: '48%', lg: '24%' },
                  }}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Card
                    sx={{
                      width: '100%',
                      height: { md: 410, lg: 510 },
                      p: 2,
                    }}
                  >
                    <CardMedia
                      sx={{
                        height: 150,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                      image={item.image}
                      title={item.title}
                    />
                    <CardContent>
                      <Typography
                        variant="h6"
                        gutterBottom
                        fontWeight="bold"
                        color="primary"
                      >
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
          backgroundColor: 'var(--white)',
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
          sx={{ width: '100%' }}
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
                  backgroundImage: `url(${ImagenWhyChooseUs})`,
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
                    opacity: 0.5,
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
              <Box sx={{ width: '100%', height: { xs: 'auto', lg: 600 } }}>
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
