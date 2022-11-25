import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";

export default function Home() {
  return (
    <div>
      <MenuComponent/>
      <main>
        <div>
          <h1>Page d&apos;accueil</h1>
        </div>
      </main>
      <FooterComponent/>
    </div>
  )
}
