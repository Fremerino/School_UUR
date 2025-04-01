


export default function Recipe_ingredients_add_button(props) {

    return (
        <div className="Recipe_item_row_button"> 
            <button className="add_button" onClick={props.adder}>+</button>
        </div>
    )
}