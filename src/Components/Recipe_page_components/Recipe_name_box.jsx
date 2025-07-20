
function Recipe_label_box(props) {

  
  return (
    <>
        <div className="nametag"> 
            <p className={props.identity}>{props.name}</p>
        </div>
    </>
  )
}
export default Recipe_label_box