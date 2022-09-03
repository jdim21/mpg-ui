import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { Button, CssBaseline, Stack, Typography } from "@mui/material";

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
    </Container>);
}

export default Vision;