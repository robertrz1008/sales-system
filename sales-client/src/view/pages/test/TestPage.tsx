import React, { useState } from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { Button } from 'primereact/button';

interface City {
    name: string;
    code: string;
}

function TestPage() {
        const [selectedCity, setSelectedCity] = useState<City | null>(null);
        const cities: City[] = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    
        return (
            <div >
                <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                    placeholder="Select a City" className="w-full md:w-14rem" style={{width:"80%"}}/>
                    <Button label='save' onClick={() => {
                        console.log(selectedCity?.name)
                    }}/>
            </div>
            
        )
}

export default TestPage