import Header from "../Components/Header"
import Recipe from "../Components/Recipe"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Recipe_search from "../Components/Recipe_search";

function Recipe_page_controller(props) {


    const recipes = [];
    const [search, setSearch] = useState('');
    props.data.forEach(row => {
        if(Cookies.get('ID') == row.ID_PERSON && row.NAME.toLowerCase().includes(search.toLowerCase())){
            recipes.push(
              <Recipe name={row.NAME} time={row.TIMER} id={row.ID}> </Recipe>
          );
        }
      });
    return (
      <>
          <Recipe_search  setSearch={setSearch}></Recipe_search>
            <div id="flex_recipe_container"> 
             {recipes}
            </div>

      </>
    )
  }
  export default Recipe_page_controller