import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Layaout from '../containers/Layout';

function Home() {

  return (
    <Box
      sx={{
        display: 'flex',
        objectFit: 'cover',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Layaout />
      <Box component="main" sx={{ p: 3, width: "100vw" }}>
        <Box>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  spacing={6}
                  sx={{ py: 14 }}
                >
                  <Typography variant="h1" gutterBottom sx={{ fontSize: "3.5rem" }}>
                    Crea asombrosas web, has crecer tu negocio con DiGeSo
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Soluciones de desarrollo web, lading pages, desarrollo de apps, marketing digital, publcidad, diseño de logos, sesiones de fotografia, edicion de videos y mas...
                  </Typography>
                  <Button variant="contained">Empecemos</Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
