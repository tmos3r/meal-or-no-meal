import React from 'react';

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const Name = props => {
    return (
        <TextBoxComponent
            value={props.value}
            floatLabelType="Auto"
            cssClass="e-outline"
            placeholder="Meal Name"
            change={event => { props.onChange(event.value)} }
        />
    );
};

export default Name;