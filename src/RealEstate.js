import React from "react";
import './RealEstate.css';
import ResponsiveAppBar from './ResponsiveAppBar';
import { Box, Card, CardActions, Typography, Button, Stack, Paper, CssBaseline, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import wagBannerGif from './wagBannerGif.gif';
import mpgBanner from './mpgBanner.png';
import { ThemeProvider } from '@mui/material/styles';
import theme from './AaaTheme';
import Vision from './Vision';
import About from './About';
import Faq from './Faq';
import Footer from './Footer';
import ConstructionIcon from '@mui/icons-material/Construction';
  
const RealEstate = () => {
  const ref = React.useRef(null);
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="RealEstate">
      <ResponsiveAppBar></ResponsiveAppBar>
      <div style={{backgroundColor:theme.palette.primary.light, height:"85vh"}}>
      <div style={{display:"inline-flex", justifyContent:"center", backgroundColor:theme.palette.primary.light}}>
        <Box sx={{ m: 20, minWidth: 275, maxWidth: 800 }}>
          <Card sx={{ minWidth: 275 }} style={{backgroundColor:theme.palette.primary.main}}>
            <CardContent backgroundColor={theme.palette.primary.dark}>
              <Typography sx={{ fontSize: 32 }} color="white" gutterBottom>
                Under Construction
              </Typography>
              <ConstructionIcon sx={{fontSize:120}} style={{color:"white"}}></ConstructionIcon>
            </CardContent>
          </Card>
        </Box>
      </div>
      </div>
      <Footer></Footer>
    </div>
    </ThemeProvider>
  );
};
  
export default RealEstate;