import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from "react";

export default function Dropdown_component(props) {
    const cities = [
        { name: 'Pieces' },
        { name: 'Grams'},
        { name: 'Spoons' },
        { name: 'ml' },
    ];
    
    const [selectedCity, setSelectedCity] = useState(
        cities.find(city => city.name === props.unit) || cities[0]
    );

    useEffect(() => {
        const found = cities.find(city => city.name === props.unit) || cities[0];
        setSelectedCity(found);
        props.setData1(found); 
    }, [props.unit]);
    
    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedCity} onChange={(e) => {setSelectedCity(e.value),props.setData(e)}} options={cities} optionLabel="name" 
                 className="w-full md:w-14rem" required/>
        </div>
    )
}