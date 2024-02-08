import PropTypes from 'prop-types';
import { Snackbar, Button, Link, Fade } from '@mui/material';

function CookieMessage({ open, onClose, onAccept, onReject }) {

  const handleClose = () => {
    onClose(); 
  };
  
  return (
    <Snackbar
      TransitionComponent={Fade}
      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
      open={open}
      onClose={handleClose}
      message={
        <>
          Este sitio web utiliza cookies para mejorar la experiencia del usuario
          y proporcionar análisis del tráfico. Al hacer clic en{' '}
          <strong>Aceptar</strong>, aceptas el uso de cookies para estos fines.
          Para obtener más información, consulta nuestra{' '}
          <Link
            href="/privacy-policies"
            color="primary"
            underline="always"
          >
            políticas de privacidad
          </Link>
          .
        </>
      }
      action={
        <>
          <Button color="primary" size="small" onClick={onAccept}>
            Aceptar
          </Button>
          <Button color="primary" size="small" onClick={onReject}>
            Rechazar
          </Button>
        </>
      }
    />
  );
}

CookieMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
};

export default CookieMessage;
