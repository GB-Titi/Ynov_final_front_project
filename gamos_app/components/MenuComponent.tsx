import styles from "../styles/components/Menu.module.scss";
import logo from "../public/Logo.svg"
import Image from "next/image"
import Link from 'next/link'
import { LinkButtonComponent, ButtonComponent } from "my-lib-ui";

const MenuComponent: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.brand}>
        <a href="/">
          <Image className={styles.logo} src={logo} alt="logo" width={66} height={66} />
        </a>
        <span className={styles.brand_name}>RIDE</span>
      </div>
      {/* <Link href="/login">
        <ButtonComponent text="Connexion"></ButtonComponent>
      </Link> */}
      <div className={styles.btn_field}>
        <LinkButtonComponent href="login" text="Connexion" />
      </div>
    </div>
  );
};
export default MenuComponent;