import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://666018685425580055b2259e.mockapi.io/api";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page }, thunkAPI) => {
    try {
      const response = await axios.get("/advert", {
        params: {
          limit: 4,
          page,
        },
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getCamper = createAsyncThunk(
  "camper/getCamper",
  async (camperId, thunkAPI) => {
    try {
      const response = await axios.get(`/advert/${camperId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
