import Header from "../Components/Header"
import "../CSS/Recipe_info.css"
import Recipe_name from "../Components/Recipe_info_components/Recipe_name"
import Recipe_ingredients from "../Components/Recipe_info_components/Recipe_ingredients"
import Recipe_process from "../Components/Recipe_info_components/Recipe_process"
import Timer_box from "../Components/Recipe_info_components/Timer/Timer_box"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
function Recipe_info(){
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost/my-app/src/Model/Get_Recipe.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
          .then((response) => {
            console.log('Raw response:', response);
            // Zobrazíme surový text odpovědi pro debugging
            return response.text().then(text => {
              console.log('Raw text:', text);
              // Pokud je text prázdný, vyhodíme chybu
              if (!text) throw new Error('No data received');
              // Zkusíme text naparsovat jako JSON
              try {
                return JSON.parse(text);
              } catch (e) {
                console.error('JSON parse error:', e);
                throw new Error(`Failed to parse JSON: ${text}`);
              }
            });
          })
          .then((data) => {
            console.log('Parsed data:', data);
            setData(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error:', error);
            setError(error.message);
          });
      }, []);

    if (isLoading) {
    return <div className="App">Loading...</div>;
    }

    return (
        <>
        
        <Header page_active=""/>
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
        <Timer_box/>
        </>
    )
}

export default Recipe_info