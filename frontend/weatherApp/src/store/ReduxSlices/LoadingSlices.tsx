import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};
const LoadingSlices = createSlice({
  name: "LoadingSlices",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = LoadingSlices.actions;
export default LoadingSlices.reducer;
