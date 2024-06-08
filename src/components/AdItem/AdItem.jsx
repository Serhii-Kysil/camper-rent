import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/Campers/CamperSlice";
import css from "./AdItem.module.css";
import { Modal } from "../Modal/Modal";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { FaWind } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

export const AdItem = ({ camper }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorite);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favorites.some((fav) => fav._id === camper._id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(camper._id));
    } else {
      dispatch(addFavorite(camper));
    }
  };

  const handleShowMoreClick = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

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
              <p className={css.price}>€{camper.price},00</p>

              {isFavorite && (
                <FaHeart
                  onClick={handleFavoriteClick}
                  className={css.filledHeart}
                />
              )}
              {!isFavorite && (
                <FaRegHeart
                  className={css.heartSvg}
                  onClick={handleFavoriteClick}
                />
              )}
            </div>
          </div>
          <div className={css.rewiews}>
            <div className={css.ratingBlock}>
              <svg className={css.ratingSvg}>
                <use href="/symbol-defs.svg#icon-Rating"></use>
              </svg>
              <span className={css.ratingText}>
                {camper.rating}({reviewCount} Reviews)
              </span>
            </div>
            <div className={css.locationBlock}>
              <GrLocation className={css.locationSvg} />
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
              <use href="/symbol-defs.svg#icon-Users"></use>
            </svg>{" "}
            {camper.adults} adults
          </li>
          <li className={css.adItem}>
            <TbAutomaticGearbox className={css.icon} />
            {camper.transmission}
          </li>
          <li className={css.adItem}>
            <MdOutlineLocalGasStation className={css.icon} />
            {camper.engine}
          </li>

          {camper.details.kitchen > 0 && (
            <li className={css.adItem}>
              <TbToolsKitchen2 className={css.icon} /> Kitchen
            </li>
          )}

          <li className={css.adItem}>
            <IoBedOutline className={css.icon} />
            {camper.details.beds} beds
          </li>
          {camper.details.airConditioner > 0 && (
            <li className={css.adItem}>
              <FaWind className={css.icon} />
              AC
            </li>
          )}
        </ul>

        <button type="button" className={css.btn} onClick={handleShowMoreClick}>
          Show more
        </button>

        {isModalOpen && (
          <Modal
            camper={camper}
            reviewCount={reviewCount}
            city={city}
            country={country}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};
