/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import css from "./Modal.module.css";

import { RxCross2 } from "react-icons/rx";
import { GrLocation } from "react-icons/gr";

import { TbAutomaticGearbox } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { MdOutlineLocalGasStation } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";
import { LiaCompactDiscSolid } from "react-icons/lia";
import { IoMdRadio } from "react-icons/io";
import { TbCooker } from "react-icons/tb";
import { TbFridge } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";
import { MdMicrowave } from "react-icons/md";

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

  console.log(camper);
  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <RxCross2 className={css.closeButton} onClick={onClose} />

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

        <div className={css.detailedInfo}>
          <ul className={css.imgList}>
            {camper.gallery.map((image, index) => (
              <li key={index} className={css.imgListItem}>
                <img
                  src={image}
                  alt={`Camper image ${index + 1}`}
                  className={css.galleryImage}
                />
              </li>
            ))}
          </ul>
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
          <div className={css.details}>
            <ul className={css.advList}>
              {camper.adults && (
                <li className={css.adItem}>
                  <svg className={css.icon}>
                    <use href="/symbol-defs.svg#icon-Users"></use>
                  </svg>{" "}
                  {camper.adults} adults
                </li>
              )}

              {camper.transmission && (
                <li className={css.adItem}>
                  <TbAutomaticGearbox className={css.icon} />
                  <p>{camper.transmission}</p>
                </li>
              )}

              {camper.details.airConditioner > 0 && (
                <li className={css.adItem}>
                  <FaWind className={css.icon} />
                  <p>AC</p>
                </li>
              )}

              {camper.engine && (
                <li className={css.adItem}>
                  <MdOutlineLocalGasStation className={css.icon} />
                  {camper.engine}
                </li>
              )}

              {camper.details.kitchen > 0 && (
                <li className={css.adItem}>
                  <TbToolsKitchen2 className={css.icon} /> Kitchen
                </li>
              )}

              {camper.details.beds > 0 && (
                <li className={css.adItem}>
                  <IoBedOutline className={css.icon} />
                  {camper.details.beds} beds
                </li>
              )}

              {camper.details.airConditioner > 0 && (
                <li className={css.adItem}>
                  <TbAirConditioning className={css.icon} />
                  {camper.details.airConditioner} airConditioner
                </li>
              )}

              {camper.details.CD > 0 && (
                <li className={css.adItem}>
                  <LiaCompactDiscSolid className={css.icon} /> CD
                </li>
              )}

              {camper.details.radio > 0 && (
                <li className={css.adItem}>
                  <IoMdRadio className={css.icon} />
                  Radio
                </li>
              )}

              {camper.details.hob > 0 && (
                <li className={css.adItem}>
                  <TbCooker className={css.icon} />
                  {camper.details.hob} hob
                </li>
              )}

              {camper.details.freezer > 0 && (
                <li className={css.adItem}>
                  <TbFridge className={css.icon} /> freezer
                </li>
              )}

              {camper.details.TV > 0 && (
                <li className={css.adItem}>
                  <PiTelevisionSimple className={css.icon} /> TV
                </li>
              )}

              {camper.details.bathroom > 0 && (
                <li className={css.adItem}>
                  <LuShowerHead className={css.icon} /> Bathroom
                </li>
              )}

              {camper.details.microwave > 0 && (
                <li className={css.adItem}>
                  <MdMicrowave className={css.icon} /> Microwave
                </li>
              )}
            </ul>
          </div>

          <div className={css.form}></div>
        </div>
      </div>
    </div>
  );
};
