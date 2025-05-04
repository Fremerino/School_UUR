import Recipe_label_box from "./Recipe_name_box"
import Recipe_delete_button from "./Recipe_delete_button"
import "../CSS/Recipe.css"
import { useState } from "react"
import Recipe_edit_button from "./Recipe_edit_button"
import Recipe_timer_overview from "./Recipe_timer_overview"
import reference from "../assets/reference.webp"
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { use } from "react"
function Recipe(props) {
    const [state,setState] = useState(1);
    const navigate = useNavigate();

    function openRecipe(){
        navigate(`/Recipe_info/${props.id}`);
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
                <div class="image_wrap"> 
                <img src={`data:image/jpeg;base64,${props.image}`} alt="recipe_image" className="recipe_image" onClick={() => openRecipe()}/> 
                <Recipe_timer_overview time={props.time}/>
                </div>
                <Recipe_label_box name={props.name} identity={"name"} className="nametag"></Recipe_label_box>
                <div className="recipe_buttons">
                    <Recipe_delete_button handleRemove={check} />
                    <Recipe_edit_button id={props.id}></Recipe_edit_button>
                </div>
            </div>
        </>
      )
    }

else {
    return (<></>)
}
}
export default Recipe