import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { Button, CssBaseline, Stack, Typography } from "@mui/material";
import twitterLogo from './twitterLogo.png'
import discordLogo from './discordLogo.png'

const Vision = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <Container style={{backgroundColor: theme.palette.primary.main}} fontFamily={theme.typography.fontFamily} ref={ref} id={"vision"}>
      <CssBaseline />
      <Typography color="white" sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">VISION</Typography>
      <Typography color="white" sx={{pt: 1, pb: 5}} variant="h6" fontWeight="bold" >
        Mashed Potato Group aims to contribute to housing and entertainment. Starting in Salisbury, Maryland, MPG is
        helping to provide quality houses at quality prices for renters and buyers of the community. MPG also strives
        to provide fun and accessible video games during a time where gaming is a core component of our culture.
      </Typography>
      {/* <div> */}
      {/* <Button variant="contained" style={{backgroundColor: theme.palette.primary.dark}} color="primary" href="https://twitter.com/wealthyaptgang" sx={{mb: 2}}>
        <Typography color="white" sx={{pr: 2}} fontWeight="bold">
          Follow us on Twitter!
        </Typography>
          <img style={{paddingTop: 3}} width="28" height="24" src={twitterLogo}></img>
      </Button>
      </div>
      <Button variant="contained" style={{backgroundColor: theme.palette.primary.dark}} color="secondary" href="https://discord.gg/Jrf4bzpkHw" sx={{mb: 5}}>
        <Typography color="white" sx={{pr: 2}} fontWeight="bold">
          Join our discord!
        </Typography>
        <img width="24" height="24" src={discordLogo}></img>
      </Button> */}
    </Container>);
}

export default Vision;