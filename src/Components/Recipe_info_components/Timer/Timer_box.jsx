
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Timer from "./Timer"

function Timer_box(props) {



    const [Timers, setTimers] = useState([<Grid size={2}> <Timer/> </Grid>,<Grid size={2}> <Timer/> </Grid>,<Grid size={2}> <Timer/> </Grid>,<Grid size={2}> <Timer/> </Grid>]);
    
    
    return (
    <Box sx={{ flexGrow: 1,width: '80%', m: 20, p: 2, boxShadow: 3}}>
        <Grid container spacing={2} sx={{justifyContent: "center"}}>
            {Timers}
        </Grid>
    </Box>     
    )
  }
  export default Timer_box