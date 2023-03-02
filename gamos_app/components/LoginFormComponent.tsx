import styles from "../styles/components/LoginForm.module.scss";
import Link from 'next/link'
import red_arrow from "../public/arrow.png"
import Image from "next/image"
import { LinkButtonComponent, InputComponent } from "my-lib-ui";
import { useRef } from "react";


const LoginFormComponent: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {

    e.preventDefault()
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };

    }
    const username = target.username.value;
    const password = target.password.value;

    console.log("Handle submit", username, password);

  }
  return (
    <div className={styles.login_container}>
      <div className={styles.backlink_field}>
        <Image src={red_arrow} alt="logo" width={12} />
        <Link href="/" className={styles.backlink}>retour</Link>
      </div>
      <form action="POST" className={styles.form} onSubmit={handleSubmit} ref={formRef}>
        <h1>Connexion</h1>
        <InputComponent placeholder="Username" type="text" name='username' />
        <InputComponent placeholder="Password" type="password" name="password" />
        <LinkButtonComponent href="/" text="Connexion" />
        <button type="submit"> Go</button>

      </form>
    </div>
  );
};
export default LoginFormComponent;