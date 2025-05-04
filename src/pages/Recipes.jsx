import Header from "../Components/Header"
import Recipe from "../Components/Recipe"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Recipe_page_controller from "../Components/Recipe_page_controller";

function Recipes(){
    const colorItems = [];
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    console.log("xxxx"+Cookies.get("ID"));
    useEffect(() => {
      fetch("http://localhost/my-app/src/Model/Main.php")
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
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error.message);
        });
    }, []);

    if (error) return <div>Error: {error}</div>;
  

 
    if(Cookies.get("ID") === undefined)
    {
      return (
        <>
        <Header page_active="Recipes"/>
        </>
    )
    }
    else {
      return (
        <>
        <Header page_active="Recipes"/>
        <Recipe_page_controller data={data} />
        </>
    )
    }
}
export default Recipes