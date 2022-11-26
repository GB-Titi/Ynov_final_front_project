import type { NextPage } from "next";
// import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";
import { LinkButtonComponent } from "my-lib-ui";
// import LoginFormComponent from "../components/LoginFormComponent";
// import Link from 'next/link';
import styles from "../styles/components/Home.module.scss"

const Register_conf: NextPage = () => {
    //   const router = useRouter();
    return (
        <div className={styles.container}>
            <MenuComponent />
            <main>
                <span>Inscription confirmée</span>
                <LinkButtonComponent href="/" text="Retour à l'accueil"/>
            </main>
            <FooterComponent />
        </div>
    );
};

export default Register_conf;