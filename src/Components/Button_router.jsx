import { Link } from "react-router-dom"
import "../CSS/Buttons.css"
function Button_router(props) {

    
    return (
      <>
          <Link to={props.page} className={props.desc==props.page_active ? "active_button" : "none"} class="router_buttons"> {props.desc} </Link>
      </>
    )
  }
  export default Button_router