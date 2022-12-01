import type { NextPage } from "next";
// import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";
import merchant_center from "../public/btn_store.png"
import Image from "next/image"
import { LinkButtonComponent, InputComponent,RadioButtonComponent, SelectCountryComponent, CheckboxComponent } from "my-lib-ui";
// import LoginFormComponent from "../components/LoginFormComponent";
// import Link from 'next/link';
import styles from "../styles/components/Home.module.scss"

const Register_conf: NextPage = () => {
    //   const router = useRouter();
    return (
        <div>
        <MenuComponent />
        <main>
          <div className={styles.background}>
            <div className={styles.infos}>
              <span>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
              <br />Notre expérience est à votre service pour répondre à toutes vos demandes
              <hr />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.form}>
            <h1>INSCRIPTION</h1>
              <div className={styles.confirmation_content}>
                <span>Votre demande d’inscription a bien été prise en compte.<br />Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.</span>
              <Image className="image_store" src={merchant_center} alt="merchant_center"/>
              </div>
            </div>
          </div>
        </main>
        <FooterComponent />
      </div>
    );
};

export default Register_conf;