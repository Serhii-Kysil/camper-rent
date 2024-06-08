/* eslint-disable react/prop-types */
import css from "./ImgGallery.module.css";

export const ImgGallery = ({ camper }) => {
  return (
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
  );
};
