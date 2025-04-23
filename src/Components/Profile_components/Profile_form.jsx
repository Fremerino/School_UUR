import Login_form from "./Login_form"
import Register_form from "./Register_form"


function Profile_form(props) {

  
    return (
      <>

        <div className="Profile_form_coat">
            <Login_form Name_set={props.Name_set}/>
            <Register_form/>
        </div>
      </>
    )
  }
  export default Profile_form