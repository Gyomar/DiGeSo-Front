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
          minHeight:'100vh',
          position:'relative',
          zIndex:1,
          //border:'1px solid red',
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
            //border: '1px solid blue',
          }}
        >
          <Container maxWidth="lg"
            sx={{ 
              width: '100%',
              minHeight:'100vh',
              display: 'flex',
              flexDirection:'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent:'center',
              //border:'1px solid orange',
              position:'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '20vh',
                //border:'1px solid black',
              }}
            ></Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '45vh',
                //border:'1px solid red',
                position:'relative',
              }}
            >
              <Container maxWidth="md"
                sx={{ 
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  justifyContent:'center',
                  //border:'1px solid yellow',
                }}
              >
                <Typography variant="h2" gutterBottom
                  sx={{
                    fontSize:'3rem',
                    color: '#ffffff', 
                  }}
                >
                  Nosotros
                </Typography>
                <Typography variant="h4" gutterBottom
                  sx={{ 
                    fontSize:'1.5rem',
                    color: '#ffffff', 
                    mb: 3, 
                  }}
                >
                  Bienvenido a Digital Genius Solutions
                </Typography>
                <Typography variant="body1" gutterBottom
                  sx={{ 
                    color: '#ffffff', 
                    fontSize:'1.2rem', 
                  }}
                >
                  Nuestra filosofía fusiona innovación y colaboración. Trabajamos incansablemente para posicionar tu éxito en el mundo digital. ¡Te invitamos a conocer más sobre nosotros!
                </Typography>
              </Container>
            </Box>
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                minHeight: '35vh',
                //border:'1px solid blue',
                position:'relative',
              }}
            >
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Card
                    sx={{ height: 250, minWidth: 270, maxWidth: 320, borderRadius: 0, p: 2 }}
                  >
                    <CardContent>
                      <Divider
                        sx={{ 
                          height: '8px',
                          width:'30%',
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
                    sx={{ height: 250, minWidth: 270, maxWidth: 320, borderRadius: 0, p: 2 }}
                  >
                    <CardContent>
                      <Divider
                        sx={{ 
                          height: '8px',
                          width:'30%',
                          backgroundColor: '#20447b', 
                        }}
                      />
                      <Typography variant="h4" gutterBottom>
                        Nuestra Misión
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
                        Facilitar el crecimiento de emprendedores y PYMEs a través
                        de soluciones digitales integrales. Nos comprometemos a brindar servicios 
                        de desarrollo web, diseño creativo, marketing digital y análisis de negocios 
                        que impulsen la presencia en línea de nuestros clientes.
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item>
                  <Card
                    sx={{ height: 250, minWidth: 270, maxWidth: 320, borderRadius: 0, p: 2 }}
                  >
                    <CardContent>
                      <Divider
                        sx={{ 
                          height: '8px',
                          width:'30%',
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
            </Box>
          </Container>
          <Box
            sx={{
              position: 'absolute',
              display: 'flex',
              width: '100%',
              height: '80vh',
              backgroundImage: `url(${CabezaFondo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              zIndex:-1,
              top:0,
              margin:'0px',
              padding:'0px',
            }}
          >
            <Box 
              sx={{
                display: 'flex',
                margin:'0px',
                padding:'0px',
                width: '100%',
                height: '80vh',
                backgroundColor: '#101218',
                opacity: 0.8,
                transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
              }}
            ></Box>
          </Box>
        </Box>
        <Box component="section"
          sx={{
            display: 'flex',
            flexDirection:'column',
            width: '100%',
            minHeight: '100vh',
            //border: '1px solid brown',
          }}
        >
          <Container maxWidth="xl"
            sx={{ 
              width:'100%',
              minHeight:'100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'center',
              mt:8,
              //border: '1px solid black',
            }}
          >
            <Box
              sx={{ 
                width:'100%',
                minHeight:'20vh',
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                //border: '1px solid blue',
              }}
            >
              <Typography variant="h1" gutterBottom
                sx={{ 
                  fontSize: { xs: '3rem', md: '3.5rem' },
                  color: '#20447b', 
                }}
              >
                Nuestros Procesos
              </Typography>
            </Box>
            <Box
              sx={{ 
                width:'100%',
                minHeight:'40vh',
                display: 'flex',
                //border: '1px solid purple',
              }}
            >
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                {[
                  { id: 1, title: "Desarrollo Colaborativo", content: "Fomentamos la colaboración entre equipos para crear soluciones digitales innovadoras y eficientes, impulsando proyectos de desarrollo web y aplicaciones.", numero:"01." },
                  { id: 2, title: "Cultivo de Talento", content: "Identificamos y nutrimos jóvenes talentosos, proporcionándoles oportunidades de crecimiento en un entorno laboral donde aprenden y prosperan.", numero:"02." },
                  { id: 3, title: "Estrategias Digitales", content: "Diseñamos y ejecutamos estrategias de marketing digital personalizadas, maximizando la visibilidad y el impacto de marcas y emprendimientos.", numero:"03." },
                ].map((item) => (
                  <Grid item key={item.id} xs={12} md={4}>
                    <Container maxWidth="xs"
                      sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'Left',
                        padding:{xs:'1rem', md:'3rem'},
                      }}
                    >
                      <Typography variant="body1" gutterBottom
                        sx={{ 
                          fontSize:'5rem' ,
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
                          fontSize:'1.1rem' ,
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
            <Box
              sx={{ 
                width:'100%',
                minHeight:'40vh',
                display: 'flex',
                //border: '1px solid grey',
              }}
            >
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                {[
                  { id: 4, title: "Social Media", content: "Desarrollamos e implementamos estrategias de contenido efectivas en redes sociales, maximizando la visibilidad, la participación y la construcción de la marca.", numero:"04." },
                  { id: 5, title: "E-commerce", content: "Creamos plataformas de comercio electrónico intuitivas y atractivas, optimizadas para la experiencia del usuario y diseñadas para impulsar las conversiones.", numero:"05." },
                  { id: 6, title: "Ayuda y soporte", content: "Brindamos asistencia a clientes, asegurando respuestas rápidas y soluciones efectivas para sus preguntas y preocupaciones.", numero:"06." },
                ].map((item) => (
                  <Grid item key={item.id} xs={12} md={4}>
                    <Container maxWidth="xs"
                      sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'Left',
                        padding:{xs:'1rem', md:'3rem'},
                      }}
                    >
                      <Typography variant="body1" gutterBottom
                        sx={{ 
                          fontSize:'5rem' ,
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
                          fontSize:'1.1rem' ,
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
              //border:'1px solid aqua',
              padding:{xs:'0px', md:'0px'},
            }}
          >
            <Container maxWidth="md"
              sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems:'center',
                width: '90%',
                //border:'1px solid blue',
                mt:4,
                mb:8,
              }}
            >
              <Box
                sx={{ 
                  width:'100%',
                  minHeight:'15vh',
                  display: 'flex',
                  
                  justifyContent:'center',
                  //border: '1px solid grey',
                }}
              >
                <Typography variant="h1" gutterBottom
                  sx={{ 
                    fontSize: { xs: '3rem', md: '3.5rem' },
                    display:'flex',
                    alignItems:'center',
                    color: '#20447b', 
                  }}
                >
                  ¿Por qué elegirnos?
                </Typography>
              </Box>
              <Box
                sx={{ 
                  width:'100%',
                  minHeight:'25vh',
                  display: 'flex',
                  alignItems:'center',
                  mb:4,
                  //border: '1px solid orange',
                }}
              >
                <Typography variant="body1" gutterBottom
                  sx={{ 
                    fontSize:'1.25rem', 
                    color:'Black', 
                  }}
                >
                  Al elegir Digital Genius Solutions, elige una asociación estratégica que no solo
                  impulsa tu presencia en línea, sino que también contribuye al crecimiento sostenible
                  de tu negocio. ¡Trabajemos juntos para alcanzar nuevos niveles de éxito digital!
                </Typography>
              </Box>
              
              <Box
                sx={{
                  display: 'flex',
                  alignItems:'center',
                  width:'90%',
                  //border: '1px solid red',
                }}
              >
                <MyAccordion></MyAccordion>
              </Box>
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
    </Layaout>
  );
}
export default AboutUs;