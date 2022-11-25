import styles from '../styles/components/Home.module.scss'
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";

export default function Home() {
  return (
    <div>
      <MenuComponent/>
      <main>
        <div className={styles.background}>
        </div>
      </main>
      <FooterComponent/>
    </div>
  )
}
