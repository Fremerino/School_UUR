import Header from "../Components/Header_components/Header.jsx"
import Profile_img from "../Components/Profile_components/Profile_img.jsx"
import "../CSS/Profile.css"
import Profile_form from "../Components/Profile_components/Profile_form.jsx"
import { useState } from "react";
import Cookies from 'js-cookie';
function Profile(){
    const [name, setName] = useState(Cookies.get('NAME') || 'Nepřihlášen');
    return (
        <>
        
        <Header page_active="Profile"/>
        <div className="Profile_main_container"> 
        <Profile_img name={name}></Profile_img>
        <Profile_form Name_set={setName}></Profile_form>    
        </div>
 
        
        </>
    )
}
export default Profile