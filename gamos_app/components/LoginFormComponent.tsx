import styles from "../styles/components/LoginForm.module.scss";
import Link from 'next/link'

const LoginFormComponent: React.FC = () => {
  return (
    <div className={styles.login_container}>
        <Link href="/" className={styles.backlink}>retour</Link>
        <form>
            <span>Connexion</span>
            <input placeholder="Username"></input>
            <input placeholder="Password"></input>
            <button>Connexion</button>
        </form>
    </div>
  );
};
export default LoginFormComponent;