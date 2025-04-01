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
        // Here you would typically send the data to your backend
        console.log("Registering with:", formData);
    };

    return (
        <form className="register-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Email"
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
                    required
                />
            <br/> 
            <button type="submit" className="register-button">
                Register
            </button>
        </form>
    );
}

export default Register_form;