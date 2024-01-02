import Box from '@mui/material/Box';
import Layaout from '../containers/Layout';

const Services = () => {
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
      Servicios
    </Box>
  );
}

export default Services;
