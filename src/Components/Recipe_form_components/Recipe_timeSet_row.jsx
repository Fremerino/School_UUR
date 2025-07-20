
import Generic_label from "../Generic/Generic_label"

const styler = {
  display: "block",
  fontSize: "x-large",
  marginLeft: "4vw"
};



function Recipe_timeSet_row(props) {

  function handleInput(e)
  {
    const value = e.target.value.trim();
          if(!isNaN(value) && !isNaN(parseFloat(value)) || value=="")
          {
            props.setTime(e.target.value)
            
          }
          else 
          {

          }
  }




    return (
      <>
        <div className="Recipe_timeSet_row">
          <Generic_label  text="Time" style_definition={styler} class="nametag_label"/> 
          <input name="myInput" className="time_input" onChange={(e)=>{handleInput(e)}} value={props.time} placeholder="minutes" maxLength={5} /> 
        </div>

      </>
    )
  }
  export default Recipe_timeSet_row