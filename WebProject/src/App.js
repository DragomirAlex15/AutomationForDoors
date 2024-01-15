import React, {useLayoutEffect} from 'react';
import {Box, Card, CardContent, Typography, Modal} from "@mui/material";
import {Clock} from 'react-live-clock';
import LiveClockUpdate from "./LiveClock";
import { useEffect, useState } from "react";
import getEntries from "./api";
import DoorFrontTwoToneIcon from '@mui/icons-material/DoorFrontTwoTone';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  borderRadius:"15px",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 240,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function App() {
  const date = new Date();
  const [intrari, setIntrari] = useState(3);
  const [iesiri, setIesiri] = useState(3);
  const [color, setColor] = useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  useEffect(()=>{
    // const entries = getEntries();
    // setIntrari(entries.data.intrari);
    // setIesiri(entries.data.iesiri);
    //console.log(entries);
  }, []);

  useEffect(()=>{
    if(intrari > iesiri){
      setColor("#FF6D60");
    }
    else{
      setColor("#79D70F");
    }
  }, []);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = ""
});

  return (
    <Box >
    <Box paddingTop={8}>
      <Typography variant="h4" fontWeight={'bold'} sx={{ paddingTop : 3, textAlign:'center' }}>Door Manager</Typography>
    </Box>
    <Box paddingTop={5} display={"flex"} justifyContent={'center'}>
      <Card sx={{maxWidth:500, boxShadow:10, borderRadius:"10px"}}>
        <CardContent>
          <LiveClockUpdate/>
          <Typography variant="h6">{date.toDateString()}</Typography>
        </CardContent>
      </Card>
    </Box>
    <Box paddingTop={5} display={"flex"} justifyContent={'center'}>
      <Card sx={{width:350, boxShadow:10, border:"5px solid", borderColor:{color}, borderRadius:"15px" }}>
        <CardContent>
          <Box display={'flex'} >
            <Box>
              <Typography variant="h5" color={"black"}>Number of entries:</Typography>
              <Typography variant="h4" fontWeight={'bold'} color={"black"}>{1}</Typography>
              <Typography variant="h5" color={"black"}>Number of exits:</Typography>
              <Typography variant="h4" fontWeight={'bold'} color={"black"}>{0}</Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'} paddingLeft={5}>
              <IconButton onClick={handleOpen}>
              <DoorFrontTwoToneIcon sx={{fontSize:"100px" , color: color}}/>
              </IconButton>
              <Modal
              open={open}
              onClose={handleClose}
              >
              <Box sx={style}>
                <Typography  variant="h6" component="h2" fontWeight={"bold"}>
                  Door info:
                </Typography>
                <Typography fontWeight={"italic"} sx={{ mt: 2 }}>
                {
                 intrari>iesiri?"Currently the room is busy. The color red simbolizes that.":"The room is free, you can go in whenever you want. The green color of the card simbolizes that."
                }
                </Typography>
               </Box>
              </Modal>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
    <Box paddingTop={5} display={"flex"} justifyContent={'center'}>
      <Card sx={{minWidth:250, maxWidth:300, boxShadow:10, borderRadius:"15px"}}>
        <CardContent>
          <Box>
          <Typography variant='h5'>
            Distance sensor data:
          </Typography>
          <Typography variant='h4' fontWeight={'bold'}>
            20 cm
          </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
    </Box>
    
  );
}

export default App;
