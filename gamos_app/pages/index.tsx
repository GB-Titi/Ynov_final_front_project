import { RadioButtonComponent, InputComponent, LinkButtonComponent, CheckboxComponent } from "my-lib-ui";
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
            <hr />
          </div>
        </div>
        <div className={styles.container}>
          <form action="POST" className={styles.form}>
            <h1>INSCRIPTION</h1>
            <p>Je suis :</p>
            <div className={styles.radioContainer}>
              <RadioButtonComponent span="une entreprise"></RadioButtonComponent>
              <RadioButtonComponent span="un particulier"></RadioButtonComponent>
              {/* <label className={s∑tyles.radio}>
                <input name="radio" type="radio" checked />
                <span>une entreprise</span>
              </label>
              <label className={styles.radio}>
                <input name="radio" type="radio" />
                <span>un particulier</span>
              </label> */}
            </div>
            <div className={styles.fieldContainer}>
              <InputComponent placeholder="Nom" type="text"/>
              <InputComponent placeholder="Prénom" type="text"/>
              <InputComponent placeholder="E-mail" type="email"/>
              <InputComponent placeholder="Numéro de téléphone" type="tel"/>

              {/* <label>
                <span>Numéro de téléphone</span>
                <input type="tel"/>
                <div className={styles.border}></div>
              </label> */}

              <label>
                <span>Nationalité</span>
                <select>
                  <option value="">Français</option>
                  <option value="">Pas français</option>
                </select>
                <div className={styles.border}></div>
              </label>
            </div>
   
            <CheckboxComponent text="j’atteste que je possède un permis de conduire valide."></CheckboxComponent>
            {/* <div className={styles.button}>Demander mon inscription</div> */}
            <LinkButtonComponent href="register_confirmation" text="Demander mon inscription" />
          </form>
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}
