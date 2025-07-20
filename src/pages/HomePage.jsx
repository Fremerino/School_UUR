import Header from "../Components/Header_components/Header"
import main_img from "../assets/Main_page.jpeg"
import main_img_2 from "../assets/Main_background_2.png"
import About from "../Components/Main_page_components/About"
function HomePage(){
    return (
        <>
        
        <Header page_active="Home"/>
                <h1 id="Main_phrase">One cannot think well, love well, sleep well, if one has not dined well.</h1>
                <About/>
        <picture>
            <source srcSet={main_img_2} media="(max-width: 1600px)"></source>
            <source srcSet={main_img}></source>
            <img src={main_img} alt="Main_image" class="main_img"/>
        </picture>

        
        </>
    )
}
export default HomePage