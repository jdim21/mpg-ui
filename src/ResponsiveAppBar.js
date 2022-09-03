import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import mpgLogo from './mpgLogoV2SquaredShadowed.png'


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleNavMenu = (event) => {
    let anchor = null;
    if (event.currentTarget.id == "HOME") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#home"
      );
    } else if (event.currentTarget.id == "REAL ESTATE") {
      anchor = (event.target.ownerDocument || document).querySelector(
        "#realestate"
      );
    } else if (event.currentTarget.id == "GAMES") {
      console.log("/games..");
      anchor = (event.target.ownerDocument || document).querySelector(
        "#games"
      );
    // } else if (event.currentTarget.id == "about") {
    //   anchor = (event.target.ownerDocument || document).querySelector(
    //     "#about"
    //   );
    } else if (event.currentTarget.id == "TRAITS") {
      alert("Coming soon!");
    }
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTraitsPopper = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popperId = open ? 'simple-popper' : undefined;

  return (
    // <ThemeProvider theme={theme}>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <img style={{height: 48, width: 56, paddingRight: 8 }} src={mpgLogo}></img>
          <div/>
          <Box sx={{ justifyContent: "flex-end", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              id="home"
              key="home"
                onClick={handleNavMenu}
              href="/"
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
            >
              HOME
            </Button>
            {/* <Button
              id="about"
              key="about"
                onClick={handleNavMenu}
              href="/#about"
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
            >
              ABOUT
            </Button> */}
            <Button
              id="realestate"
              key="realestate"
              href="/realestate"
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
            >
              REAL ESTATE
            </Button>
            <Button
              id="games"
              key="games"
              href="/games"
              sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold', fontSize: 16, px: 2 }}
            >
              GAMES
            </Button>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    // </ThemeProvider>
  );
};
export default ResponsiveAppBar;
