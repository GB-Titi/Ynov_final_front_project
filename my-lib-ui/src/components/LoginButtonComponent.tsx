import React from 'react' 

type LoginButtonComponentProps = {
    children?: string;
};
const LoginButtonComponent:React.FC<LoginButtonComponentProps> = ({children}) => {

    return (
        <button> {children} </button>
    )
}
export default LoginButtonComponent;