import Login_form from "./Login_form"
import Register_form from "./Register_form"
import { useState } from "react";
import Popup from "../Recipe_info_components/Pop_up/Popup"
function Profile_form(props) {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message,setMessage] = useState(" ");

    return (
      <>

        <div className="Profile_form_coat">
            <Login_form Name_set={props.Name_set} Message={setMessage} set_pop_up={setPopupOpen}/>
            <Register_form Message={setMessage} set_pop_up={setPopupOpen} />
        </div>
        <Popup isVisible={isPopupOpen} Message={message} setPopupOpen={setPopupOpen}/>
      </>
    )
  }
  export default Profile_form