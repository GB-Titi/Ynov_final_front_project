import styles from "../styles/components/Footer.module.scss";
// import styles from '../styles/Home.module.css'
import Image from 'next/image'

const FooterComponent: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <a className={styles.link}>Contact</a>
            <a className={styles.link}>Conditions général des ventes</a>
            <span className={styles.span}>RIDE 2022 - tout droits réservés</span>
        </footer>
    );
  };

export default FooterComponent;