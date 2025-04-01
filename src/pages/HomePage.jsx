import Header from "../Components/Header"
import Controller from "../Components/Controller/Controller"

function HomePage(){
    return (
        <>
        <Controller/>
        <Header page_active="Home"/>
        <img src="../assets/main_page.png" alt="xd"/>
        </>
    )
}
export default HomePage