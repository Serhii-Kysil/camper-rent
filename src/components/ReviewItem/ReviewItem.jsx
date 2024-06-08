import css from "./ReviewItem.module.css";

export const ReviewItem = ({ review }) => {
  const letter = review.reviewer_name.charAt(0);
  const rating = review.reviewer_rating;
  const stars = Array(5).fill(0);

  return (
    <div className={css.reviewBlock}>
      <div className={css.reviewerCont}>
        <div className={css.avatar}>
          <p>{letter}</p>
        </div>
        <div className={css.rating}>
          <span>{review.reviewer_name}</span>
          <div className={css.count}>
            {stars.map((_, index) => (
              <svg
                key={index}
                className={`${css.ratingSvg} ${
                  index < rating ? css.filled : ""
                }`}
              >
                <use href="/symbol-defs.svg#icon-Rating"></use>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className={css.reviewText}>{review.comment}</p>
    </div>
  );
};
