
function Publish(props) {

        const handleSubmit = (e) => {
            e.preventDefault();
            const sendData = async () => {
                const data = { 
                    Recipe_Id : props.Recipe_id,
                    State: props.IsPublished
                };
                try {
                    const response = await fetch('http://localhost/my-app/src/Model/Set_public.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });
                
                    if (!response.ok) {
                        throw new Error('Nastala chyba při odesílání dat');
                    }
                
                    const result = await response.json();
                    console.log(result);
                    props.setPublishState(parseInt(result));
                } catch (error) {
                    console.error('Chyba:', error);
                    alert('Došlo k chybě při odesílání dat.');
                }
            };
            sendData();
        };

    if(props.IsPublished)
    {
        return (
        <>
            <button className="Unpublish" onClick={handleSubmit}> Unpublish! </button>
        </>
    )  
    }
    else {
        return (
        <>
            <button className="Publish" onClick={handleSubmit} > Publish! </button>
        </>
    )
    }
  }
  export default Publish