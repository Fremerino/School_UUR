
import Recipe from "./Recipe"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Recipe_search from "./Recipe_search";
import Recipe_add from "./Recipe_add";
import Selection from "./Selection/Selection";
import Public_recipe from "./Public_recipe";
function Recipe_page_controller(props) {
    const [search, setSearch] = useState('');
    const [recipes_s,setRecipes] = useState([]);
    const [recipeToDelete, setRecipeToDelete] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [FilterOption,SetFilterOption] = useState("basic")

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
            if (!element) {
              i++;
              continue;
            }
            if(element["ID"]==recipeToDelete)
            {
                setRecipes(prev => prev.filter(r => r.props.id !== recipeToDelete));
                const newData = props.data.filter(recipe => recipe.ID !== recipeToDelete);
                props.setData(newData);
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
          } 
        } catch (error) {
          console.error("Chyba připojení k serveru", error);
        }
      };
    
      Remove_Recipe(); 
    }

    useEffect(() => {
      const d = new Date();
        if (props.cont === 2) {
            const interval = setInterval(() => {
                props.refreshSet(d.getTime());
            }, 5000); 

            return () => clearInterval(interval);
        }
    });



    useEffect(() => {
    let mapped = 0;
  if (props.data) {
    let filtered = props.data.filter(row =>
      row.NAME.toLowerCase().includes(search.toLowerCase())
    );
    switch (FilterOption.toLowerCase()) {
      case 'a-z':
        filtered.sort((a, b) => a.NAME.localeCompare(b.NAME));
        break;
      case 'time':
        filtered.sort((a, b) => parseInt(a.TIMER) - parseInt(b.TIMER));
        break;
      case 'basic':
      default:
        break;
    }

  if (props.cont === 1) {
    filtered = filtered.filter(row => Cookies.get('ID') === row.ID_PERSON);
  }
if(props.cont==1)
{
     mapped = filtered.map(row =>
      <Recipe
        key={row.ID}
        name={row.NAME}
        time={row.TIMER}
        id={row.ID}
        image={row.Image}
        checker={showPopup}
        public={row.Public}
      />
    );
}
else {
       mapped = filtered.map(row =>
      <Public_recipe
        key={row.ID}
        name={row.NAME}
        time={row.TIMER}
        id={row.ID}
        image={row.Image}
        checker={showPopup}
        public={row.Public}
        ID_PERSON = {row.ID_PERSON}
      />
    );
}
    setRecipes(mapped);
  }
  }, [search,props.data,FilterOption]);


  if(props.cont==1)
  { 
    return (
      <>
          <h1 className="Mainer">Your recipes</h1>
          <Recipe_search  setSearch={setSearch}></Recipe_search>
          <div className="Selection_coat"> 
              <Selection selectVal={SetFilterOption}/>
          </div>
          <div id="flex_recipe_container">
            {recipes_s}
            <Recipe_add></Recipe_add>
          </div>
            <div className="popup-overlay-2 " id="popup">
              <div className="popup">
                <h2 id="recipe">Remove?</h2>
                <div className="btn-group">
                  <button className="btn-yes" onClick={confirmYes}>YES</button>
                  <button className="btn-no" onClick={confirmNo}>NO</button>
                </div>
              </div>
            </div>
      </>
    )
  }
  if(props.cont==2)
  {
        return (
      <>
      <h1 className="Mainer2" >Public recipes</h1>
          <Recipe_search  setSearch={setSearch}></Recipe_search>
          <div className="Selection_coat"> 
              <Selection selectVal={SetFilterOption}/>
          </div>
          <div id="flex_recipe_container">
            {recipes_s}
          </div>
            
      </>
    )
  }
  }
  
  export default Recipe_page_controller