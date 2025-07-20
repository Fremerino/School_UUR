


export default function Recipe_ingredients_add_button(props) {

    return (
        <div className="Recipe_item_row_button"> 
            <button type="button" className="add_button" onDoubleClick={props.adder}>+</button>
        </div>
    )
}