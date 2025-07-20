import { useState } from "react";

function Register_form(props) {
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = async () => {
            const data = { 
                name: formData.name,
                password: formData.password
            };

            
            
            try {
                const response = await fetch('http://localhost/my-app/src/Model/Send.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                const result = await response.json();
                props.Message(result[0]);
                props.set_pop_up(true);
                
                
            } catch (error) {
                console.error('Chyba:', error);
                alert('Došlo k chybě při odesílání dat.');
            }
        };
        sendData();
    };

    return (
        <>
        <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    maxLength={8}
                    required
                />
                <br/> 
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    maxLength={15}
                    required
                />
            <br/> 
            <button type="submit" className="register-button">
                Register
            </button>
        </form>
      
        </>
    );
}

export default Register_form;