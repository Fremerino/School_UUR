import Header from "../Components/Header_components/Header"
import Recipe from "../Components/Recipe_page_components/Recipe"
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import Recipe_page_controller from "../Components/Recipe_page_components/Recipe_page_controller";

function Recipes(){
    const colorItems = [];
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [error, setError] = useState(null);
    const [refresh,setRefresh] = useState(null);
    useEffect(() => {
      fetch("http://localhost/my-app/src/Model/Main.php")
        .then((response) => {

          return response.text().then(text => {
            if (!text) throw new Error('No data received');
            try {
              return JSON.parse(text);
            } catch (e) {
            }
          });
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          
          setError(error.message);
        });
    }, []);

    useEffect(() => {
      fetch("http://localhost/my-app/src/Model/Get_public.php")
        .then((response) => {

          return response.text().then(text => {
            if (!text) throw new Error('No data received');
            try {
              return JSON.parse(text);
            } catch (e) {
            }
          });
        })
        .then((data) => {
          setData2(data);
        })
        .catch((error) => {
          
          setError(error.message);
        });
    }, [refresh]);
    if (error) return <div>Error: {error}</div>;
  

 
    if(Cookies.get("ID") === undefined)
    {
      return (
        <>
        <Header page_active="Recipes"/>
        <h1 id="Not_logged_h1">You need to be logged in!</h1>
        </>
    )
    }
    else {
      return (
        <>
        <Header page_active="Recipes"/>
        <Recipe_page_controller data={data} setData={setData} cont={1} text="Your recipes"/>
        <Recipe_page_controller data={data2} setData={setData2} cont={2} text="Public recipes" refreshSet={setRefresh} />
        <div style={{ height: '50px' }}></div>
        </>
    )
    }
}
export default Recipes