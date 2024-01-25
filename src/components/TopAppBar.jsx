import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Container,
  Fab,
  Fade,
  Slide,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PropTypes from 'prop-types';

import LogoDigesoBlue from '../assets/images/LogoDigesoBlue.svg';
import LogoDigesoWhite from '../assets/images/LogoDigesoWhite.svg';

const drawerWidth = 240;
const navItems = [
  { label: 'Inicio', link: '/' },
  { label: 'Nosotros', link: '/about-us' },
  { label: 'Servicios', link: '/services' },
  { label: 'Contáctenos', link: '/contact-us' },
];
function ScrollTop(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 80, right: 24 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

const TopAppBar = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', pt: 1 }}>
      <Box
        sx={{
          width: drawerWidth,
          py: 1,
        }}
      >
        <Box
          component="svg"
          sx={{
            height: 45,
            maxWidth: 240,
            backgroundImage: `url(${LogoDigesoBlue})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
          }}
        ></Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              LinkComponent={Link}
              to={item.link}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        objectFit: 'cover',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'absolute',
      }}
    >
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          sx={{ backgroundColor: 'transparent', boxShadow: 'none', pt: 2 }}
        >
          <Container maxWidth="lg">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                component="svg"
                sx={{
                  height: 50,
                  backgroundImage: `url(${LogoDigesoWhite})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  display: { xs: 'none', md: 'block' },
                }}
              ></Box>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                  <Button
                    LinkComponent={Link}
                    to={item.link}
                    key={item.label}
                    color="white"
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Fab href="https://web.whatsapp.com/send?autoload=1&app_absent=1&phone=573172270645&text=Hola%2C+estoy+interesado+en+tus+servicios" aria-label="WhatsApp" sx={{ position: 'fixed', bottom: 16, right: 16}} color="green" target='_blank'>
          <WhatsAppIcon fontSize="large" color="white" />
      </Fab>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};
export default TopAppBar;
