import React from 'react';
// import Link from 'next/link'

type CheckboxComponentProps = {
    text: string;
};
const CheckboxComponent: React.FC<CheckboxComponentProps> = ({ text }) => {

    return (
        // <Link href={href}>{span}</Link>
        <label className="checkbox">
            <input name="check" type="checkbox" />
            <span>{text}</span>
        </label>
    )
}
export default CheckboxComponent;