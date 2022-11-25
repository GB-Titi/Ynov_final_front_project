import styles from "../styles/components/LoginForm.module.scss";
import Link from 'next/link'

const LoginFormComponent: React.FC = () => {
  return (
    <div className={styles.login_container}>
        <Link href="/">Retour</Link>
        <form>
            <h2>Connexion</h2>
            <input placeholder="test_input"></input>
        </form>
    </div>
  );
};
export default LoginFormComponent;