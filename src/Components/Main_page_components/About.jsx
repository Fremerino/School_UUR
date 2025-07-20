import { useState } from "react"
import Pop_up from "./Pop_up";

function About() {
    const [Pop_up_vis,set_Pop_vis] = useState(false);
    const message ="School project UUR   \n Author: Martin Fremr \n  Student number: A24B0343P \n Tech: React, PHP, MUI..."
    return (
      <>
        <button id="about_button" onClick={(e) => {set_Pop_vis(!Pop_up_vis)}}>About</button>
        <Pop_up isVisible={Pop_up_vis} Message={message} setPopupOpen={set_Pop_vis}/>
      </>
    )
  }
  export default About