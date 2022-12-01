import styles from "../styles/components/LoginForm.module.scss";
import Link from 'next/link'
import red_arrow from "../public/arrow.png"
import Image from "next/image"
import { LinkButtonComponent, InputComponent } from "my-lib-ui";

const LoginFormComponent: React.FC = () => {
  return (
    <div className={styles.login_container}>
      <div className={styles.backlink_field}>
        <Image src={red_arrow} alt="logo" width={12} />
        <Link href="/" className={styles.backlink}>retour</Link>
      </div>
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