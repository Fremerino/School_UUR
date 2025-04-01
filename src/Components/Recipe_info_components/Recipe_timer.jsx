
function Recipe_timer(props) {

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
  export default Recipe_timer