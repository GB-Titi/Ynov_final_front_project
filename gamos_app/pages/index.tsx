import { RadioButtonComponent, InputComponent, LinkButtonComponent, CheckboxComponent, SelectCountryComponent } from "my-lib-ui";
import { useRef, useState } from "react";
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/components/Home.module.scss"

export default function Home() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      email: { value: string };
      surname: { value: string };
      phone: { value: string };
      name: { value: string };
      countrySelect: {value: string};
    };
    const email = target.email.value;
    const surname = target.surname.value;
    const phone = target.phone.value;
    const name = target.name.value;
    const countrySelect = target.countrySelect.value;

    console.log("Handle submit", email, surname, phone, name, countrySelect)
  }

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
          <form action="POST" className={styles.form} onSubmit={handleSubmit} ref={formRef}>
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
              <InputComponent placeholder="Nom" type="text" name="name" />
              <InputComponent placeholder="Prénom" type="text" name="surname" />
              <InputComponent placeholder="E-mail" type="email" name="email" />
              <InputComponent placeholder="Numéro de téléphone" type="tel" name="phone" />
              <label className={styles.selectCountry}>
                <span>Nationalité</span>
                <SelectCountryComponent />
              </label>
              <label htmlFor=""></label>
              <CheckboxComponent text="j’atteste que je possède un permis de conduire valide."></CheckboxComponent>
              <label htmlFor=""></label>
              <LinkButtonComponent href="register_confirmation" text="Demander mon inscription" />
              <button type="submit"> Go</button>
            </div>
          </form>
        </div>
      </main>
      <FooterComponent />
    </div>
  )
}
