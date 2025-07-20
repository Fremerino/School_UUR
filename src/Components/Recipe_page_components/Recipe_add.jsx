import Recipe_label_box from "./Recipe_name_box"
import Recipe_delete_button from "./Recipe_delete_button"
import "../../CSS/Recipe.css"
import { useState } from "react"
import Recipe_edit_button from "./Recipe_edit_button"
import Recipe_timer_overview from "./Recipe_timer_overview"
import plus from "../../assets/Plus_icon.png"
import { useNavigate } from "react-router-dom";
function Recipe_add(props) {
    const [state,setState] = useState(1);
    const navigate = useNavigate();

    function openRecipe(){
        navigate(`/Recipe_form/`);
    }

function check() 
{
    props.checker(props.name,props.id,state)
}

if(state==1)
{
    return (
        <>
        
            <div className="recipe_coat">
                <img src={plus} alt="recipe_image" className="recipe_image" onClick={() => openRecipe()}/> 
                <Recipe_label_box name={"Add a recipe"} identity={"name"} className="nametag"></Recipe_label_box>
            </div>
        </>
      )
    }

else {
    return (<></>)
}
}
export default Recipe_add