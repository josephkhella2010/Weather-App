import { configureStore } from "@reduxjs/toolkit";
import CitySliceReducer from "../ReduxSlices/CitySlice";

const store = configureStore({
  reducer: {
    CityStore: CitySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
