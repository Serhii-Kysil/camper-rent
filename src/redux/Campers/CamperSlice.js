import { createSlice } from "@reduxjs/toolkit";

import { fetchCampers, getCamper } from "./operations";

const handleItemsPending = (state) => {
  state.isItemsLoading = true;
};

const handleItemsRejected = (state, action) => {
  state.isItemsLoading = false;
  state.itemsError = action.payload;
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
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        (camper) => camper._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handleItemsPending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (action.meta.arg.page === 1) {
          state.items = action.payload;
        } else {
          state.items = [...state.items, ...action.payload];
        }
      })
      .addCase(fetchCampers.rejected, handleItemsRejected);
  },
});

export const { addFavorite, removeFavorite } = camperSlice.actions;
const camperReducer = camperSlice.reducer;
export default camperReducer;
