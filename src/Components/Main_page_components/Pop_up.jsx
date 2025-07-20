
import "../../CSS/Pop_up.css"
function Pop_up(props) {
    const lines = props.Message.split("\n");
    if(props.isVisible == true)
    {
        
        return (
            <div className="popup-overlay" id="popup">
            <div className="popup">
                <h2 id="recipe"> 
                    {lines.map((line, index) => (
                        <span key={index}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h2>
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
  export default Pop_up