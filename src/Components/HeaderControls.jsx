import Button_router from "./Button_router"

function HeaderControls(props) {

    
    return (
      <>   
        <div id="header_buttons">  
            <Button_router desc="Profile" page="/Profile" page_active={props.page_active}/>
            <Button_router desc="Recipes" page="/Recipes" page_active={props.page_active} />
            <Button_router desc="Home" page="/" page_active={props.page_active} />
        </div>
      </>
    )
  }
  export default HeaderControls