
import Generic_label from "../Generic/Generic_label"
import Dropdown_component from "./Dropdown_component";
import "../../CSS/Recipe_add.css";
function Recipe_ingredients_row(props) {

  
  return (
    <>
    <div className="Recipe_item_row"> 
        <input name="myInput" /> 
        <input name="myInput" />
        <Dropdown_component/>
    </div>
    </>
  )
}
export default Recipe_ingredients_row