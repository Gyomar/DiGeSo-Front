import Box from '@mui/material/Box';
import Layaout from '../containers/Layout';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BannerStart from '../components/BannerStart';
import Icon from '@mui/material/Icon';
import Poll from '@mui/icons-material/Poll';
import Develop from '@mui/icons-material/Devices';
import Empresas from '@mui/icons-material/Groups';
import Jovenes from '@mui/icons-material/SettingsAccessibility';
import Diseno from '@mui/icons-material/AppShortcut';
import Marketing from '@mui/icons-material/SystemSecurityUpdateGood';
import CabezaFondo from '../assets/images/pages-hero-bg.jpg';

const Services = () => {
	return (
    <Layaout>
      <Box component="main"
        sx={{
          backgroundColor:'#f3f5f5',
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
            minHeight: '80vh',
            position:'relative',
            zIndex:2,
            //border: '1px solid blue',
          }}
        >
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
            >
              <Container maxWidth="lg"
                sx={{ 
                  width: '100%',
                  minHeight:'80vh',
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
                    height: '50vh',
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
                    <Typography variant="h3" gutterBottom
                      sx={{
                        //fontSize:'3rem',
                        color: '#ffffff', 
                      }}
                    >
                      Servicios
                    </Typography>
                    <Typography variant="h5" gutterBottom
                      sx={{ 
                        //fontSize:'1.5rem',
                        color: '#ffffff', 
                        mb: 3, 
                      }}
                    >
                      Brindamos una amplia gamma de servicios
                    </Typography>
                    <Typography variant="body1" gutterBottom
                      sx={{ 
                        color: '#ffffff', 
                        //fontSize:'1.2rem', 
                      }}
                    >
                      Explora nuestra amplia gama de servicios, desde desarrollo web y diseño creativo hasta marketing digital y análisis empresarial, destacando tu presencia en línea.
                    </Typography>
                  </Container>
                </Box>
              </Container>
            </Box>
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
              mt:4,
              mb:8,
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
              <Typography variant="h3" gutterBottom
                sx={{ 
                  //fontSize: { xs: '3rem', md: '3.5rem' },
                  color: '#20447b', 
                }}
              >
                ¿Cómo podemos ayudarte?
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
                  { id: 1, title: "Desarollo", content: "Creación de sitios web, Apps, Ecommerce y sistemas personalizados para satisfacer las necesidades específicas de cada cliente.", icon: <Develop fontSize="large" style={{ color: '#20447b' }}/>, numero:"01." },
                  { id: 2, title: "Diseño Creativo", content: "Retoque de fotos, diseño de logos, creación de feeds de Instagram, banners de Facebook, videos simples en After Effects, y más.", icon: <Diseno fontSize="large" style={{ color: '#20447b' }}/> , numero:"02." },
                  { id: 3, title: "Marketing Digital", content: "Estrategias personalizadas, creación de buyer personas, diseño de feeds de Instagram, publicaciones y contenido, para mejorar la visibilidad en línea.", icon:<Marketing fontSize="large" style={{ color: '#20447b' }}/>, numero:"03." },
                ].map((item) => (
                  <Grid item key={item.id} xs={12} md={4}>
                    <Container maxWidth="xs"
                      sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'Left',
                        padding:{xs:'1rem', md:'1.5rem'},
                        backgroundColor: 'white',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Icon
                        sx={{ 
                          width:'20%',
                          height:'20%',
                          padding:'0.3rem',
                          textAlign:'left',
                        }}
                      >
                        {item.icon}
                      </Icon>
                      <Typography variant="h5" gutterBottom
                        sx={{ 
                          //fontSize:'1.1rem' ,
                          color: 'Black', 
                          mb: 2, 
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" gutterBottom
                        sx={{ 
                          //fontSize:'1rem', 
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
                  { id: 4, title: "Business Analytics", content: "Análisis minucioso de datos para informar decisiones estratégicas, optimizar el rendimiento comercial y facilitar la toma de decisiones informadas.", icon:<Poll fontSize="large" style={{ color: '#20447b' }}/>, numero:"04." },
                  { id: 5, title: "Potencial Juvenil", content: "Facilitamos el desarrollo profesional y ofrecemos oportunidades laborales y experiencia valiosa a jóvenes prometedores en el campo de la tecnología.", icon:<Jovenes fontSize="large" style={{ color: '#20447b' }}/>, numero:"05." },
                  { id: 6, title: "Partner Estratégico", content: "Trabajamos como partners estratégicos con grandes empresas de marketing para ofrecer soluciones conjuntas y proyectos de alto impacto.", icon:<Empresas fontSize="large" style={{ color: '#20447b' }}/>, numero:"06." },
                ].map((item) => (
                  <Grid item key={item.id} xs={12} md={4}>
                    <Container maxWidth="xs"
                      sx={{ 
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'Left',
                        padding:{xs:'1rem', md:'1.5rem'},
                        backgroundColor:'#ffffff',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      <Icon
                        sx={{ 
                          width:'20%',
                          height:'20%',
                          padding:'0.3rem',
                          textAlign:'left',
                        }}
                      >
                        {item.icon}
                      </Icon>
                      <Typography variant="h5" gutterBottom
                        sx={{ 
                          //fontSize:'1.1rem' ,
                          color: 'Black', 
                          mb: 2, 
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1" gutterBottom
                        sx={{ 
                          //fontSize:'1rem', 
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
            width: '100%',
            minHeight: '60vh',
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'#ffffff',
          }}
        >
          <BannerStart/>
        </Box>
      </Box>
    </Layaout>
  );
}

export default Services;
