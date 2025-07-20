import Header from "../Components/Header_components/Header"
import "../CSS/Recipe_info.css"
import Recipe_name from "../Components/Recipe_info_components/Recipe_name"
import Recipe_ingredients from "../Components/Recipe_info_components/Recipe_ingredients"
import Recipe_process from "../Components/Recipe_info_components/Recipe_process"
import Timer_box from "../Components/Recipe_info_components/Timer/Timer_box"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Publish from "../Components/Recipe_info_components/Published/Publish"
import Cookies from "js-cookie"
function Recipe_info(){
    const { id, isPublic } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [NumberOfServings,setNumberOfServings] = useState(1);
    const [originalIngredients, setOriginalIngredients] = useState([]);
    const [IsPublished,setIsPublished] = useState(parseInt(isPublic));
    const user = Cookies.get("ID");
    useEffect(() => {
        fetch("http://localhost/my-app/src/Model/Get_Recipe.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
          .then((response) => {
            return response.text().then(text => {
              if (!text) throw new Error('No data received');
              try {
                return JSON.parse(text);
              } catch (e) {
                console.error('JSON parse error:', e);
                throw new Error(`Failed to parse JSON: ${text}`);
              }
            });
          })
          .then((data) => {
            setData(data);
            setLoading(false);
            setOriginalIngredients(data[6]);
     
          })
          .catch((error) => {
            console.error('Error:', error);
            setError(error.message);
          });
      }, []);


      useEffect(() => {
        
            const updatedIngredients = originalIngredients.map((item) => ({
        ...item,
        COUNT: (parseFloat(item.COUNT) * NumberOfServings).toString()
    }));
   
    setData((prevData) => {
        const newData = [...prevData];
        newData[6] = updatedIngredients;
        return newData;
    });


  },[NumberOfServings]);


    if (isLoading) {
    return <div className="App">Loading...</div>;
    }
if(data[5]==user)
{
    return (
        <>
        
        <Header page_active=""/>
        <Timer_box/>
        
        <div className="Serving_coat">
          <h1>Number of servings</h1>
          <input type="number" value={NumberOfServings} onChange={(e) => {setNumberOfServings(parseInt(e.target.value=="" ? 1 : e.target.value ))}} min={1} className="Serving_inmput"></input>
        </div>
        <div className="recipe_info_coat">
            <div className="recipe_grid_1" >
                <Recipe_name name={data[1]}/>
                <div className="grid_1_items ">
                    <Recipe_ingredients ingredience={data[6]}/>
                </div>
            </div>
            <div className="recipe_grid_2" >
            <Recipe_process text={data[3]}/>
            </div>
        </div>
        <Publish IsPublished={IsPublished} Recipe_id={id} setPublishState={setIsPublished}/>
        <div style={{ height: '50px' }}></div>
        </>
    )
}
else {
      return (
        <>
        
        <Header page_active=""/>
        <Timer_box/>
        
        <div className="Serving_coat">
          <h1>Number of servings</h1>

          <input type="number" value={NumberOfServings} onChange={(e) => {setNumberOfServings(parseInt(e.target.value))}}   
          onBlur={() => {
            if (NumberOfServings === "" || isNaN(NumberOfServings)) {
              setNumberOfServings(1);
            }}}
          min={1} className="Serving_inmput" ></input>

        </div>
        <div className="recipe_info_coat">
            <div className="recipe_grid_1" >
                <Recipe_name name={data[1]}/>
                <div className="grid_1_items ">
                    <Recipe_ingredients ingredience={data[6]}/>
                </div>
            </div>
            <div className="recipe_grid_2" >
            <Recipe_process text={data[3]}/>
          
            </div>
        </div>
        </>
    )
}
}
export default Recipe_info