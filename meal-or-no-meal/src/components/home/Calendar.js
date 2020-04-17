import React from 'react';

import { CalendarComponent } from '@syncfusion/ej2-react-calendars';

const Calendar = props => {
    return (
        <div data-testid="calendar">
            <CalendarComponent change={props.onClick} />
        </div>
    );
};

export default Calendar;