
import React, { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "../../../CSS/Timer.css"

function Timer(props) {
    const [Time,setTime] = useState("");
    const [Status, setStatus] = useState(0);
    const [InitialTime, setInitialTime] = useState("");
    const [TimeElapsed, setTimeElapsed] = useState("Time elapsed");
    
function Timing() {
    const time_unform = Time.split(":");
    let minutes = parseInt(time_unform[0], 10);
    let seconds = parseInt(time_unform[1], 10);

    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;

    const currentTimeInSeconds = minutes * 60 + seconds;

    if (currentTimeInSeconds === 0) {
        setStatus(0); //zastavení timeru
        return;
    }

    let newTimeInSeconds = currentTimeInSeconds - 1;

    // Přepočty na formát na MM:SS
    const newMinutes = Math.floor(newTimeInSeconds / 60);
    const newSeconds = newTimeInSeconds % 60;

    const formattedMinutes = newMinutes.toString().padStart(2, '0');
    const formattedSeconds = newSeconds.toString().padStart(2, '0');
    const format = `${formattedMinutes}:${formattedSeconds}`;

    setTime(format);

    // Výpočet času [TimeElapsed]
    const elapsedInSeconds = InitialTime - newTimeInSeconds;
    const elapsedMin = Math.floor(elapsedInSeconds / 60);
    const elapsedSec = elapsedInSeconds % 60;

    const formattedElapsed = `${elapsedMin.toString().padStart(2, '0')}:${elapsedSec.toString().padStart(2, '0')}`;
    setTimeElapsed(formattedElapsed);
}
    useEffect(() => {
        if (Status === 1) {
            const interval = setInterval(() => {
                Timing();
            }, 100); // pro účely test to není 1s ale 0,1s

            return () => clearInterval(interval);
        }
    }, [Status,Time]);

    const handleInputChange = (e) => {
        let raw = e.target.value.replace(/\D/g, ''); 
        if (raw.length > 5) raw = raw.slice(0, 5); 
        let TimeToSet = 0;
        let formatted = raw;
        if (raw.length > 2) {
          const minutes = raw.slice(0, raw.length - 2);
          const seconds = raw.slice(-2);
          formatted = `${minutes}:${seconds}`;
          TimeToSet = minutes*60+parseInt(seconds);
        }

        // tady přidáno, nefungoval dopočet času
        if(raw.length<=2)
        {
          const minutes = raw.slice(0,2)
          TimeToSet = minutes*60;
        }
        if(Status==0)
        {
            setTime(formatted);
            setInitialTime(TimeToSet);
        }
    }
    return (
      <>
    <Box sx={{ flexGrow: 1,width: '100%' }}>
        <Grid container spacing={2}>
            <Grid size={12}>
                <input type="text" value={Time} className={`Timer_input ${Status === 1 ? 'active' : 'paused'}`} onChange={handleInputChange} placeholder='Time'/> 
            </Grid>
               <Grid size={12}>
                <input type="text" value={TimeElapsed} className={`Time_elapsed ${Status === 1 ? 'active' : 'paused'}`} placeholder='Time elapsed' readOnly={true}/> 
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