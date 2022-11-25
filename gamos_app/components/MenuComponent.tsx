import styles from "../styles/components/Menu.module.scss";
import logo from "../public/Logo.svg"
import Image from "next/image"
import Link from 'next/link'

const MenuComponent: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Image className={styles.logo} src={logo} alt="logo" width={66} height={66} />
        <span className={styles.brand_name}>RIDE</span>
      </div>
      <Link className={styles.button} href="/login">Connexion admin</Link>
    </div>
  );
};
export default MenuComponent;