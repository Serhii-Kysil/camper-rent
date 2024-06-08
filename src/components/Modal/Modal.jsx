/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import css from "./Modal.module.css";

import { RxCross2 } from "react-icons/rx";
import { GrLocation } from "react-icons/gr";

import { RentForm } from "../RentForm/RentForm";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { DetailsInfo } from "../DetailsInfo/DetailsInfo";
import { ImgGallery } from "../ImgGallery/ImgGallery";
import { ReviewsList } from "../ReviewsList/ReviewsList";

export const Modal = ({ camper, onClose, reviewCount, city, country }) => {
  const [activeTab, setActiveTab] = useState("features");

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <div className={css.headerBlock}>
            <div className={css.mainInfo}>
              <h3>{camper.name}</h3>
              <div className={css.ratingLocation}>
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
              <p className={css.price}>€{camper.price}.00</p>
            </div>
            <RxCross2 className={css.closeButton} onClick={onClose} />
          </div>

          <div className={css.detailedInfo}>
            <ImgGallery camper={camper} />
            <p className={css.desc}>{camper.description}</p>
          </div>

          <div className={css.featureReviews}>
            <div className={css.tabs}>
              <button
                type="button"
                className={`${css.chooseBtn} ${
                  activeTab === "features" ? css.active : ""
                }`}
                onClick={() => handleTabChange("features")}
              >
                Features
              </button>
              <button
                type="button"
                className={`${css.chooseBtn} ${
                  activeTab === "reviews" ? css.active : ""
                }`}
                onClick={() => handleTabChange("reviews")}
              >
                Reviews
              </button>
            </div>
            <div className={css.moreInfo}>
              {activeTab === "features" && (
                <div className={css.features}>
                  <FeaturesList camper={camper} />
                  <DetailsInfo camper={camper} />
                </div>
              )}
              {activeTab === "reviews" && (
                <div className={css.reviews}>
                  <ReviewsList reviews={camper.reviews} />
                </div>
              )}

              <RentForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
