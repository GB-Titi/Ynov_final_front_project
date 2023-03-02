import React from 'react';
// import Link from 'next/link'

type InputComponentProps = {
    placeholder: string;
    type: string;
    name: string;
};
const InputComponent: React.FC<InputComponentProps> = ({ placeholder, type,name }) => {

    return (
        <label className='input-label'>
            <span>{placeholder}</span>
            <input type={type} name={name}/>
            <div className='border'></div>
        </label>
    )
}
export default InputComponent;