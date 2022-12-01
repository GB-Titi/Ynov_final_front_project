import React from 'react';
// import Link from 'next/link'

type InputComponentProps = {
    placeholder: string;
    type: string
};
const InputComponent: React.FC<InputComponentProps> = ({ placeholder, type }) => {

    return (
        <label className='input-label'>
            <span>{placeholder}</span>
            <input type={type}/>
            <div className='border'></div>
        </label>
    )
}
export default InputComponent;