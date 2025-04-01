import Header from "../Components/Header"
import Profile_img from "../Components/Profile_components/Profile_img.jsx"
import "../CSS/Profile.css"
import Profile_form from "../Components/Profile_components/Profile_form.jsx"
function Profile(){
    return (
        <>
        
        <Header page_active="Profile"/>
        <div className="Profile_main_container"> 
        <Profile_img></Profile_img>
        <Profile_form></Profile_form>    
        </div>
 
        
        </>
    )
}
export default Profile