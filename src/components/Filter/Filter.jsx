import { useState } from "react";
import css from "./Filter.module.css";

import { GrLocation } from "react-icons/gr";
import { TbToolsKitchen2 } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { TbAutomaticGearbox } from "react-icons/tb";
import { PiTelevisionSimple } from "react-icons/pi";
import { LuShowerHead } from "react-icons/lu";

const Filter = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxClick = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(id)
        ? prevSelectedItems.filter((item) => item !== id)
        : [...prevSelectedItems, id]
    );
  };

  const isChecked = (id) => selectedItems.includes(id);

  const handleRadioClick = (id) => {
    setSelectedRadio(id);
  };

  const isRadioChecked = (id) => selectedRadio === id;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className={css.locationContainer}>
        <p className={css.titles}>Location</p>
        <div className={css.inputCont}>
          <GrLocation
            className={css.svgInput}
            style={{ opacity: inputValue ? 1 : 0.6 }}
          />

          <input
            type="text"
            className={css.locationInput}
            placeholder="City"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className={css.formContainer}>
        <p className={css.titles}>Filters</p>
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.equipment}>
            <h3>Vehicle equipment</h3>
            <hr className={css.line} />
            <ul className={css.checkboxCont}>
              {[
                {
                  id: "ac",
                  label: "AC",
                  icon: <FaWind className={css.checkboxSvg} />,
                },
                {
                  id: "automatic",
                  label: "Automatic",
                  icon: <TbAutomaticGearbox className={css.checkboxSvg} />,
                },
                {
                  id: "kitchen",
                  label: "Kitchen",
                  icon: <TbToolsKitchen2 className={css.checkboxSvg} />,
                },
                {
                  id: "tv",
                  label: "TV",
                  icon: <PiTelevisionSimple className={css.checkboxSvg} />,
                },
                {
                  id: "shower",
                  label: "Shower/WC",
                  icon: <LuShowerHead className={css.checkboxSvg} />,
                },
              ].map(({ id, label, icon }) => (
                <li
                  key={id}
                  className={`${css.checkboxItem} ${
                    isChecked(id) ? css.checked : ""
                  }`}
                  onClick={() => handleCheckboxClick(id)}
                >
                  <input
                    type="checkbox"
                    id={id}
                    name="check"
                    className={css.checkInput}
                    checked={isChecked(id)}
                    onChange={() => handleCheckboxClick(id)}
                  />
                  <label htmlFor={id} className={css.checkboxLabel}>
                    {icon}
                    <span className={css.span}>{label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className={css.typeCont}>
            <h3>Vehicle type</h3>
            <hr className={css.line} />
            <ul className={css.radioCont}>
              {[
                {
                  id: "van",
                  label: "Van",
                  icon: (
                    <svg className={css.radioSvg}>
                      <use
                        href="/symbol-defs.svg#icon-Van"
                        className={css.radioIcon}
                      ></use>
                    </svg>
                  ),
                },
                {
                  id: "fully",
                  label: "Fully Integrated",
                  icon: (
                    <svg className={css.radioSvg}>
                      <use
                        href="/symbol-defs.svg#icon-FullyIntegrated"
                        className={css.radioIcon}
                      ></use>
                    </svg>
                  ),
                },
                {
                  id: "alcove",
                  label: "Alcove",
                  icon: (
                    <svg className={css.radioSvg}>
                      <use
                        href="/symbol-defs.svg#icon-AlcoveCamper"
                        className={css.radioIcon}
                      ></use>
                    </svg>
                  ),
                },
              ].map(({ id, label, icon }) => (
                <li
                  key={id}
                  className={`${css.radioItem} ${
                    isRadioChecked(id) ? css.checked : ""
                  }`}
                  onClick={() => handleRadioClick(id)}
                >
                  <input
                    type="radio"
                    id={id}
                    name="radio"
                    className={css.radioInput}
                    checked={isRadioChecked(id)}
                    onChange={() => handleRadioClick(id)}
                  />
                  <label htmlFor={id} className={css.radioLabel}>
                    {icon}
                    <span className={css.span}>{label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <button type="submit" className={css.btn}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filter;
