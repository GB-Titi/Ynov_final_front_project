import type { NextPage } from "next";
// import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";
import LoginFormComponent from "../components/LoginFormComponent";
import Link from 'next/link';
import styles from "../styles/components/LoginForm.module.scss";

const Login: NextPage = () => {
//   const router = useRouter();
  return (
    <div className={styles.container}>
      <MenuComponent />
      <main>
        <LoginFormComponent/>
      </main>
      <FooterComponent />
    </div>
  );
};

export default Login;