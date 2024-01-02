import Box from '@mui/material/Box';
import Layaout from '../containers/Layout';

const ContactUs = () => {
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
      Contactenos
    </Box>
  );
}

export default ContactUs;
