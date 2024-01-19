import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Layaout from '../containers/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import MyAccordion from '../components/MyAccordion';
import BannerStart from '../components/BannerStart';
import CabezaFondo from '../assets/images/pages-hero-bg.jpg';
import aboutus from '../assets/images/why-choose-us.jpg';


const AboutUs = () => {
	return (
    <Layaout >
      <Box component="main"
        sx={{
          backgroundColor:'#fdfdfd',
          width:'100%',
          position:'relative',
          zIndex:1,
        }}
      >
        <Box component="section"
          sx={{
            display: 'flex',
            objectFit: 'cover',
            width: '100%',
            minHeight: '100vh',
            position:'relative',
            zIndex:2,
            //border: '1px solid red',
          }}
        >
          <Container maxWidth="xl" sx={{zIndex:-1, padding:"0px", margin:"0px", display:"contents"}} >
            <Box 
              sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                height: '70vh',
                backgroundImage: `url(${CabezaFondo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                zIndex:1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '70vh',
                  backgroundColor: '#101218',
                  opacity: 0.8,
                  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
                }}
              >
                <Box 
                  sx={{ 
                    width: '100vw',
                    height: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Container maxWidth="xl"
                    sx={{ 
                      width: {xs:'90%', md:'45%'},
                      height:'70vh',
                      display: 'flex',
                      flexDirection:'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      justifyContent:'center',
                    }}
                  >
                    <Typography variant="h2" gutterBottom
                      sx={{
                        fontSize:{xs:'3rem',md:'3.5rem'},
                        color: '#ffffff', 
                        mt:'3rem',
                      }}
                    >
                      Nosotros
                    </Typography>
                    <Typography variant="h4" gutterBottom
                      sx={{ 
                        fontSize:{xs:'2rem', md:'2.125rem'},
                        color: '#ffffff', 
                        mb: 4, 
                      }}
                    >
                      Bienvenido a Digital Genius Solutions
                    </Typography>
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        color: '#ffffff', fontSize: {xs:'1.125rem', md:'1.2rem'} 
                      }}
                    >
                      Nuestra filosofía fusiona innovación y colaboración. Trabajamos incansablemente para posicionar tu éxito en el mundo digital. ¡Te invitamos a conocer más sobre nosotros!
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box component="section"
          sx={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            minHeight: '100vh',
            //border: '1px solid brown',
            marginTop: '-380px',
            position:'relative',
            zIndex: 3,
            
          }}
        >
          <Container  maxWidth="xl">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <Card
                  sx={{ minHeight: 280, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
                >
                  <CardContent>
                    <Divider
                      sx={{ 
                        height: '8px',
                        width:'20%',
                        backgroundColor: '#20447b', 
                      }}
                    />
                    <Typography variant="h4" gutterBottom>
                      Quienes Somos?
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                      Digital Genius Solutions impulsa el crecimiento de emprendedores y PYMEs con 
                      soluciones digitales integrales: desarrollo, diseño, marketing digital y 
                      business analytics. Nuestro enfoque se basa en la colaboración, dedicación y 
                      pasión para alcanzar el éxito compartido.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ minHeight: 280, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
                >
                  <CardContent>
                    <Divider
                      sx={{ 
                        height: '8px',
                        width:'20%',
                        backgroundColor: '#20447b', 
                      }}
                    />
                    <Typography variant="h4" gutterBottom>
                      Nuestra Misión
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                      Facilitar el crecimiento y la expansión de emprendedores y PYMEs a través
                      de soluciones digitales integrales. Nos comprometemos a brindar servicios 
                      de desarrollo web, diseño creativo, marketing digital y análisis de negocios 
                      que impulsen la presencia en línea y el rendimiento comercial de nuestros clientes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  sx={{ minHeight: 280, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
                >
                  <CardContent>
                    <Divider
                      sx={{ 
                        height: '8px',
                        width:'20%',
                        backgroundColor: '#20447b', 
                      }}
                    />
                    <Typography variant="h4" gutterBottom>
                      Nuestra Filosofia
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                      Creemos en el poder del trabajo en equipo, la dedicación y la pasión. Fomentamos un
                      entorno colaborativo donde cada miembro contribuye al éxito colectivo. Valoramos la
                      innovación, la transparencia y la responsabilidad en cada proyecto.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="xl"
            sx={{ 
              
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              //border: '1px solid black',
            }}
          >
            <Box
              sx={{ 
                width: '100%',
              }}
            >
              <Typography variant="h1" gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  marginTop:'5%',
                  marginBottom:'6%',
                  color: '#20447b', 
                }}
              >
                Nuestros Procesos
              </Typography>
            </Box>
            <Box
              sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Grid container spacing={4} justifyContent="center" alignItems="center" marginBottom={'5%'}>
              {[
                { id: 1, title: "Desarollo", content: "Creación de sitios web, Apps, Ecommerce y sistemas personalizados para satisfacer las necesidades específicas de cada cliente.", numero:"01." },
                { id: 2, title: "Diseño Creativo", content: "Retoque de fotos, diseño de logos, creación de feeds de Instagram, banners de Facebook, videos simples en After Effects, y más.", numero:"02." },
                { id: 3, title: "Marketing Digital", content: "Estrategias personalizadas, creación de buyer personas, diseño de feeds de Instagram, publicaciones y contenido, para mejorar la visibilidad y el engagement en línea.", numero:"03." },
              ].map((item) => (
                <Grid item key={item.id} xs={12} md={4}>
                  <Container maxWidth="xs"
                    sx={{ 
                      width: '100%',
                      height: '30vh',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'Left',
                      padding:{xs:'1rem', md:'4rem'},
                    }}
                  >
                    
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        fontSize:'5.5rem' ,
                        color: '#e9ebed', 
                        fontWeight:600,
                        lineHeight:'0.1', 
                        mb:2,
                      }}
                    >
                      {item.numero}
                    </Typography>
                    <Typography variant="h4" gutterBottom
                      sx={{ 
                        fontSize:'1.25rem' ,
                        color: '#20447b', 
                        mb: 2, 
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        fontSize:'1rem', 
                        color:'Black',
                        mb: 2, 
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Container>
                </Grid>
              ))}
              {[
                { id: 4, title: "Business Analytics", content: "Análisis detallado de datos para informar decisiones estratégicas y optimizar el rendimiento comercial.", numero:"04." },
                { id: 5, title: "Empoderamiento de Jóvenes Talentosos", content: "Brindamos oportunidades laborales y experiencia profesional a jóvenes prometedores en el campo de la tecnología.", numero:"05." },
                { id: 6, title: "Colaboración con Grandes Empresas", content: "Trabajamos como partners estratégicos con grandes empresas de marketing para ofrecer soluciones conjuntas y proyectos de alto impacto.", numero:"06." },
              ].map((item) => (
                <Grid item key={item.id} xs={12} md={4}>
                  <Container maxWidth="xs"
                    sx={{ 
                      width: '100%',
                      height: '30vh',
                      display: 'flex',
                      flexDirection: 'column',
                      textAlign: 'Left',
                      padding:{xs:'1rem', md:'4rem'},
                    }}
                  >
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        fontSize:'5.5rem' ,
                        color: '#e9ebed', 
                        fontWeight:600,
                        lineHeight:'0.1', 
                        mb:2,
                      }}
                    >
                      {item.numero}
                    </Typography>
                    <Typography variant="h4" gutterBottom
                      sx={{ 
                        fontSize:'1.25rem' ,
                        color: '#20447b', 
                        mb: 2, 
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        fontSize:'1rem', 
                        color:'Black',
                        mb: 2, 
                      }}
                    >
                      {item.content}
                    </Typography>
                  </Container>
                </Grid>
              ))}
            </Grid>
          </Box>
          </Container>
        </Box>
        <Box component="section"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            backgroundColor:'#f3f5f5',
          }}
        >
          <Container  maxWidth="xl"
            sx={{
              display: 'flex',
              width: '100%',
              padding:{xs:'0px', md:'0px'},
            }}
          >
            <Box 
              sx={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                backgroundImage: `url(${aboutus})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                zIndex:1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: '#101218',
                  opacity: 0.8,
                  transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
                }}
              >
              </Box>
            </Box>
          </Container>
          <Container  maxWidth="xl"
            sx={{
              display: 'flex',
              flexDirection:'column',
              width: '100%',
              marginTop:'2%',
              marginBottom:'4%',
              //border:'1px solid red',
            }}
          >
            <Container maxWidth="md"
              sx={{
                display: 'flex',
                flexDirection:'column',
                width: '70%',
                //border:'1px solid blue',
              }}
            >
              <Typography variant="h1" gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  mt:4,
                  textAlign:'center',
                  color: '#20447b', 
                  mb: 4, 
                }}
              >
                ¿Por qué elegirnos?
              </Typography>
              <Typography variant="body1" gutterBottom
                sx={{ 
                  fontSize:'1rem', 
                  color:'Black',
                  mt: 4,
                  mb: 4, 
                }}
              >
                Al elegir Digital Genius Solutions, elige una asociación estratégica que no solo
                impulsa tu presencia en línea, sino que también contribuye al crecimiento sostenible
                de tu negocio. ¡Trabajemos juntos para alcanzar nuevos niveles de éxito digital!
              </Typography>
              <Container maxWidth='xs'
                sx={{
                  display: 'flex',
                  width: '80%',
                  mt: 4,
                }}
              >
                <MyAccordion></MyAccordion>
              </Container>
            </Container>
            
          </Container>
        </Box>
        <Box component="section"
          sx={{
            display: 'flex',
            width: '100%',
            minHeight: '60vh',
            alignItems:'center',
            justifyContent:'center',
          }}
        >
          <BannerStart/>
        </Box>
      </Box>
      
    </Layaout >
  );
}

export default AboutUs;
