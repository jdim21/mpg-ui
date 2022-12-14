import { useRef } from "react";
import { useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container';
import { CssBaseline, Typography } from "@mui/material";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const theme = useTheme();
  const ref = useRef(null);
  return (
    <Container sx={{pb: 5}} fontFamily={theme.typography.fontFamily} ref={ref} id={"faq"}>
    <CssBaseline />
      <Typography color="white" sx={{pt: 5, pb: 1}} variant="h3" fontWeight="bold">F.A.Q.</Typography>
      <div>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary 
            backgroundColor={theme.palette.primary.light}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="white" fontWeight="0">Which wallet should I use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                We are currently recommending <a href="https://martianwallet.xyz">Martian wallet.</a>
                <br/>
                We will be monitoring development of wallets as we approach Aptos genesis.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography color="white">Is there a whitelist?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                Nope!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography color="white">Wen mint!?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                TBD
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography color="white">What size will the collection be?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                TBD
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography color="white">What is the mint price?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                TBD
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{backgroundColor: theme.palette.primary.dark}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography color="white">Do you guys like the intern?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="white" fontWeight="bold">
                Today, yes. Tomorrow, we'll see.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>);
}

export default Faq;