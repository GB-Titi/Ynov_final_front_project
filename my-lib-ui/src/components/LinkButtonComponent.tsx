import React from 'react';
import Link from 'next/link'

type LinkButtonComponentProps = {
    href: string;
    text?: string;
};
const LinkButtonComponent: React.FC<LinkButtonComponentProps> = ({ href, text }) => {

    return (
        // <Link href={href}>{span}</Link>
        <Link href={href} className='link_button'>{text}</Link>
    )
}
export default LinkButtonComponent;