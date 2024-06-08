import css from "./FavoritesPage.module.css";

import { useSelector } from "react-redux";
import { selectFav } from "../../redux/Campers/selector";
import { AdItem } from "../../components/AdItem/AdItem";

export default function FavoritesPage() {
  const favorites = useSelector(selectFav);
  return (
    <div className={css.pageContainer}>
      <h1 className={css.pageTitle}>My Favorite Campers</h1>
      {favorites.length > 0 ? (
        <ul className={css.favList}>
          {favorites.map((camper) => (
            <AdItem key={camper._id} camper={camper} />
          ))}
        </ul>
      ) : (
        <p className={css.emptyMessage}>You have no favorite campers.</p>
      )}
    </div>
  );
}
