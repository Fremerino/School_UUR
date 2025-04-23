
import icon from "../../assets/check.png"
import { useState } from "react";
function Recipe_info_check_button(props) {
    const [status,setStatus] = useState(false);
    const style_b = {
        backgroundColor: "#cc2f2f"
      }
      if(status)
      {
        style_b.backgroundColor = "#57c92a";
      }
    return (
      <>
        <div className="button_is_it_ready" style={style_b} onClick={(e) => {setStatus(!status)}}>
            <img src={icon} alt="check" className="check_img"  />
        </div>
      </>
    )
  }
  export default Recipe_info_check_button