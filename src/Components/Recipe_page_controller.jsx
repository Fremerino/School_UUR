import Header from "../Components/Header"
import Recipe from "../Components/Recipe"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Recipe_search from "../Components/Recipe_search";
import Recipe_add from "./Recipe_add";

function Recipe_page_controller(props) {
    const [search, setSearch] = useState('');
    const [recipes_s,setRecipes] = useState([]);
    const [recipeToDelete, setRecipeToDelete] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const recipes = [];

    function showPopup(recipe_name,recipe_id) {
      document.getElementById("popup").style.display = "flex";
      document.getElementById("recipe").innerHTML = "Remove: "+recipe_name;
      setRecipeToDelete(recipe_id);

    }

    function confirmYes() {
      document.getElementById("popup").style.display = "none";
      if (recipeToDelete) {
        handleRemove(recipeToDelete);
        let i = 0;
        for (const element of props.data) {
            if(element["ID"]==recipeToDelete)
            {
                delete props.data[i];
            }
            i = i + 1;
        }
      }
      setRefresh(prev => !prev);
    }
    function confirmNo() {
      document.getElementById("popup").style.display = "none";
      setRefresh(prev => !prev);
    }

  
    


    function handleRemove(recipe_id) {
      const Remove_Recipe = async () => {
        const data = {
          Recipe_id: recipe_id,
          User_id: Cookies.get("ID")
        };
    
        try {
          const response = await fetch('http://localhost/my-app/src/Model/Remove_Recipe.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          const result = await response.json();
    
          if (result.success) {
            
            setRecipes(prev => prev.filter(r => r.props.id !== recipe_id));
          } else {
            console.error("Chyba při mazání receptu");
          }
        } catch (error) {
          console.error("Chyba připojení k serveru", error);
        }
      };
    
      Remove_Recipe(); 
    }

    useEffect(() => {
      if (props.data) {
          const filtered = props.data
              .filter(row =>
                  Cookies.get('ID') === row.ID_PERSON &&
                  row.NAME.toLowerCase().includes(search.toLowerCase())
              )
              .map(row =>
                  <Recipe
                      key={row.ID}
                      name={row.NAME}
                      time={row.TIMER}
                      id={row.ID}
                      image={row.Image}
                      checker={showPopup}
                  />
              );
          setRecipes(filtered);
      }
  }, [search, props.data,refresh]);






    return (
      <>
          <Recipe_search  setSearch={setSearch}></Recipe_search>
          <div id="flex_recipe_container">
            {recipes_s}
            <Recipe_add></Recipe_add>
          </div>
            <div class="popup-overlay" id="popup">
              <div class="popup">
                <h2 id="recipe">Remove Spaghetti?</h2>
                <div class="btn-group">
                  <button class="btn-yes" onClick={confirmYes}>YES</button>
                  <button class="btn-no" onClick={confirmNo}>NO</button>
                </div>
              </div>
            </div>
      </>
    )
  }
  export default Recipe_page_controller