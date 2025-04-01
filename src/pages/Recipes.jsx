import Header from "../Components/Header"
import Recipe from "../Components/Recipe"

function Recipes(){
    const colorItems = [];

    for (let i = 0; i < 10; i++) {
        colorItems.push(
            <Recipe> </Recipe>
        );
    }


    return (
        <>
        <Header page_active="Recipes"/>
        <div id="flex_recipe_container"> 
            {colorItems}
        </div>
        </>
    )
}
export default Recipes