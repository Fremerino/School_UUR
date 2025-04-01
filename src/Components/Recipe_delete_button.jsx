
function Recipe_delete_button(props) {

    function RemoveT()
    {
        props.delete(0)
    }

    return (
      <>
        <button onClick={RemoveT} >X</button>
      </>
    )
  }
  export default Recipe_delete_button