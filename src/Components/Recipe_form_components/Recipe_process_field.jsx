
import Generic_label from "../Generic/Generic_label"

function Recipe_process_field(props) {
    const styler = {
        display: "block",
        fontSize: "x-large",
        marginLeft: "4vw"
      };
  
  return (
    <>
        <div className="Procces_row">
          <Generic_label  text="Process" style_definition={styler} class="textfield_label"> </Generic_label>  
          <textarea name="postContent" rows="4" cols="50" style={{resize: "none"}} value={props.process} onChange={(e)=>{props.setProcess(e.target.value)}} required/> 
        </div>

    </>
  )
}
export default Recipe_process_field