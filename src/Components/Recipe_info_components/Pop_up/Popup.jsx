
import "../../../CSS/Pop_up.css"
function Popup(props) {

    if(props.isVisible == true)
    {
        
        return (
            <div className="popup-overlay" id="popup">
            <div className="popup">
                <h2 id="recipe">{props.Message}</h2>
                <div className="btn-group">
                <button className="btn-yes" onClick={(e) => {props.setPopupOpen(false)}}>YES</button>
                </div>
            </div>
            </div>
        )
    }
    else 
    {
        return (<></>)
    }
  }
  export default Popup