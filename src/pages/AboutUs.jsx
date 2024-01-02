import Box from '@mui/material/Box';
import Layaout from '../containers/Layout';

const AboutUs = () => {
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
      Nosotros
    </Box>
  );
}

export default AboutUs;
