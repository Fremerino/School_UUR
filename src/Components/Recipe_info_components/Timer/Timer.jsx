
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../../../CSS/Timer.css"

function Timer(props) {
    const [Time,setTime] = useState("");
    const [Status, setStatus] = useState(0);
    
    function Timing() {
        const time_unform = Time.split(":");
        let minutes = parseInt(time_unform[0], 10);
        let seconds = parseInt(time_unform[1], 10);
    
        if (isNaN(minutes)) minutes = 0;
        if (isNaN(seconds)) seconds = 0;
    
        if (minutes === 0 && seconds === 0) {
            setStatus(0); // stop timer
            return;
        }
    
        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            }
        }
    
        // Formátování s nulami
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        const format = `${formattedMinutes}:${formattedSeconds}`;
    
        setTime(format);
    }
    useEffect(() => {
        if (Status === 1) {
            const interval = setInterval(() => {
                Timing();
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [Status,Time]);

    const handleInputChange = (e) => {
        let raw = e.target.value.replace(/\D/g, ''); // jen číslice
        if (raw.length > 5) raw = raw.slice(0, 5); // max 5 číslic (MMMSS)
    
        let formatted = raw;
        if (raw.length > 2) {
          const minutes = raw.slice(0, raw.length - 2);
          const seconds = raw.slice(-2);
          formatted = `${minutes}:${seconds}`;
        }
        setTime(formatted);
    }
    return (
      <>
    <Box sx={{ flexGrow: 1,width: '100%', }}>
        <Grid container spacing={2}>
            <Grid size={12}>
                <input type="text" value={Time} className="Timer_input" onChange={handleInputChange} placeholder='Time'/> 
            </Grid>
            <Grid size={12}>
                <input type="text" className="Timer_input" placeholder='Task'/> 
            </Grid>
            <Grid size={6}>
                <button onClick={ (e) => {setStatus(1)}} className="Timer_button_start" > Start </button>
            </Grid>
            <Grid size={6}>
                <button onClick={ (e) => {setStatus(0)}} className="Timer_button_pause" > Pause  </button>
            </Grid>
        </Grid>
    </Box>     
      </>
    )
  }
  export default Timer