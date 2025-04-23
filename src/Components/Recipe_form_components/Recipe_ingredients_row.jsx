
import Generic_label from "../Generic/Generic_label"
import Dropdown_component from "./Dropdown_component";
import "../../CSS/Recipe_add.css";
import { useState } from "react";
import { useEffect } from "react";
function Recipe_ingredients_row(props) {
  const[data,setData] = useState({
    nameR: "",
    quantity: "",
    unit: ""
  });
  function IngridentHandler(e)
  {
    if(e.target.name=="Name")
    {

      setData(prev => ({
        ...prev,
        "nameR": e.target.value
    }));
    }
    else {
      if(e.target.name=="Quantity")
      {
        setData(prev => ({
          ...prev,
          "quantity": e.target.value
      }));
      }
      else {
        setData(prev => ({
          ...prev,
          "unit": e.target.value.name
      }));
      }
    }
    
  }
  useEffect(() => {
    props.setIngredients(prev => ({
      ...prev,
      [props.identifikator]: data
  }));
  }, [data]);

  return (
    <>
    <div className="Recipe_item_row"> 
        <input name="Name" onChange={IngridentHandler} required/> 
        <input name="Quantity"onChange={IngridentHandler} required/>
        <Dropdown_component setData={IngridentHandler}/>
    </div>
    </>
  )
}
export default Recipe_ingredients_row