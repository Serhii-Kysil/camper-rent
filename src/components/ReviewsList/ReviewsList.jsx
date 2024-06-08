import { ReviewItem } from "../ReviewItem/ReviewItem";
import css from "./ReviewsList.module.css";

export const ReviewsList = ({ reviews }) => {
  console.log(reviews);
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review, index) => (
        <ReviewItem key={index} review={review} />
      ))}
    </ul>
  );
};
