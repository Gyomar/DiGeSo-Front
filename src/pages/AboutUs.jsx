import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Layaout from '../containers/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CabezaFondo from '../assets/images/pages-hero-bg.jpg';


const AboutUs = () => {
	return (
    <Layaout >
      <Box component="section"
        sx={{
          display: 'flex',
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
        }}
      >
        <Box 
          sx={{
            position: 'relative',
            display: 'flex',
            width: '100%',
            height: '70vh',
            backgroundImage: `url(${CabezaFondo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
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
            <Box component="div" 
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
                  width: '45%',
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
                    color: '#ffffff', 
                  }}
                >
                  Nosotros
                </Typography>
                <Typography variant="h4" gutterBottom
                  sx={{ 
                    color: '#ffffff', 
                    mb: 4, 
                  }}
                >
                  Bienvenido a Digital Genius Solutions
                </Typography>
                <Typography variant="body1" gutterBottom
                  sx={{ 
                    color: '#ffffff', fontSize: '1.2rem' 
                  }}
                >
                  Nuestra filosofía fusiona innovación y colaboración. Trabajamos incansablemente para posicionar tu éxito en el mundo digital. ¡Te invitamos a conocer más sobre nosotros!
                </Typography>
              </Container>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position:'absolute',
            top:'60vh',
            display: 'flex',
            width: '100%',
            height: '40vh',
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card
                sx={{ minHeight: 300, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
              >
                <CardContent>
                  <Divider
                    sx={{ 
                      height: '8px',
                      width:'20%',
                      backgroundColor: 'blue', 
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    Quienes Somos?
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Digital Genius fusiona innovación y colaboración, ayudando a 
                    empresas y emprendedores a alcanzar sus metas en el mundo digital
                    a través de apps y marketing digital. Creemos en el éxito conjunto,
                    ofreciendo oportunidades y uniendo talentos para triunfar juntos. 
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{ minHeight: 300, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
              >
                <CardContent>
                  <Divider
                    sx={{ 
                      height: '8px',
                      width:'20%',
                      backgroundColor: 'blue', 
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    Nuestra Misión
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Nuestra misión en Digital Genius es impulsar el éxito digital mediante
                    innovación y colaboración. Guiamos a empresas y jóvenes talentosos, 
                    elevando juntos la presencia en el mundo digital.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item>
              <Card
                sx={{ minHeight: 300, minWidth: 300, maxWidth: 350, borderRadius: 0, p: 2 }}
              >
                <CardContent>
                  <Divider
                    sx={{ 
                      height: '8px',
                      width:'20%',
                      backgroundColor: 'blue', 
                    }}
                  />
                  <Typography variant="h4" gutterBottom>
                    Nuestra Filosofia
                  </Typography>
                  <Typography variant="body1" sx={{ fontSize: '1rem' }}>
                    Nuestra filosofía destaca el trabajo en equipo, piedra angular de 
                    nuestro éxito. Valoramos y cultivamos el talento joven, brindando 
                    oportunidades para que florezcan con pasión y crecimiento. Uniendo 
                    fuerzas, inspiramos innovación y alcanzamos alturas excepcionales.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
          border: '1px solid blue'
          //backgroundImage: `url(${CabezaFondo})`,
          //backgroundRepeat: 'no-repeat',
          //backgroundSize: 'cover',
          //backgroundPosition: 'center center'
        }}
      ></Box>
      <Box
        sx={{
          display: 'flex',
          objectFit: 'cover',
          width: '100%',
          height: '100vh',
          border: '1px solid green'
          //backgroundImage: `url(${CabezaFondo})`,
          //backgroundRepeat: 'no-repeat',
          //backgroundSize: 'cover',
          //backgroundPosition: 'center center'
        }}
      ></Box>
    </Layaout >
      
  );
}

export default AboutUs;
