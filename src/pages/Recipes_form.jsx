import Header from "../Components/Header"
import "../CSS/Recipe.css"
import Recipe_name_field from "../Components/Recipe_form_components/Recipe_name_field"
import Recipe_process_field from "../Components/Recipe_form_components/Recipe_process_field"
import Recipe_ingredients_overview from "../Components/Recipe_form_components/Recipe_ingredients_overview"
import Recipe_file_submit_row from "../Components/Recipe_form_components/Recipe_file_submit_row"
import Recipe_timeSet_row from "../Components/Recipe_form_components/Recipe_timeSet_row"
import Cookies from "js-cookie"
import { useState } from "react"
function Recipe_form(){
    const [Ingredients, setIngredients] = useState([]);
    const[RecipeName,setRecipeName] = useState("");
    const[Process,setProcess] = useState("");
    const[Image,setImage] = useState("");
    const[Time,setTime] = useState("");

    function DataSend()
    {
        const sendData = async () => {
            const data = { 
                name: RecipeName,
                Process: Process,
                Image: Image,
                Time: Time,
                Ingredients: Ingredients,
                ID: Cookies.get('ID'),
            };

            
            
            try {
                const response = await fetch('http://localhost/my-app/src/Model/Recipe_add.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
            
                if (!response.ok) {
                    throw new Error('Nastala chyba při odesílání dat');
                }
            
                const result = await response.json();
                console.log('Úspěch:', result);
                alert('Data byla úspěšně odeslána!');
            } catch (error) {
                console.error('Chyba:', error);
                alert('Došlo k chybě při odesílání dat.');
            }
        };
        sendData();
    };
    


    return (
        <>
        <Header page_active=""/>
            <div className="recipe_form_coat">
            <Recipe_name_field name={RecipeName} setName={setRecipeName}/> 
            <Recipe_process_field process={Process} setProcess={setProcess}/>
            <Recipe_ingredients_overview Ingredients={Ingredients} setIngredients={setIngredients}/>
            <Recipe_file_submit_row image={Image} setImage={setImage} DataSend={DataSend}/>
            <Recipe_timeSet_row time={Time} setTime={setTime}/>
            </div>
        </>
    )
}
export default Recipe_form