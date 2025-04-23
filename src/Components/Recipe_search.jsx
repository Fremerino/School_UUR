
function Recipe_search(props) {

  
    return (
      <>
          <div className="Search"> 
              <input type="text" placeholder="Hledat..." onChange={(e) => props.setSearch(e.target.value)}/>
          </div>
      </>
    )
  }
  export default Recipe_search