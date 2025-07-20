
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
  const[data_quant,setData_quant] = useState("");
  if(props.Ingredients)
  { 
  useEffect(() => {
    setData({"nameR":props.Ingredients["nameR"],"quantity":props.Ingredients["quantity"],"unit":props.Ingredients["unit"]})
  },[]);
  }



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
        const value = e.target.value.trim();
        if(!isNaN(value) && !isNaN(parseFloat(value)) || value=="")
        {
          
          setData_quant(e.target.value)
          
          setData(prev => ({
            ...prev,
            "quantity": e.target.value
        }));
        }
        else 
        {

        }
        
      }
      else {
        setData(prev => ({
          ...prev,
          "unit": e.target.value.name
      }));
      }
    }
    
  }
  function IngredientHandler2(e)
  {
    setData(prev => ({
      ...prev,
      "unit": e.name
  }));
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
        <input name="Name" onChange={IngridentHandler} required placeholder="Name" value={data["nameR"]} className="Name_input" maxLength={25}/> 
        <input name="Quantity" onChange={IngridentHandler} required placeholder="Quantity" value={data["quantity"]}  className="Quantity_input" maxLength={6}/>
        <Dropdown_component setData1={IngredientHandler2} setData={IngridentHandler} unit={data["unit"]}/>
    </div>
    </>
  )
}
export default Recipe_ingredients_row