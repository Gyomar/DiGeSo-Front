import PropTypes from 'prop-types';
import { Snackbar, Button, Link, Fade, Typography, Alert } from '@mui/material';

const CookieMessage = ({ open, onClose, onAccept, onReject }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert severity="info">
        <Typography
          variant="body2"
          gutterBottom
          sx={{ textAlign: 'left', textWrap: 'pretty' }}
        >
          Este sitio web utiliza cookies para mejorar la experiencia del usuario
          y proporcionar análisis del tráfico. Al hacer clic en{' '}
          <strong>Aceptar</strong>, aceptas el uso de cookies para estos fines.
          Para obtener más información, consulta nuestra{' '}
          <Link fontWeight="bold" color="secondary" href="/privacy-policies" underline="always">
            políticas de privacidad.
          </Link>
        </Typography>
        <Button color="secondary" size="small" onClick={onAccept}>
          Aceptar
        </Button>
        <Button color="secondary" size="small" onClick={onReject}>
          Rechazar
        </Button>
      </Alert>
    </Snackbar>
  );
};

CookieMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default CookieMessage;
