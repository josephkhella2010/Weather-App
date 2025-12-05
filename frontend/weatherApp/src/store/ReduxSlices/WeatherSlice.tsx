import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
interface InitialStateType {
  city: string | null;
  isCityCorrect: boolean;
  fullForecast: any | null;
  weatherInfo: any | null;
  isLoading: boolean;
}
const initialState: InitialStateType = {
  city: sessionStorage.getItem("city")
    ? JSON.parse(sessionStorage.getItem("city")!)
    : null,

  isCityCorrect: sessionStorage.getItem("correctCity")
    ? JSON.parse(sessionStorage.getItem("correctCity")!)
    : false,
  fullForecast: [],
  weatherInfo: [],
  isLoading: false,
};

const WeatherSlice = createSlice({
  name: " WeatherSlice",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string | null>) => {
      if (action.payload) {
        state.city = action.payload;
        sessionStorage.setItem("city", JSON.stringify(action.payload));
      } else {
        sessionStorage.removeItem("city");
      }
    },
    setIsCityCorrect(state, action: PayloadAction<boolean | null>) {
      if (action.payload) {
        state.isCityCorrect = action.payload;
        localStorage.setItem("correctCity", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("correctCity");
      }
    },
    setWeatherInfo: (state, action: PayloadAction<any[] | null>) => {
      state.weatherInfo = action.payload;
    },
    setFullForecast: (state, action: PayloadAction<any[] | null>) => {
      state.fullForecast = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    filterWeatherInfo: (state, action: PayloadAction<string[]>) => {
      const selectedDates = action.payload;

      // Only show selected dates, empty array if none selected
      state.weatherInfo =
        selectedDates.length === 0
          ? []
          : state.fullForecast.filter((item: any) =>
              selectedDates.includes(item.dt_txt)
            );
    },
  },
});

export const {
  setCity,
  setIsCityCorrect,
  setWeatherInfo,
  setIsLoading,
  setFullForecast,
  filterWeatherInfo,
} = WeatherSlice.actions;
export default WeatherSlice.reducer;
