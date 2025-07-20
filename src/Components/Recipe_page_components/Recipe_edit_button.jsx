import { Link } from "react-router-dom"
import icon from "../../assets/edit.svg"

function Recipe_edit_button(props) {


    return (
      <>
        <Link to={`/Recipe_form/${props.id}`}><img src={icon} alt="edit"/></Link>
      </>
    )
  }
  export default Recipe_edit_button