import Filter from "../../components/Filter/Filter";
import css from "./MainPage.module.css";

export default function MainPage() {
  return (
    <div className={css.container}>
      <Filter />
    </div>
  );
}
