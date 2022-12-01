import React from 'react';
// import Link from 'next/link'

type ButtonComponentProps = {
    text?: string;
};
const ButtonComponent: React.FC<ButtonComponentProps> = ({ text }) => {

    return (
        // <Link href={href}>{span}</Link>
        <button className='link_button'>{text}</button>
    )
}
export default ButtonComponent;