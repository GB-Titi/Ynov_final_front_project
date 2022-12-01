import React from 'react';

type RadioButtonComponentProps = {
    span?: string;
};
const RadioButtonComponent: React.FC<RadioButtonComponentProps> = ({ span }) => {

    return (
        <label className='radio'>
            <input name="radio" type="radio"/>
            <span>{span}</span>
        </label>
    )
}
export default RadioButtonComponent;