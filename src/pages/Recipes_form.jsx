import Header from "../Components/Header"
import "../CSS/Recipe.css"
import Recipe_name_field from "../Components/Recipe_form_components/Recipe_name_field"
import Recipe_process_field from "../Components/Recipe_form_components/Recipe_process_field"
import Recipe_ingredients_overview from "../Components/Recipe_form_components/Recipe_ingredients_overview"
import Recipe_file_submit_row from "../Components/Recipe_form_components/Recipe_file_submit_row"
import Recipe_timeSet_row from "../Components/Recipe_form_components/Recipe_timeSet_row"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
function Recipe_form(){
    const { id = false } = useParams();
    const [Ingredients, setIngredients] = useState([]);
    const[RecipeName,setRecipeName] = useState("");
    const[Process,setProcess] = useState("");
    const[Image,setImage] = useState("");
    const[Time,setTime] = useState("");
    
    function DataSend()
    {

        const sendData = async () => {
            const formData = new FormData();
            formData.append("name", RecipeName);
            formData.append("Process", Process);
            formData.append("Time", Time);
            formData.append("ID", Cookies.get("ID"));
            formData.append("Ingredients", JSON.stringify(Ingredients)); // POZOR: musí být string
            formData.append("Image", Image); // Už máme soubor v `Image`, ne string
        
            try {
                const response = await fetch("http://localhost/my-app/src/Model/Recipe_add.php", {
                    method: "POST",
                    body: formData,
                });
        
                if (!response.ok) throw new Error("Chyba při odesílání dat");
        
                const result = await response.json();
                alert("Data byla úspěšně odeslána!");
                console.log(result);
            } catch (error) {
                console.error("Chyba:", error);
                alert("Došlo k chybě při odesílání dat.");
            }
        };
        
        sendData();
    };



    
    

    if (!id) {
    return (
        <>
        <Header page_active=""/>
            <div className="recipe_form_coat">
            <form onSubmit={(e) => { e.preventDefault(); DataSend();}}>
            <Recipe_name_field name={RecipeName} setName={setRecipeName}/> 
            <Recipe_process_field process={Process} setProcess={setProcess}/>
            <Recipe_ingredients_overview Ingredients={Ingredients} setIngredients={setIngredients}  OpenInEdit={false}/>
            <Recipe_file_submit_row image={Image} setImage={setImage} DataSend={DataSend}/>
            <Recipe_timeSet_row time={Time} setTime={setTime}/>
            </form>
            </div>
        </>
    )
} 
else {
    
        const [data, setData] = useState([]);
    
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
                setRecipeName(data[1]);
                setProcess(data[3]);
                setImage(data[2]);
                setTime(data[4]);
                setIngredients(data[6]);
              })
              .catch((error) => {
                console.error('Error:', error);
                setError(error.message);
              });
              
          }, [id]);
    }

    return (
        <>
        <Header page_active=""/>
            <div className="recipe_form_coat">
            <form onSubmit={(e) => { e.preventDefault(); DataSend();}}>
            <Recipe_name_field name={RecipeName} setName={setRecipeName}/> 
            <Recipe_process_field process={Process} setProcess={setProcess}/>
            <Recipe_ingredients_overview Ingredients={Ingredients} setIngredients={setIngredients} OpenInEdit={true}/>
            <Recipe_file_submit_row image={Image} setImage={setImage} DataSend={DataSend}/>
            <Recipe_timeSet_row time={Time} setTime={setTime}/>
            </form>
            </div>
        </>
    )
}


export default Recipe_form