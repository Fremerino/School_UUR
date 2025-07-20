import Generic_label from "../Generic/Generic_label"

function Recipe_file_submit_row(props) {

  const styler = {
    display: "block",
    fontSize: "x-large",
    marginLeft: "4vw"
  };


  return (
    <>
          <div className="Recipe_file_submit_row">
              <Generic_label  text="Picture" style_definition={styler} class="nametag_label"  />
              <div className="File_overlay"> <input type="file" id="myFile" name="filename" className="file_button" onChange={(e)=>{props.setImage(e.target.files[0])}} accept="image/*" />  </div>
              <input type="submit" value="Submit" className="submit_button" />
          </div>   
    </>
  )
}
  export default Recipe_file_submit_row