import styles from "../styles/components/Menu.module.scss";
import logo from "../public/Logo.svg"
import Image from "next/image";

const MenuComponent: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <Image className={styles.logo} src={logo} alt="logo" width={66} height={66} />
        <h1>RIDE</h1>
      </div>
      <div className={styles.button}>Connexion admin</div>
    </div>
  );
};
export default MenuComponent;