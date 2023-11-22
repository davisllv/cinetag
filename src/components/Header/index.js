import { Link } from "react-router-dom";
import Style from "./header.module.css";
import HeaderLink from "./HeaderLink";

const Header = () => {
  return (
    <header className={Style.header}>
      <Link to={"./"}>
        <img src="imagens/logo.png" alt="Logo da Página do Cinetag" />
      </Link>

      <nav>
        <HeaderLink path={"./"}>Home</HeaderLink>

        <HeaderLink path={"./Favorites"}>Favoritos</HeaderLink>
      </nav>
    </header>
  );
};

export default Header;
