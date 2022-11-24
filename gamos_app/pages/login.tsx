import type { NextPage } from "next";
// import { useRouter } from "next/router";
import FooterComponent from "../components/FooterComponent";
import MenuComponent from "../components/MenuComponent";

const Login: NextPage = () => {
//   const router = useRouter();
  return (
    <div>
      <MenuComponent />
      <main></main>
      <FooterComponent />
    </div>
  );
};

export default Login;