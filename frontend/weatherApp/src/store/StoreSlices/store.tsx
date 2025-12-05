import { configureStore } from "@reduxjs/toolkit";
import CitySliceReducer from "../ReduxSlices/CitySlice";
import WeatherSliceReducer from "../ReduxSlices/WeatherSlice";

const store = configureStore({
  reducer: {
    CityStore: CitySliceReducer,
    WeatherStore: WeatherSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
