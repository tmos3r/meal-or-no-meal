import React from 'react';

import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const Notes = props => {
    return (
        <TextBoxComponent
            value={props.value}
            floatLabelType="Auto"
            cssClass="e-outline"
            placeholder="Notes"
            change={event => {props.onChange(event.value)} }
            multiline={true}
        />
    );
};
export default Notes;