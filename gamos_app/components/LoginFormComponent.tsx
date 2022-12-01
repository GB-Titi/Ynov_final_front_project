import styles from "../styles/components/LoginForm.module.scss";
import Link from 'next/link'
import { LinkButtonComponent, InputComponent } from "my-lib-ui";

const LoginFormComponent: React.FC = () => {
  return (
    <div className={styles.login_container}>
         <Link href="/" className={styles.backlink}>retour</Link>
        <form>
            <h1>Connexion</h1>
            <InputComponent placeholder="Username" type="text"/>
            <InputComponent placeholder="Password" type="password"/>
            <LinkButtonComponent href="/" text="Connexion"/>
        </form>
    </div>
  );
};
export default LoginFormComponent;