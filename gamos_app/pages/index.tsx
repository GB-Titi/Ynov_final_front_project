import { RadioButtonComponent, InputComponent, LinkButtonComponent, CheckboxComponent, SelectCountryComponent } from "my-lib-ui";
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
              <InputComponent placeholder="Nom" type="text" />
              <InputComponent placeholder="Prénom" type="text" />
              <InputComponent placeholder="E-mail" type="email" />
              <InputComponent placeholder="Numéro de téléphone" type="tel" />
              <label className={styles.selectCountry}>
                <span>Nationalité</span>
                <SelectCountryComponent />
              </label>
              <label htmlFor=""></label>
              <CheckboxComponent text="j’atteste que je possède un permis de conduire valide."></CheckboxComponent>
              <label htmlFor=""></label>
              <LinkButtonComponent href="register_confirmation" text="Demander mon inscription"/>
            </div>
          </form>
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}
