import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { CssBaseline, Typography } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Card } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import aaaAvatarBillyJim from './aaaAvatarBillyJim.png';
import aaaAvatarTheGeneral from './aaaAvatarTheGeneral.png';
import aaaAvatarHoyt from './aaaAvatarHoyt.png';
import aaaAvatarIntern from './aaaAvatarIntern.png';
import discordLogo from './discordLogo.png';
import twitterLogo from './twitterLogo.png';
import { Avatar, Stack } from "@mui/material";
import { sizeHeight } from "@mui/system";

const About = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <div style={{backgroundColor: theme.palette.primary.light}} fontFamily={theme.typography.fontFamily} ref={ref} id={"about"}>
      <Typography color={theme.palette.primary.dark} sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">ABOUT</Typography>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-evenly', marginBottom: "3rem"}}>
          <Stack>
            <Avatar sx={{width: 128, height: 128, ml: 1.5}} src={aaaAvatarTheGeneral} />
            <Card sx={{my: 2, mr: 0, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  Jeff
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Investor, Software Engineer, Gamer
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                {/* <a href="https://discordapp.com/users/1008504367160238270">
                  <img width="24" height="24" src={discordLogo}>
                  </img>
                </a> */}
              </Box>
            </Card>
          </Stack>
          <Stack>
            <Avatar sx={{width: 128, height: 128}} src={aaaAvatarBillyJim} />
            <Card sx={{my: 2, maxWidth:150}} backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{px: 1}} backgroundColor={theme.palette.primary.main} color="white" variant="h6" fontWeight="bold">
                  PD
              </Typography>
              <Typography backgroundColor={theme.palette.primary.main} color="white" variant="body1" fontWeight="0">
                  Investor, Manager, Drummer, Gamer
              </Typography>
              <Box backgroundColor={theme.palette.primary.main}>
                <br/>
              </Box>
            </Card>
          </Stack>
      </div>
    </div>);
}

export default About;