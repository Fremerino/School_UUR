import { useState } from "react";
import Cookies from 'js-cookie';
function Login_form(props) {
    const [formData_login, setFormData_login] = useState({
        name_login: "",
        password_login: ""
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData_login(prev => ({
            ...prev,
            [name]: value 
        }));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = async () => {
            const data = { 
                name: formData_login.name_login,
                password: formData_login.password_login
            };

            
            
            try {
                const response = await fetch('http://localhost/my-app/src/Model/Get_user.php', {
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
                
                if(!(result == "Wrong password or username" ||  result =="error"))
                {
                    props.Message("Succes!");
                    Cookies.set('ID', result[0], { expires: 7 });
                    Cookies.set('NAME', result[1], { expires: 7 });
                    props.Name_set(result[1]);
                }
                else 
                {
                    props.Message(result[0]);
                }
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
        <form className="login-form" onSubmit={handleSubmit}>
        
                <input
                    type="text"
                    id="email"
                    name="name_login"
                    value={formData_login.name_login}
                    onChange={handleChange}
                    placeholder="Name"
                    maxLength={8}
                    required
                />
                <br/> 

                <input
                    type="password"
                    id="password"
                    name="password_login"
                    value={formData_login.password_login}
                    onChange={handleChange}
                    placeholder="Password"
                    maxLength={15}
                    required
                />
                <br/> 

            <button type="submit" className="login-button">
                Login
            </button>
        </form>
       </>
    );
}

export default Login_form;