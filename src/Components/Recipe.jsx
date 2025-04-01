import Recipe_label_box from "./Recipe_name_box"
import Recipe_delete_button from "./Recipe_delete_button"
import "../CSS/Recipe.css"
import { useState } from "react"
import Recipe_edit_button from "./Recipe_edit_button"
import Recipe_timer_overview from "./Recipe_timer_overview"
import reference from "../assets/reference.webp"

function Recipe(props) {
    const [state,setState] = useState(1);

if(state==1)
{
    return (
        <>
        
            <div className="recipe_coat">
                <img src={reference} alt="recipe_image" className="recipe_image"/> 
                <Recipe_label_box name={"props.name"} className="nametag"></Recipe_label_box>
                <Recipe_label_box name={"props.name"} className="nametag"></Recipe_label_box>
                <div className="recipe_buttons">
                    <Recipe_delete_button delete={setState} />
                    <Recipe_edit_button></Recipe_edit_button>
                </div>

                <Recipe_timer_overview time={"30:00"}/>
            </div>
        </>
      )
    }

else {
    return (<></>)
}
}
export default Recipe