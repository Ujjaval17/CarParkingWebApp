import { createSlice } from "@reduxjs/toolkit";

const initialCarState = {
  carData1: [],
  carData: {},
  data: [],
  checkOut: false,
  disData: {},
  close: false,
  error: true,
};

const CarParkingSlice = createSlice({
  name: "carParking",
  initialState: initialCarState,
  reducers: {
    getDetails(state, action) {
      state.carData = action.payload;
      state.carData1 = [...state.data, state.carData];
      state.data = state.carData1;
    //   console.log("Test Car data:", state.carData);
    //   console.log(state.carData1);
    },

    updateDetails(state, action) {
      state.carData1 = action.payload;
      console.log("Test Data: ", action.payload);
      state.carData = {};
      state.data = action.payload;
    },

    checkOutData(state, action) {
      state.checkOut = true;
      state.disData = action.payload;
    },

    closeCheckOutData(state) {
      state.close = !state.close;
    },

    errorUpdate(state) {
      state.error = !state.error;
    },
  },
});

export const carParkingActions = CarParkingSlice.actions;
export default CarParkingSlice.reducer;

