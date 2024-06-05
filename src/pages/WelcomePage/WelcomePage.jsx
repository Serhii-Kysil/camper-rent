import { Link } from "react-router-dom";
import css from "./WelcomePage.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function WelcomePage() {
  return (
    <div className={css.cont}>
      <h1 className={css.title}>Welcome to Our Camper Rental Service</h1>
      <p className={css.desc}>
        We offer a variety of campers for rent across Ukraine...
      </p>
      <Link to="/catalog" className={css.link}>
        Got to the catalog <FaArrowRight />
      </Link>
    </div>
  );
}
