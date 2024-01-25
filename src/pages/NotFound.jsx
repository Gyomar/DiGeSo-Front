import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFound = () => {
  return (
      <Box component="main" sx={{ p: 3, width: '100vw' }}>
        <Typography variant="h2" gutterBottom sx={{ mt: 8 }}>
          Pagina no Encontrada
        </Typography>
      </Box>
  );
};

export default NotFound;
