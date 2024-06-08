import css from "./DetailsInfo.module.css";

export const DetailsInfo = ({ camper }) => {
  function formatStringValue(value) {
    return value.replace(/(\d+)([a-zA-Z])/g, "$1 $2");
  }

  return (
    <div className={css.details}>
      <h3 className={css.subTitle}>Vehicle details</h3>
      <hr className={css.line} />
      <ul className={css.detailsList}>
        <li className={css.detailsItem}>
          <span>Form</span>
          <span style={{ textTransform: "capitalize" }}>{camper.form}</span>
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
  );
};
