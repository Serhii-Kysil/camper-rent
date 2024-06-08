/* eslint-disable react/prop-types */
import css from "./FeaturesList.module.css";

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

export const FeaturesList = ({ camper }) => {
  return (
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
  );
};
