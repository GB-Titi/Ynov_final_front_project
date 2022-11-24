import styles from '../styles/Home.module.css'
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";

export default function Home() {
  return (
    <div>
      <MenuComponent/>
      <div>
        <h1>Page d&apos;accueil</h1>
      </div>
      <FooterComponent/>
    </div>
  )
}
