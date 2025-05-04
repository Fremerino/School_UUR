
import Generic_label from "../Generic/Generic_label"
import Dropdown_component from "./Dropdown_component";
import "../../CSS/Recipe_add.css";
import Recipe_ingredients_row from "./Recipe_ingredients_row";
import Recipe_ingredients_add_button from "./Recipe_ingredients_add_button";
import { useState } from "react";
import { useEffect } from "react";
function Recipe_ingredients_overview(props) {
    
if(!props.OpenInEdit)
{ 
    const [rows, setRows] = useState([<Recipe_ingredients_row setIngredients={props.setIngredients} key={0} identifikator={0}/>]);

    const handleAddRow = () => {
        setRows(prev => [...prev, <Recipe_ingredients_row setIngredients={props.setIngredients} key={rows.length} identifikator={rows.length} />]);
    };

    const styler = {
        display: "block",
        fontSize: "x-large",
        marginLeft: "4vw"
      };
  return (
    <>
    <div className="Recipe_item_row_full"> 
    <Generic_label  text="Ingredients" style_definition={styler} class="nametag_label" />
    <div className="Recipe_ingeridents_coat"> 
        {rows}
        <Recipe_ingredients_add_button adder={handleAddRow}/>
    </div>
    </div>
    </>
  )
}
else
{ 
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (props.OpenInEdit && props.Ingredients.length > 0) {
      const initialRows = props.Ingredients.map((_, index) => (
        <Recipe_ingredients_row
          setIngredients={props.setIngredients}
          key={index}
          identifikator={index}
          Ingredients={props.Ingredients[index]}
        />
      ));
      setRows(initialRows);
    }
  }, [props.OpenInEdit, props.Ingredients]);


  const handleAddRow = () => {
      setRows(prev => [...prev, <Recipe_ingredients_row setIngredients={props.setIngredients} key={rows.length} identifikator={rows.length} />]);
  };

  const styler = {
      display: "block",
      fontSize: "x-large",
      marginLeft: "4vw"
    };
return (
  <>
  <div className="Recipe_item_row_full"> 
  <Generic_label  text="Ingredients" style_definition={styler} class="nametag_label" />
  <div className="Recipe_ingeridents_coat"> 
      {rows}
      <Recipe_ingredients_add_button adder={handleAddRow}/>
  </div>
  </div>
  </>
)
}
}
export default Recipe_ingredients_overview