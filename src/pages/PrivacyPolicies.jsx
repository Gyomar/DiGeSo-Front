import { Box, Container, Fade, Typography, Stack } from '@mui/material';
import CabezaFondo from '../assets/images/services-hero-bg.jpg';
import Layaout from '../containers/Layout';
import '../styles/_vars.scss';

const PrivacyPolicies = () => {
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
            height: '40vh',
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
              height: '40vh',
              position: 'absolute',
              backgroundColor: '#101218',
              opacity: 0.8,
              transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s',
            }}
          />
          <Box component="main" sx={{ width: '100vw', zIndex: 1 }}>
            <Container maxWidth="lg">
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
                sx={{ height: '40vh' }}
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
                  Políticas de Privacidad
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
          py: 10,
        }}
      >
        <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'center'}}>
          <Stack
            direction="column"
            justifyContent="space-around"
            alignItems="flex-start"
            spacing={3}
            sx={{px: 4}}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Política de Privacidad
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              fontStyle="italic"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Última actualización: 24/01/2024
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Gracias por visitar nuestro sitio web. En Digital Genius Solutions, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas al interactuar con nuestro sitio web.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Información que Recopilamos
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Cuando visitas nuestro sitio web, recopilamos automáticamente cierta información, como tu dirección IP, tipo de navegador, páginas visitadas y fecha y hora de la visita. Utilizamos esta información para analizar tendencias, administrar el sitio y mejorar la experiencia del usuario.
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Además, podemos recopilar información personal que nos proporcionas voluntariamente al completar formularios en el sitio, como nombre, dirección de correo electrónico y número de teléfono. Esta información se utiliza para comunicarnos contigo y para personalizar nuestros servicios según tus preferencias.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Uso de la Información
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              La información que recopilamos se utiliza para mejorar nuestros servicios, proporcionarte contenido personalizado y comunicarnos contigo sobre nuestras ofertas y promociones. No compartimos tu información personal con terceros sin tu consentimiento, excepto cuando sea necesario para cumplir con la ley o proteger nuestros derechos.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Cookies y Tecnologías Similares
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Utilizamos cookies y tecnologías similares para mejorar la experiencia del usuario y recopilar información sobre cómo interactúas con nuestro contenido. Puedes controlar el uso de cookies a través de la configuración de tu navegador. Para obtener más información sobre cómo utilizamos las cookies, consulta nuestra política de cookies.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Seguridad de la Información
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Tomamos medidas para proteger la información personal que recopilamos contra accesos no autorizados, divulgación o destrucción. Sin embargo, debes tener en cuenta que ninguna transmisión de datos a través de Internet o almacenamiento electrónico es 100% segura.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Cambios en la Política de Privacidad
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te recomendamos que revises periódicamente esta página para estar al tanto de cualquier cambio. La fecha de la última actualización se indicará al comienzo de la política de privacidad.
            </Typography>
            <Typography
              variant="h6"
              gutterBottom
              fontWeight="bold"
              textAlign="left"
              color="primary"
              maxWidth="md"
            >
              Contacto
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              textAlign="left"
              maxWidth="md"
              sx={{
                textWrap: 'pretty',
              }}
            >
              Si tienes alguna pregunta sobre esta política de privacidad o sobre nuestras prácticas de privacidad, contáctanos en info@digesolutions.com.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Layaout>
  );
};

export default PrivacyPolicies;
