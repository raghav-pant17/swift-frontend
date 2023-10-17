const { createSlice } = require("@reduxjs/toolkit");

const locDataSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
    locationId: null,
  },
  reducers: {
    setLocation: (state, action) => {
      console.log("Vipul", state, action);
      state.location = action.payload.location;
      state.locationId = action.payload.locationId;
    },
    clearLocation: (state) => {
      state.location = null;
      state.locationId = null;
    },
  },
});

export const { setLocation, clearLocation } = locDataSlice.actions;

export const selectLocation = (state) => state.location;
export const selectLocationId = (state) => state.location.locationId;

export default locDataSlice.reducer;
