import { useEffect, useState } from "react";
import { AdItem } from "../AdItem/AdItem";
import css from "./AdList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../redux/Campers/operations";
import { selectAll } from "../../redux/Campers/selector";

export const AdList = () => {
  const [page, setPage] = useState(1);
  const campers = useSelector(selectAll);
  const [hasMore, setHasMore] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await dispatch(fetchCampers({ page }));
      if (result.payload.length < 4) {
        setHasMore(false);
      }
    };
    fetchData();
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.listContainer}>
      {campers.map((camper) => (
        <AdItem key={camper._id} camper={camper} />
      ))}

      {hasMore && (
        <button type="button" className={css.loadBtn} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};
