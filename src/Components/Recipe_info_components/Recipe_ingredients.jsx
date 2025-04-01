import Generic_label from "../Generic/Generic_label";


function Recipe_ingredients(props) {
    const colorItems = [];

    const first_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "9vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginTop: "1vh",

      };
    const second_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "4vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginLeft: "20px"
    };
    const third_collumn = {
        backgroundColor: "#F6F8FA",
        borderRadius: 16,
        border : "2px solid black",       
        padding: "20px",
        width: "4vw",
        boxSizing: "border-box",
        fontSize: "large",
        textAlign: "center",
        display: "inline-block",
        lineHeight: "0.6",
        marginLeft: "20px"
        };


    for (let i = 0; i < 10; i++) {
        colorItems.push(
            <div>   <Generic_label style_definition={first_collumn} text="Jahoda"> </Generic_label> <Generic_label style_definition={second_collumn} text="20" >  </Generic_label> <Generic_label style_definition={third_collumn} text="G" >  </Generic_label> </div>
        );

    }





    return (
      <>
      <div> 
        {colorItems}
        </div>
      </>
    )
  }
  export default Recipe_ingredients