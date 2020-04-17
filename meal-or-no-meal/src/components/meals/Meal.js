import React, { useState } from 'react';

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';

import Name from './Name';
import Notes from './Notes';

const Meal = () => {
    const [name, setName] = useState("");
    const [notes, setNotes] = useState("");

    const handleSubmit = () => {
        console.log(`Meal Name: ${name}` );
        console.log(`Notes: ${notes}` );

        handleClear();
    };

    const handleClear = () => {
        setName("");
        setNotes("");
    };

    return (
        <div>
            <Name value={name} onChange={value => { setName(value)} } />
            <Notes value={notes} onChange={value => {setNotes(value)} } />
            <ButtonComponent cssClass="e-primary" onClick={handleSubmit}>Submit</ButtonComponent>
            <ButtonComponent cssClass="e-outline" onClick={handleClear}>Clear</ButtonComponent>
        </div>
    );
};

export default Meal;