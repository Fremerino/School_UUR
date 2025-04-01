import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function Dropdown_component() {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'Pieces', code: 'NY' },
        { name: 'Grams', code: 'RM' },
        { name: 'Spoons', code: 'LDN' },
        { name: 'ml', code: 'IST' },
    ];

    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="Select a Unit" className="w-full md:w-14rem" />
        </div>
    )
}