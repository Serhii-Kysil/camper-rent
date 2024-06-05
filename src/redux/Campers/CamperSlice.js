import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers, getCamper } from "./operations";

const handleItemsPending = (state) => {
  state.isItemsLoading = true;
};

const handleItemsRejected = (state, action) => {
  state.isItemsLoading = false;
  state.itemsError = action.payload;
};
const handleFavPending = (state) => {
  state.isFavLoading = true;
};

const handleFavRejected = (state, action) => {
  state.isFavLoading = false;
  state.favError = action.payload;
};

const camperSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isItemsLoading: false,
    itemsError: null,
    favorite: [],
    isFavLoading: false,
    favError: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handleItemsPending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleItemsRejected);
  },
});

const camperReducer = camperSlice.reducer;
export default camperReducer;
