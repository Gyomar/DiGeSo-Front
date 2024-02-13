import {
  Box,
  Paper,
  Button,
  Typography,
  Grid,
  Stack,
  Link,
} from '@mui/material';
import '../styles/_vars.scss';

const BannerStart = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="stretch"
      spacing={8}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '60vw',
          minWidth: 270,
          minHeight: 200,
          alignSelf: 'center',
        }}
      >
        <Paper
          elevation={24}
          sx={{
            backgroundColor: 'var(--white)',
            minHeight: 200,
            width: '60vw',
            minWidth: 270,
            display: 'flex',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid container item xs={12} md={7} justifyContent="center">
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                spacing={2}
                sx={{ p: 2 }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  fontWeight="bold"
                  sx={{
                    textAlign: 'left',
                    textWrap: 'balance',
                  }}
                  color="primary"
                >
                  ¿Quieres empezar un proyecto con nosotros?
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  sx={{ textAlign: 'left', textWrap: 'pretty' }}
                >
                  ¿Estás listo para llevar tu negocio al siguiente nivel?
                  Empieza tu proyecto con nosotros y descubre cómo podemos
                  transformar tus ideas en una realidad digital impactante. ¡Haz
                  clic aquí para comenzar!
                </Typography>
              </Stack>
            </Grid>
            <Grid container item xs={12} md={3} justifyContent="center">
              <Button
                type="button"
                id="start-btn"
                LinkComponent={Link}
                href="/contact-us"
                variant="contained"
              >
                Empecemos
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Stack>
  );
}

export default BannerStart;
