import Generic_label from "../Generic/Generic_label"

function Recipe_name_field(props) {

    const styler = {
        display: "block",
        fontSize: "x-large",
        marginLeft: "4vw"
      };

      return (
        <>
            <div className="Recipe_name_row">
                <Generic_label  text="Name" style_definition={styler} class="nametag_label" />
                <input name="myInput" className="Recipe_name_label" onChange={(e)=>{props.setName(e.target.value)}} value={props.name} required />
            </div>
        </>
    )
  
}
export default Recipe_name_field