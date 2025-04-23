
import Generic_label from "../Generic/Generic_label"

const styler = {
  display: "block",
  fontSize: "x-large",
  marginLeft: "4vw"
};


function Recipe_timeSet_row(props) {
    return (
      <>
        <div className="Recipe_timeSet_row">
          <Generic_label  text="Time" style_definition={styler} class="nametag_label"/> 
          <input name="myInput" className="time_input" onChange={(e)=>{props.setTime(e.target.value)}} value={props.time} /> 
        </div>

      </>
    )
  }
  export default Recipe_timeSet_row