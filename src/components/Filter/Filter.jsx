import { useState } from "react";
import css from "./Filter.module.css";

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
          <svg
            width={18}
            height={20}
            className={css.svgInput}
            style={{ opacity: inputValue ? 1 : 0.6 }}
          >
            <use href="/symbol-defs.svg#icon-map-pin"></use>
          </svg>
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
                  <svg className={css.checkboxSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-Shower"
                      className={css.checkboxIcon}
                    ></use>
                  </svg>
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
                  <svg className={css.checkboxSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-Automatic"
                      className={css.checkboxIcon}
                    ></use>
                  </svg>
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
                  <svg className={css.checkboxSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-Kitchen"
                      className={css.checkboxIcon}
                    ></use>
                  </svg>
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
                  <svg className={css.checkboxSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-TV"
                      className={css.checkboxIcon}
                    ></use>
                  </svg>
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
                  <svg className={css.checkboxSvg}>
                    <use
                      href="/public/symbol-defs.svg#icon-Shower"
                      className={css.checkboxIcon}
                    ></use>
                  </svg>
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
