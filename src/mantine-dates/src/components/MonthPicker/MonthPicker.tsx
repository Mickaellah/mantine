import React from 'react';

export interface MonthPickerProps {
    text: string
}

export const MonthPicker = ({text}) => {
    return (
       <div>{text}</div>
    )
}