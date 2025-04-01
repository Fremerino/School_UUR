import Header from "../Components/Header"
import "../CSS/Recipe_info.css"
import Recipe_name from "../Components/Recipe_info_components/Recipe_name"
import Recipe_ingredients from "../Components/Recipe_info_components/Recipe_ingredients"
import Recipe_process from "../Components/Recipe_info_components/Recipe_process"
function Recipe_info(){
    return (
        <>
        
        <Header page_active=""/>
        <div className="recipe_info_coat">
            <div className="recipe_grid_1" >
                <Recipe_name name="Recipe Name"/>
                <div className="grid_1_items ">
                    <Recipe_ingredients/>
                </div>
            </div>
            <div className="recipe_grid_2" >
            <Recipe_process/>
            </div>
        </div>
        </>
    )
}
export default Recipe_info