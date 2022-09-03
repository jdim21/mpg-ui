import React from "react";
import './Games.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Card, CardContent, Stack, Paper, CssBaseline, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import wagBannerGif from './wagBannerGif.gif';
import mpgBanner from './mpgBanner.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from './AaaTheme';
import Vision from './Vision';
import About from './About';
import Faq from './Faq';
import Footer from './Footer';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ExtensionIcon from '@mui/icons-material/Extension';
  
const Games = () => {
  const ref = React.useRef(null);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="Games">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ width: '100%' }} style={{backgroundColor:theme.palette.primary.light}}>
        <Stack spacing={0}>
            <Typography sx={{mt:5}} variant="h1" fontWeight="bold" color="white">
                LATEST RELASE
            </Typography>
            <div style={{backgroundColor:theme.palette.primary.light, justifyContent:"center", marginTop:"20px", marginBottom:"50px"}}>
              <iframe mozallowfullscreen="true" allow="autoplay; fullscreen"  src="https://mpg-games.s3.us-east-2.amazonaws.com/DEV_AstralJump/index.html" name="AstralJump" scrolling="no" msallowfullscreen="true" allowfullscreen="true" webkitallowfullscreen="true" allowtransparency="true" frameborder="0" marginheight="100px" marginwidth="320px" height="880px" width="1280px"></iframe>
            </div>
        </Stack>
        <Stack spacing={0}>
          {/* <div style={{display:"inline-flex", justifyContent:"center", backgroundColor:theme.palette.primary.main}}> */}
          <div style={{justifyContent:"center", backgroundColor:theme.palette.primary.main}}>
            <Typography sx={{mt:5}} variant="h1" fontWeight="bold" color="white">
                UPCOMING RELASES
            </Typography>
            <div style={{display:"inline-flex"}}>
            <Box sx={{ m: 20, minWidth: 275, maxWidth: 800 }}>
              <Card sx={{ minWidth: 275 }} style={{backgroundColor:theme.palette.primary.dark}}>
                <CardContent backgroundColor={theme.palette.primary.dark}>
                  <Typography sx={{ fontSize: 32 }} color="white" gutterBottom>
                    Puzzle Game
                  </Typography>
                  <QuestionMarkIcon sx={{fontSize:120}} style={{color:"white"}}></QuestionMarkIcon>
                  <ExtensionIcon sx={{fontSize:120}} style={{color:"white"}}></ExtensionIcon>
                </CardContent>
              </Card>
            </Box>
            </div>
          </div>
        </Stack>
      </Box>
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
};
  
export default Games;