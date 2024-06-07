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
import { CiCalendar } from "react-icons/ci";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

export const Modal = ({ camper, onClose, reviewCount, city, country }) => {
  const [activeTab, setActiveTab] = useState("features");

  console.log(camper);

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

  function formatStringValue(value) {
    return value.replace(/(\d+)([a-zA-Z])/g, "$1 $2");
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email format"
      ),
    date: Yup.date()
      // .required("Date is required")
      .default(() => new Date()),
    textarea: Yup.string(),
  });

  const nameField = useId();
  const emailField = useId();
  const dateField = useId();
  const commentField = useId();

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
            <div className={css.moreInfo}>
              {activeTab === "features" && (
                <div className={css.features}>
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
                  <div className={css.details}>
                    <h3 className={css.subTitle}>Vehicle details</h3>
                    <hr className={css.line} />
                    <ul className={css.detailsList}>
                      <li className={css.detailsItem}>
                        <span>Form</span>
                        <span style={{ textTransform: "capitalize" }}>
                          {camper.form}
                        </span>
                      </li>
                      <li className={css.detailsItem}>
                        <span>Length</span>
                        <span>{formatStringValue(camper.length)}</span>
                      </li>
                      <li className={css.detailsItem}>
                        <span>Width</span>
                        <span>{formatStringValue(camper.width)}</span>
                      </li>
                      <li className={css.detailsItem}>
                        <span>Height</span>
                        <span>{formatStringValue(camper.height)}</span>
                      </li>
                      <li className={css.detailsItem}>
                        <span>Tank</span>
                        <span>{formatStringValue(camper.tank)}</span>
                      </li>
                      <li className={css.detailsItem}>
                        <span>Consumption</span>
                        <span>{camper.consumption}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              <div className={css.formContainer}>
                <div className={css.formDesc}>
                  <h3 className={css.formTitle}>Book your campervan now</h3>
                  <p className={css.formDesc}>
                    Stay connected! We are always ready to help you.
                  </p>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    date: "",
                    comment: "",
                  }}
                  validationSchema={validationSchema}
                >
                  <Form autoComplete="off" className={css.form}>
                    <div className={css.fields}>
                      <div className={css.formGroup}>
                        <Field
                          placeholder={"Name"}
                          className={`${css.formFiled} ${css.nameFiled}`}
                          type="text"
                          name="name"
                          id={nameField}
                        />
                        <ErrorMessage
                          className={css.error}
                          name="name"
                          component="span"
                        />
                      </div>
                      <div className={css.formGroup}>
                        <Field
                          placeholder={"Email"}
                          className={css.formFiled}
                          type="text"
                          name="email"
                          id={emailField}
                        />
                        <ErrorMessage
                          className={css.error}
                          name="email"
                          component="span"
                        />
                      </div>
                      <div
                        className={css.formGroup}
                        style={{ position: "relative" }}
                      >
                        <Field
                          placeholder={"Booking date"}
                          className={`${css.formFiled} ${css.dateFiled}`}
                          type="text"
                          name="date"
                          id={dateField}
                        />
                        <CiCalendar className={css.calendarIcon} />
                        <ErrorMessage
                          className={css.error}
                          name="date"
                          component="span"
                        />
                      </div>
                      <div className={css.formGroup}>
                        <Field
                          as="textarea"
                          placeholder={"Comment"}
                          className={`${css.formFiled} ${css.textareaField}`}
                          type="text"
                          name="textarea"
                          id={commentField}
                        />
                        <ErrorMessage
                          className={css.error}
                          name="textarea"
                          component="span"
                        />
                      </div>
                    </div>
                    <div className={css.btnGroup}>
                      <button className={css.btn} type="submit">
                        Send
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>

            <div className={css.form}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
