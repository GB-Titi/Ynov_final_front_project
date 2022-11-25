import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/components/Home.module.scss"

export default function Home() {
  return (
    <div>
      <MenuComponent />
      <main>
        <div className={styles.background}>
          <div className={styles.infos}>
            <span>▷</span> Depuis 2008, RIDE, agence de location de voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes, Saint-Tropez, Courchevel, Saint-Moritz...).
            <br />Notre expérience est à votre service pour répondre à toutes vos demandes
          </div>

        </div>
        <div className={styles.container}>
          <form action="POST" className={styles.form}>
            <h2>INSCRIPTION</h2>
            <p>Je suis :</p>
            <div className={styles.radioContainer}>
              <div>
                <input className={styles.radio} type="radio" id="huey" name="drone" value="huey" checked />
                  <label>Une entreprise</label>
              </div>

              <div>
                <input className={styles.radio}  type="radio" id="dewey" name="drone" value="dewey" />
                  <label>Un particulier</label>
              </div>
            </div>
          </form>
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}
