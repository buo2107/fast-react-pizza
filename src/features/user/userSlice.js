import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

/*
  Problem: 
    We want to add the user's address information into our userSlice, and how can we get this information is from an API by using fetchAddress()
    However, fetchAddress() is an async function which we CANNOT directly call in Redux reducer.

  Solution: 
    So, here is the Thunk Middleware comes into play.
    And we can implement it by useing createAsyncThunk('action name', async function(){return payload for the reducer})
*/

// fetchAddress will become the action creator function that we will later call in or code
export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // Paylod of the FULFULLED state
    return { position, address };
  },
);

const initialState = {
  username: "",
  status: "idle",
  position: "",
  address: "",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error =
          "There was a problem getting your address.Make sure to fill this field";
      }),
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
export const getUsername = (state) => state.user.username;
