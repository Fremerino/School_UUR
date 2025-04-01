import Header from "../Components/Header"
import "../CSS/Recipe.css"
import Recipe_name_field from "../Components/Recipe_form_components/Recipe_name_field"
import Recipe_process_field from "../Components/Recipe_form_components/Recipe_process_field"
import Recipe_ingredients_overview from "../Components/Recipe_form_components/Recipe_ingredients_overview"
function Recipe_form(){
    return (
        <>
        <Header page_active=""/>
            <div className="recipe_form_coat">
            <Recipe_name_field/> 
            <Recipe_process_field/>
            <Recipe_ingredients_overview/>
            </div>
        </>
    )
}
export default Recipe_form