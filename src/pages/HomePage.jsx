import Header from "../Components/Header"
import main_img from "../assets/main_page.png"
function HomePage(){
    return (
        <>
        
        <Header page_active="Home"/>
        <img src={main_img} alt="xd" class="main_img"/>
        </>
    )
}
export default HomePage