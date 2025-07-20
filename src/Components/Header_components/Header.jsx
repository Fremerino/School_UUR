import HeaderControls from "./HeaderControls"
import "../../CSS/Header_style.css"
import logo from "../../assets/logo.png"
function Header(props) {

  
  return (
    <>
    <div id="head"> 
        <img src={logo} alt="logo" className="logo"/> 
        <HeaderControls page_active={props.page_active}/>
    </div>
    </>
  )
}
export default Header