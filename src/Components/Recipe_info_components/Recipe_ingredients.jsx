import Generic_label from "../Generic/Generic_label";
import Recipe_info_check_button from "./Recipe_info_check_button"

function Recipe_ingredients(props) {
    const colorItems = [];

    const first_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "9vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginTop: "1vh",

      };
    const second_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "4vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginLeft: "20px"
    };
    const third_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "5vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginLeft: "20px"
        };



    for (let i = 0; i < props.ingredience.length; i++) {
        colorItems.push(
            <div className="ingredients_row">   
              <Generic_label style_definition={first_collumn} text={props.ingredience[i].NAME} class="Recipe_info_label_name"> </Generic_label> 
              <Generic_label style_definition={second_collumn} text={props.ingredience[i].COUNT} class="Recipe_info_label_count"> </Generic_label> 
              <Generic_label style_definition={third_collumn} text={props.ingredience[i].UNIT} class="Recipe_info_label_unit">  </Generic_label> 
              <Recipe_info_check_button></Recipe_info_check_button>
            </div>
        );

    }





    return (
      <>
      <div> 
        {colorItems}
        </div>
      </>
    )
  }
  export default Recipe_ingredients