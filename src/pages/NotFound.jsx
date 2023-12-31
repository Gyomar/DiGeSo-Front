import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layaout from '../containers/Layout';

const NotFound = () => {
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
				<Typography variant="h1" gutterBottom sx={{ fontSize: "3.5rem", mt: 8 }}>
					Pagina no Encontrada 404 
				</Typography>
      </Box>
    </Box>
  );
}

export default NotFound;
