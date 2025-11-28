import { configureStore } from "@reduxjs/toolkit";
import LoadingSlicesReducer from "../ReduxSlices/LoadingSlices";
import CitySliceReducer from "../ReduxSlices/CitySlice";

const store = configureStore({
  reducer: {
    loadingStore: LoadingSlicesReducer,
    CityStore: CitySliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
