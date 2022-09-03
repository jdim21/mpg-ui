import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { CssBaseline, Typography } from "@mui/material";
import aaaLogo from './aaaLogo.png';
import wagLogoHidden from './wagLogoHidden.png';
import mpgLogo from './mpgLogoV2Outlined.png';
import discordLogo from './discordLogo.png';
import twitterLogo from './twitterLogo.png';

const Footer = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <div style={{backgroundColor: theme.palette.primary.dark}} fontFamily={theme.typography.fontFamily} ref={ref} id={"footer"}>
    <Container fontFamily={theme.typography.fontFamily}>
    <CssBaseline />
      <img width="96" height="96" src={mpgLogo}></img>
      {/* <Typography color="white" sx={{pt: 5, pb: 1}} variant="body2" fontWeight="bold">Made with love</Typography> */}
    </Container>
    </div>);
}

export default Footer;