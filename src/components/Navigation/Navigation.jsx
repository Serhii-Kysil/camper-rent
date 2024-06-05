import { Link } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => (
  <nav className={css.container}>
    <Link to="/" className={css.link}>
      Home
    </Link>
    <Link to="/catalog" className={css.link}>
      Catalog
    </Link>
    <Link to="/favorites" className={css.link}>
      Favorites
    </Link>
  </nav>
);

export default Navigation;
