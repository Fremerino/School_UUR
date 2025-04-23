import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Dropdown_component(props) {
    const [selectedCity, setSelectedCity] = useState("Pieces");
    const cities = [
        { name: 'Pieces', code: 'NY' },
        { name: 'Grams', code: 'RM' },
        { name: 'Spoons', code: 'LDN' },
        { name: 'ml', code: 'IST' },
    ];
    
    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => {setSelectedCity(e.value),props.setData(e)}} options={cities} optionLabel="name" 
                placeholder="Select a Unit" className="w-full md:w-14rem" required/>
        </div>
    )
}