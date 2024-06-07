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

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
        <form className={css.form}>
          <div className={css.equipment}>
            <h3>Vehicle equipment</h3>
            <hr className={css.line} />
            <ul className={css.checkboxCont}>
              <li className={css.checkboxItem}>
                <input
                  type="checkbox"
                  id="ac"
                  name="check"
                  className={css.checkInput}
                />
                <label htmlFor="ac" className={css.checkboxLabel}>
                  <FaWind className={css.checkboxSvg} />
                  <span className={css.span}>AC</span>
                </label>
              </li>
              <li className={css.checkboxItem}>
                <input
                  type="checkbox"
                  id="automatic"
                  name="check"
                  className={css.checkInput}
                />
                <label htmlFor="automatic" className={css.checkboxLabel}>
                  <TbAutomaticGearbox className={css.checkboxSvg} />
                  <span className={css.span}>Automatic</span>
                </label>
              </li>
              <li className={css.checkboxItem}>
                <input
                  type="checkbox"
                  id="kitchen"
                  name="check"
                  className={css.checkInput}
                />
                <label htmlFor="kitchen" className={css.checkboxLabel}>
                  <TbToolsKitchen2 className={css.checkboxSvg} />
                  <span className={css.span}>Kitchen</span>
                </label>
              </li>
              <li className={css.checkboxItem}>
                <input
                  type="checkbox"
                  id="tv"
                  name="check"
                  className={css.checkInput}
                />
                <label htmlFor="tv" className={css.checkboxLabel}>
                  <PiTelevisionSimple className={css.checkboxSvg} />
                  <span className={css.span}>TV</span>
                </label>
              </li>
              <li className={css.checkboxItem}>
                <input
                  type="checkbox"
                  id="shower"
                  name="check"
                  className={css.checkInput}
                />
                <label htmlFor="shower" className={css.checkboxLabel}>
                  <LuShowerHead className={css.checkboxSvg} />
                  <span className={css.span}>Shower/WC</span>
                </label>
              </li>
            </ul>
          </div>
          <div className={css.typeCont}>
            <h3>Vehicle type</h3>
            <hr className={css.line} />
            <ul className={css.radioCont}>
              <li className={css.radioItem}>
                <input
                  type="radio"
                  id="van"
                  name="radio"
                  className={css.radioInput}
                />
                <label htmlFor="van" className={css.radioLabel}>
                  <svg className={css.radioSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-Van"
                      className={css.radioIcon}
                    ></use>
                  </svg>
                  <span className={css.span}>Van</span>
                </label>
              </li>
              <li className={css.radioItem}>
                <input
                  type="radio"
                  id="fully"
                  name="radio"
                  className={css.radioInput}
                />
                <label htmlFor="fully" className={css.radioLabel}>
                  <svg className={css.radioSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-FullyIntegrated"
                      className={css.radioIcon}
                    ></use>
                  </svg>
                  <span className={css.span}>Fully Integrated</span>
                </label>
              </li>
              <li className={css.radioItem}>
                <input
                  type="radio"
                  id="alcove"
                  name="radio"
                  className={css.radioInput}
                />
                <label htmlFor="alcove" className={css.radioLabel}>
                  <svg className={css.radioSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-AlcoveCamper"
                      className={css.radioIcon}
                    ></use>
                  </svg>
                  <span className={css.span}>Alcone</span>
                </label>
              </li>
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
