import Header from "../Components/Header_components/Header"
import "../CSS/Recipe.css"
import Recipe_name_field from "../Components/Recipe_form_components/Recipe_name_field"
import Recipe_process_field from "../Components/Recipe_form_components/Recipe_process_field"
import Recipe_ingredients_overview from "../Components/Recipe_form_components/Recipe_ingredients_overview"
import Recipe_file_submit_row from "../Components/Recipe_form_components/Recipe_file_submit_row"
import Recipe_timeSet_row from "../Components/Recipe_form_components/Recipe_timeSet_row"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Popup from "../Components/Recipe_info_components/Pop_up/Popup"
function Recipe_form(){
    const { id = false } = useParams();
    const [Ingredients, setIngredients] = useState([]);
    const[RecipeName,setRecipeName] = useState("");
    const[Process,setProcess] = useState("");
    const[Image,setImage] = useState("");
    const[Time,setTime] = useState("");
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [message,setMessage] = useState(" ");
    
function DataSend() {
    const removeData = async () => {
        const data = {
            Recipe_id: id,
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

            if (!response.ok) throw new Error("Chyba při mazání receptu");

            const result = await response.json();
            
        } catch (error) {
            console.error("Chyba při mazání receptu:", error);
            alert("Nepodařilo se odstranit recept.");
        }
    };

    const sendData = async () => {
        const formData = new FormData();
        formData.append("name", RecipeName);
        formData.append("Process", Process);
        formData.append("Time", Time);
        formData.append("ID", Cookies.get("ID"));
        formData.append("Ingredients", JSON.stringify(Ingredients)); 
        formData.append("Image", Image); 

        try {
            const response = await fetch("http://localhost/my-app/src/Model/Recipe_add.php", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Chyba při odesílání dat");

            const result = await response.json();
            setMessage(result);
            setPopupOpen(true);
            
        } catch (error) {
            setMessage("You did not choose a picture!");
            setPopupOpen(true);
        }
    };

    const combinedSend = async () => {
    
        if (id) {
            await removeData(); 
        }
        await sendData();
    };

    combinedSend();
}


function base64ToFile(base64String, filename = 'image.png') {

  const arr = base64String.split(',');
  let mime = 'image/png'; 
  let bstr;

  if (arr.length > 1 && arr[0].startsWith('data:')) {
    const mimeMatch = arr[0].match(/:(.*?);/);
    mime = (mimeMatch && mimeMatch[1]) || mime;
    bstr = atob(arr[1]);
  } else {
 
    bstr = atob(base64String);
  }

  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}
    
    

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
            <Popup isVisible={isPopupOpen} Message={message} setPopupOpen={setPopupOpen}/>
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
                setRecipeName(data[1]);
                setProcess(data[3]);
                setImage(base64ToFile(data[2]));
                setTime(data[4]);
                const transformedIngredients = data[6].map(ingredient => ({nameR: ingredient.NAME || '', quantity: ingredient.COUNT || '',unit: ingredient.UNIT || '',}));
                setIngredients(transformedIngredients);
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
            <div className="Info_box"> </div>
            <div className="recipe_form_coat">
            <form onSubmit={(e) => { e.preventDefault(); DataSend();}}>
            <Recipe_name_field name={RecipeName} setName={setRecipeName}/> 
            <Recipe_process_field process={Process} setProcess={setProcess}/>
            <Recipe_ingredients_overview Ingredients={Ingredients} setIngredients={setIngredients} OpenInEdit={true}/>
            <Recipe_file_submit_row image={Image} setImage={setImage} DataSend={DataSend}/>
            <Recipe_timeSet_row time={Time} setTime={setTime}/>
            <h2 className="Beaware"> Beaware! This action sets the recipe to private!</h2>
            </form>
            </div>
            <Popup isVisible={isPopupOpen} Message={message} setPopupOpen={setPopupOpen}/>
        </>
    )
}


export default Recipe_form