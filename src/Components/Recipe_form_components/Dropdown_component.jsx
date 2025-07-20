import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useEffect } from "react";

export default function Dropdown_component(props) {
    const ing = [
        { name: 'Pieces' },
        { name: 'Grams'},
        { name: 'Spoons' },
        { name: 'ml' },
    ];
    
    const [selectedIng, setSelectedIng] = useState(
        ing.find(inge => inge.name === props.unit) || ing[0]
    );

    useEffect(() => {
        const found = ing.find(inge => inge.name === props.unit) || ing[0];
        setSelectedIng(found);
        props.setData1(found); 
    }, [props.unit]);
    
    return (
        <div className="card flex justify-content-center">
            <Dropdown value={selectedIng} onChange={(e) => {setSelectedIng(e.value),props.setData(e)}} options={ing} optionLabel="name" 
                 className="w-full md:w-14rem" required/>
        </div>
    )
}