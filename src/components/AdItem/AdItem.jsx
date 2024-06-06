import css from "./AdItem.module.css";

export const AdItem = ({ camper }) => {
  console.log(camper);
  const averageRating =
    camper.reviews.reduce((acc, review) => acc + review.reviewer_rating, 0) /
    camper.reviews.length;
  const reviewCount = camper.reviews.length;

  const [country, city] = camper.location.split(", ");
  return (
    <div className={css.itemContainer}>
      <img src={camper.gallery[0]} alt="Camper photos" className={css.photo} />
      <div className={css.textBlock}>
        <div>
          <div className={css.mainInfoBlock}>
            <h3>{camper.name}</h3>
            <div className={css.priceBlock}>
              <p className={css.price}>€{camper.price}.00</p>
              {/* <svg className={css.heartSvg}>
              <use className={css.heartIcon} href="/public/heart.svg"></use>
            </svg> */}
            </div>
          </div>
          <div className={css.rewiews}>
            <div className={css.ratingBlock}>
              <svg className={css.ratingSvg}>
                <use href="/public/symbol-defs.svg#icon-Rating"></use>
              </svg>
              <span>
                {averageRating.toFixed(1)} ({reviewCount} Reviews)
              </span>
            </div>
            <div className={css.locationBlock}>
              <svg className={css.locationSvg}>
                <use href="/public/symbol-defs.svg#icon-map-pin"></use>
              </svg>
              <p className={css.location}>
                {city}, {country}
              </p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <ul className={css.advList}>
          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-Users"></use>
            </svg>{" "}
            {camper.adults} adults
          </li>
          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-Automatic"></use>
            </svg>{" "}
            {camper.transmission}
          </li>
          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-Petrol"></use>
            </svg>{" "}
            {camper.engine}
          </li>

          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-Kitchen"></use>
            </svg>{" "}
            Kitchen
          </li>
          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-Bed"></use>
            </svg>{" "}
            {camper.details.beds} beds
          </li>
          <li className={css.adItem}>
            <svg className={css.icon}>
              <use href="/public/symbol-defs.svg#icon-ac"></use>
            </svg>{" "}
            AC
          </li>
        </ul>

        <button type="button" className={css.btn}>
          {" "}
          Show more
        </button>
      </div>
    </div>
  );
};
